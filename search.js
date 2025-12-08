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

// Kuzey Kıbrıs Şehirleri
const CITIES = [
    'Lefkoşa',
    'Gazimağusa',
    'Girne',
    'Güzelyurt',
    'İskele',
    'Lefke',
    'Dipkarpaz',
    'Bogaz',
    'Akdoğan',
    'Alsancak',
    'Arapköy',
    'Bellapais',
    'Beyarmudu',
    'Boğazköy',
    'Çatalköy',
    'Değirmenlik',
    'Esentepe',
    'Geçitkale',
    'Gönyeli',
    'Güngör',
    'Karaoğlanoğlu',
    'Karşıyaka',
    'Kayalar',
    'Lapta',
    'Maraş',
    'Ozanköy',
    'Sadrazamköy',
    'Şehitler',
    'Tatlısu',
    'Yenierenköy',
    'Yeni Boğaziçi',
    'Zeytinlik'
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
    const value = input.value.toLowerCase().trim();

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
    matches.slice(0, 8).forEach(city => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';

        // Highlight matching text
        const regex = new RegExp(`(${escapeRegex(value)})`, 'gi');
        item.innerHTML = city.replace(regex, '<strong>$1</strong>');

        item.addEventListener('click', () => {
            input.value = city;
            container.style.display = 'none';
        });

        container.appendChild(item);
    });

    container.style.display = 'block';
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
[fromInput, toInput, dateInput, seatsInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loadTrips();
        }
    });
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

// Create trip card element
function createTripCard(trip) {
    const card = document.createElement('div');
    card.className = 'trip-card';

    const departureDate = trip.departureTime ? new Date(trip.departureTime.seconds * 1000) : new Date();
    const formattedDate = formatDate(departureDate);
    const formattedTime = formatTime(departureDate);

    card.innerHTML = `
        <div class="trip-card-header">
            <div class="trip-route">
                <span class="trip-from">📍 ${trip.from || 'Başlangıç'}</span>
                <span class="trip-arrow">→</span>
                <span class="trip-to">🎯 ${trip.to || 'Varış'}</span>
            </div>
            <div class="trip-price">${trip.price || '0'}₺</div>
        </div>

        <div class="trip-card-body">
            <div class="trip-info">
                <div class="info-item">
                    <span class="info-icon">📅</span>
                    <span>${formattedDate}</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">🕐</span>
                    <span>${formattedTime}</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">👥</span>
                    <span>${trip.availableSeats || 0} koltuk</span>
                </div>
            </div>

            <div class="trip-driver">
                <div class="driver-avatar">
                    ${trip.driverName ? trip.driverName.charAt(0).toUpperCase() : '👤'}
                </div>
                <div class="driver-info">
                    <div class="driver-name">${trip.driverName || 'Sürücü'}</div>
                    <div class="driver-rating">⭐ ${trip.driverRating || '5.0'}</div>
                </div>
            </div>

            ${trip.notes ? `<div class="trip-notes">💬 ${trip.notes}</div>` : ''}
        </div>

        <div class="trip-card-footer">
            <a href="download.html" class="btn btn-primary btn-sm">
                📱 Uygulamadan İletişime Geç
            </a>
        </div>
    `;

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
    tripsContainer.innerHTML = `
        <div class="error-state">
            <div class="error-icon">⚠️</div>
            <h3>Bir Hata Oluştu</h3>
            <p>Yolculuklar yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.</p>
        </div>
    `;
}
