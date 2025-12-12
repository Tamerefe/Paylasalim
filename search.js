// Security Functions
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    // XSS koruması: Tehlikeli karakterleri temizle
    return input
        .replace(/[<>"'`]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+=/gi, '')
        .trim();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Firebase Configuration
// Firebase projenizin config bilgilerini buraya ekleyin
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Kuzey Kıbrıs Şehirleri ve Mahalleler
const CITIES = [
    // Lefkoşa ve Mahalleleri
    'Lefkoşa',
    'Lefkoşa - Köşklüçiftlik',
    'Lefkoşa - Hamitköy',
    'Lefkoşa - Ortaköy',
    'Lefkoşa - Gönyeli',
    'Lefkoşa - Haspolat',
    'Lefkoşa - Minareliköy',
    'Lefkoşa - Kanlıköy',

    // Gazimağusa ve Mahalleleri
    'Gazimağusa',
    'Gazimağusa - İsmet Paşa',
    'Gazimağusa - Karakol',
    'Gazimağusa - Tuzla',
    'Gazimağusa - Yeni Boğaziçi',
    'Gazimağusa - Salamis',
    'Gazimağusa - Çanakkale',

    // Girne ve Mahalleleri
    'Girne',
    'Girne - Karşıyaka',
    'Girne - Karaoğlanoğlu',
    'Girne - Alsancak',
    'Girne - Lapta',
    'Girne - Çatalköy',
    'Girne - Bellapais',
    'Girne - Ozanköy',
    'Girne - Arapköy',
    'Girne - Kayalar',
    'Girne - Esentepe',

    // Güzelyurt ve Mahalleleri
    'Güzelyurt',
    'Güzelyurt - Akincilar',
    'Güzelyurt - Güngör',
    'Güzelyurt - Sadrazamköy',
    'Güzelyurt - Kalkanlı',

    // İskele ve Mahalleleri
    'İskele',
    'İskele - Boğaz',
    'İskele - Mehmetçik',
    'İskele - Kaplıca',
    'İskele - Yeni Erenköy',
    'İskele - Büyükkonuk',

    // Lefke
    'Lefke',
    'Lefke - Gemikonağı',
    'Lefke - Yeşilyurt',

    // Diğer Bölgeler
    'Dipkarpaz',
    'Akdoğan',
    'Beyarmudu',
    'Boğazköy',
    'Değirmenlik',
    'Geçitkale',
    'Maraş',
    'Şehitler',
    'Tatlısu',
    'Zeytinlik',
    'Pile',
    'Yedidalga',
    'Çamlıbel',
    'Kalavaç',
    'Paşaköy',
    'Türkeli',
    'Tatlısu',
    'Aydınköy',
    'Bahçeli',
    'Kaleburnu'
];

// Initialize Firebase
let db;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log('Firebase initialized successfully');
} catch (error) {
    console.error('Firebase initialization error:', error);
}

// DOM Elements
const tripsContainer = document.getElementById('trips-container');
const loadingState = document.getElementById('loading-state');
const emptyState = document.getElementById('empty-state');
const searchBtn = document.getElementById('search-btn');
const fromInput = document.getElementById('from-location');
const toInput = document.getElementById('to-location');
const seatsInput = document.getElementById('seats-filter');
const datePicker = document.getElementById('custom-date-picker');
const dateDisplay = document.getElementById('date-display');
const daysGrid = document.getElementById('days-grid');

// Autocomplete için container'lar
let fromAutocomplete = null;
let toAutocomplete = null;
let selectedDate = null;

// Load all trips on page load
document.addEventListener('DOMContentLoaded', () => {
    initAutocomplete();
    initCustomDatePicker();
    loadTrips();
});

// Initialize custom date picker
function initCustomDatePicker() {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Set today as default
    selectedDate = today;
    updateDateDisplay();

    // Get days in current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create day buttons
    daysGrid.innerHTML = '';
    for (let day = 1; day <= daysInMonth; day++) {
        const dayBtn = document.createElement('button');
        dayBtn.type = 'button';
        dayBtn.className = 'day-btn';
        dayBtn.textContent = day;

        // Mark today
        if (day === currentDay) {
            dayBtn.classList.add('today');
            dayBtn.classList.add('selected');
        }

        // Mark past days as disabled
        if (day < currentDay) {
            dayBtn.disabled = true;
            dayBtn.classList.add('disabled');
        }

        dayBtn.addEventListener('click', () => selectDay(day, dayBtn));
        daysGrid.appendChild(dayBtn);
    }

    // Toggle grid visibility
    dateDisplay.addEventListener('click', () => {
        daysGrid.classList.toggle('show');
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!datePicker.contains(e.target)) {
            daysGrid.classList.remove('show');
        }
    });
}

// Select day
function selectDay(day, btn) {
    const today = new Date();
    selectedDate = new Date(today.getFullYear(), today.getMonth(), day);

    // Remove previous selection
    document.querySelectorAll('.day-btn.selected').forEach(b => {
        if (!b.classList.contains('today') || b !== btn) {
            b.classList.remove('selected');
        }
    });

    // Add new selection
    btn.classList.add('selected');

    updateDateDisplay();
    daysGrid.classList.remove('show');
}

// Update date display
function updateDateDisplay() {
    if (!selectedDate) return;

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = selectedDate.toLocaleDateString('tr-TR', options);
    dateDisplay.querySelector('.day-label').textContent = dateStr;
}

// Initialize autocomplete
function initAutocomplete() {
    // From input autocomplete
    fromAutocomplete = createAutocompleteContainer(fromInput);
    fromInput.parentNode.style.position = 'relative';
    fromInput.parentNode.appendChild(fromAutocomplete);

    // To input autocomplete
    toAutocomplete = createAutocompleteContainer(toInput);
    toInput.parentNode.style.position = 'relative';
    toInput.parentNode.appendChild(toAutocomplete);

    // Event listeners
    fromInput.addEventListener('input', (e) => handleAutocomplete(e.target, fromAutocomplete));
    toInput.addEventListener('input', (e) => handleAutocomplete(e.target, toAutocomplete));

    // Enter key listeners
    fromInput.addEventListener('keydown', (e) => handleKeydown(e, fromInput, fromAutocomplete));
    toInput.addEventListener('keydown', (e) => handleKeydown(e, toInput, toAutocomplete));

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!fromInput.contains(e.target) && !fromAutocomplete.contains(e.target)) {
            fromAutocomplete.style.display = 'none';
        }
        if (!toInput.contains(e.target) && !toAutocomplete.contains(e.target)) {
            toAutocomplete.style.display = 'none';
        }
    });
}

// Create autocomplete container
function createAutocompleteContainer(input) {
    const container = document.createElement('div');
    container.className = 'autocomplete-list';
    container.style.display = 'none';
    return container;
}

// Handle autocomplete
function handleAutocomplete(input, container) {
    const value = sanitizeInput(input.value.toLowerCase().trim());

    if (value.length < 2) {
        container.style.display = 'none';
        return;
    }

    const matches = CITIES.filter(city =>
        city.toLowerCase().includes(value) ||
        removeTurkishChars(city.toLowerCase()).includes(removeTurkishChars(value))
    );

    if (matches.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.innerHTML = '';
    matches.slice(0, 8).forEach((city, index) => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        if (index === 0) {
            item.classList.add('autocomplete-active');
        }

        // XSS koruması: Güvenli DOM manipülasyonu
        const cityText = document.createTextNode('');
        const parts = city.split(new RegExp(`(${escapeRegex(value)})`, 'gi'));
        parts.forEach(part => {
            if (part.toLowerCase() === value.toLowerCase()) {
                const strong = document.createElement('strong');
                strong.textContent = part;
                item.appendChild(strong);
            } else {
                item.appendChild(document.createTextNode(part));
            }
        });

        item.addEventListener('click', () => {
            input.value = city;
            container.style.display = 'none';
            input.focus();
        });

        container.appendChild(item);
    });

    container.style.display = 'block';
}

// Handle keyboard navigation
function handleKeydown(e, input, container) {
    const items = container.querySelectorAll('.autocomplete-item');

    if (e.key === 'Enter') {
        e.preventDefault();

        // Find active item or get first item
        const activeItem = container.querySelector('.autocomplete-active');
        if (activeItem) {
            input.value = activeItem.textContent;
            container.style.display = 'none';
        } else if (items.length > 0) {
            input.value = items[0].textContent;
            container.style.display = 'none';
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateItems(items, 1);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateItems(items, -1);
    } else if (e.key === 'Escape') {
        container.style.display = 'none';
    }
}

// Navigate through autocomplete items
function navigateItems(items, direction) {
    if (items.length === 0) return;

    let currentIndex = -1;
    items.forEach((item, index) => {
        if (item.classList.contains('autocomplete-active')) {
            currentIndex = index;
        }
        item.classList.remove('autocomplete-active');
    });

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    items[currentIndex].classList.add('autocomplete-active');
    items[currentIndex].scrollIntoView({ block: 'nearest' });
}

// Remove Turkish characters for better matching
function removeTurkishChars(str) {
    const map = {
        'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
        'Ç': 'C', 'Ğ': 'G', 'İ': 'I', 'Ö': 'O', 'Ş': 'S', 'Ü': 'U'
    };
    return str.replace(/[çğıöşüÇĞİÖŞÜ]/g, char => map[char] || char);
}

// Escape regex special characters
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Load all trips on page load (kept existing function name for compatibility)

// Search button click
searchBtn.addEventListener('click', () => {
    loadTrips();
});

// Enter key on inputs
[fromInput, toInput, seatsInput].forEach(input => {
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                loadTrips();
            }
        });
    }
});

// Load trips from Firestore
async function loadTrips() {
    showLoading();

    try {
        let query = db.collection('trips');

        // Apply filters
        const filters = getFilters();

        // Note: Firestore has limitations on complex queries
        // For advanced filtering, fetch all and filter client-side
        const snapshot = await query
            .where('status', '==', 'active') // Only active trips
            .orderBy('departureTime', 'asc')
            .limit(50)
            .get();

        let trips = [];
        snapshot.forEach(doc => {
            trips.push({ id: doc.id, ...doc.data() });
        });

        // Client-side filtering
        trips = filterTrips(trips, filters);

        displayTrips(trips);

    } catch (error) {
        console.error('Error loading trips:', error);
        showError();
    }
}

// Get filter values
function getFilters() {
    const dateStr = selectedDate ?
        `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}` :
        '';

    return {
        from: fromInput.value.toLowerCase().trim(),
        to: toInput.value.toLowerCase().trim(),
        date: dateStr,
        seats: seatsInput.value
    };
}

// Filter trips client-side
function filterTrips(trips, filters) {
    return trips.filter(trip => {
        // Filter by departure location
        if (filters.from && !trip.from?.toLowerCase().includes(filters.from)) {
            return false;
        }

        // Filter by destination
        if (filters.to && !trip.to?.toLowerCase().includes(filters.to)) {
            return false;
        }

        // Filter by date
        if (filters.date) {
            const tripDate = new Date(trip.departureTime?.seconds * 1000).toISOString().split('T')[0];
            if (tripDate !== filters.date) {
                return false;
            }
        }

        // Filter by available seats
        if (filters.seats && trip.availableSeats < parseInt(filters.seats)) {
            return false;
        }

        return true;
    });
}

// Display trips
function displayTrips(trips) {
    hideLoading();

    if (trips.length === 0) {
        showEmpty();
        return;
    }

    hideEmpty();
    tripsContainer.innerHTML = '';

    trips.forEach(trip => {
        const tripCard = createTripCard(trip);
        tripsContainer.appendChild(tripCard);
    });
}

// Create trip card element - XSS korumalı
function createTripCard(trip) {
    const card = document.createElement('div');
    card.className = 'trip-card';

    const departureDate = trip.departureTime ? new Date(trip.departureTime.seconds * 1000) : new Date();
    const formattedDate = formatDate(departureDate);
    const formattedTime = formatTime(departureDate);

    // Güvenli DOM manipülasyonu - XSS koruması
    const header = document.createElement('div');
    header.className = 'trip-card-header';

    const route = document.createElement('div');
    route.className = 'trip-route';

    const fromSpan = document.createElement('span');
    fromSpan.className = 'trip-from';
    fromSpan.textContent = `📍 ${trip.from || 'Başlangıç'}`;

    const arrowSpan = document.createElement('span');
    arrowSpan.className = 'trip-arrow';
    arrowSpan.textContent = '→';

    const toSpan = document.createElement('span');
    toSpan.className = 'trip-to';
    toSpan.textContent = `🎯 ${trip.to || 'Varış'}`;

    route.appendChild(fromSpan);
    route.appendChild(arrowSpan);
    route.appendChild(toSpan);

    const priceDiv = document.createElement('div');
    priceDiv.className = 'trip-price';
    priceDiv.textContent = `${trip.price || '0'}₺`;

    header.appendChild(route);
    header.appendChild(priceDiv);

    // Body
    const body = document.createElement('div');
    body.className = 'trip-card-body';

    const tripInfo = document.createElement('div');
    tripInfo.className = 'trip-info';

    const dateItem = document.createElement('div');
    dateItem.className = 'info-item';
    dateItem.innerHTML = '<span class="info-icon">📅</span>';
    const dateSpan = document.createElement('span');
    dateSpan.textContent = formattedDate;
    dateItem.appendChild(dateSpan);

    const timeItem = document.createElement('div');
    timeItem.className = 'info-item';
    timeItem.innerHTML = '<span class="info-icon">🕐</span>';
    const timeSpan = document.createElement('span');
    timeSpan.textContent = formattedTime;
    timeItem.appendChild(timeSpan);

    const seatsItem = document.createElement('div');
    seatsItem.className = 'info-item';
    seatsItem.innerHTML = '<span class="info-icon">👥</span>';
    const seatsSpan = document.createElement('span');
    seatsSpan.textContent = `${trip.availableSeats || 0} koltuk`;
    seatsItem.appendChild(seatsSpan);

    tripInfo.appendChild(dateItem);
    tripInfo.appendChild(timeItem);
    tripInfo.appendChild(seatsItem);

    const driver = document.createElement('div');
    driver.className = 'trip-driver';

    const avatar = document.createElement('div');
    avatar.className = 'driver-avatar';
    avatar.textContent = trip.driverName ? trip.driverName.charAt(0).toUpperCase() : '👤';

    const driverInfo = document.createElement('div');
    driverInfo.className = 'driver-info';

    const driverName = document.createElement('div');
    driverName.className = 'driver-name';
    driverName.textContent = trip.driverName || 'Sürücü';

    const driverRating = document.createElement('div');
    driverRating.className = 'driver-rating';
    driverRating.textContent = `⭐ ${trip.driverRating || '5.0'}`;

    driverInfo.appendChild(driverName);
    driverInfo.appendChild(driverRating);
    driver.appendChild(avatar);
    driver.appendChild(driverInfo);

    body.appendChild(tripInfo);
    body.appendChild(driver);

    if (trip.notes) {
        const notes = document.createElement('div');
        notes.className = 'trip-notes';
        notes.textContent = `💬 ${trip.notes}`;
        body.appendChild(notes);
    }

    // Footer
    const footer = document.createElement('div');
    footer.className = 'trip-card-footer';

    const link = document.createElement('a');
    link.href = 'download.html';
    link.className = 'btn btn-primary btn-sm';
    link.textContent = '📱 Uygulamadan İletişime Geç';

    footer.appendChild(link);

    card.appendChild(header);
    card.appendChild(body);
    card.appendChild(footer);

    return card;
}

// Format date
function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
}

// Format time
function formatTime(date) {
    return date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
}

// Show loading state
function showLoading() {
    loadingState.style.display = 'flex';
    tripsContainer.style.display = 'none';
    emptyState.style.display = 'none';
}

// Hide loading state
function hideLoading() {
    loadingState.style.display = 'none';
    tripsContainer.style.display = 'grid';
}

// Show empty state
function showEmpty() {
    emptyState.style.display = 'flex';
    tripsContainer.style.display = 'none';
}

// Hide empty state
function hideEmpty() {
    emptyState.style.display = 'none';
}

// Show error
function showError() {
    hideLoading();

    // Güvenli DOM oluşturma - XSS koruması
    tripsContainer.innerHTML = '';

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-state';

    const errorIcon = document.createElement('div');
    errorIcon.className = 'error-icon';
    errorIcon.textContent = '⚠️';

    const errorTitle = document.createElement('h3');
    errorTitle.textContent = 'Bir Hata Oluştu';

    const errorText = document.createElement('p');
    errorText.textContent = 'Yolculuklar yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.';

    errorDiv.appendChild(errorIcon);
    errorDiv.appendChild(errorTitle);
    errorDiv.appendChild(errorText);

    tripsContainer.appendChild(errorDiv);
}
