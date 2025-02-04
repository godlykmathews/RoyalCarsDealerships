// Vehicle data
const vehicles = [
    {
        id: '1',
        make: 'Mercedes-Benz',
        model: 'E-Class',
        year: 2024,
        price: 65900,
        mileage: 0,
        image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1000',
        features: ['Leather Seats', 'Navigation', 'Sunroof', 'Premium Audio'],
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        description: 'Brand new Mercedes-Benz E-Class with premium features and exceptional comfort.'
    },
    {
        id: '2',
        make: 'BMW',
        model: '5 Series',
        year: 2023,
        price: 58700,
        mileage: 12500,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000',
        features: ['Sport Package', 'Heated Seats', 'Lane Assist', 'Parking Sensors'],
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        description: 'Certified pre-owned BMW 5 Series in excellent condition with low mileage.'
    },
    {
        id: '3',
        make: 'Tesla',
        model: 'Model 3',
        year: 2024,
        price: 47900,
        mileage: 0,
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000',
        features: ['Autopilot', 'Glass Roof', 'Premium Interior', 'Long Range'],
        transmission: 'Automatic',
        fuelType: 'Electric',
        description: 'All-electric Tesla Model 3 with the latest technology and impressive range.'
    },
    {
        id: '4',
        make: 'Audi',
        model: 'Q7',
        year: 2024,
        price: 72900,
        mileage: 5000,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=1000',
        features: ['quattro AWD', 'Virtual Cockpit', 'Bang & Olufsen Sound', 'Panoramic Roof'],
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        description: 'Luxurious Audi Q7 SUV with premium features and powerful performance.'
    },
    {
        id: '5',
        make: 'Porsche',
        model: 'Cayenne',
        year: 2023,
        price: 85500,
        mileage: 8750,
        image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80&w=1000',
        features: ['Sport Chrono Package', 'Air Suspension', 'LED Matrix Headlights', 'Sport Seats'],
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        description: 'Athletic Porsche Cayenne combining luxury and performance with hybrid efficiency.'
    },
    {
        id: '6',
        make: 'Lexus',
        model: 'RX',
        year: 2024,
        price: 54900,
        mileage: 0,
        image: 'https://www.motortrend.com/uploads/2023/10/001-2024-Lexus-RX-350-front-view.jpg?w=640&width=640&q=75&format=webp',
        features: ['Safety System+', 'Mark Levinson Audio', 'Head-Up Display', 'Power Liftgate'],
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        description: 'Brand new Lexus RX featuring cutting-edge technology and exceptional comfort.'
    },
    {
        id: '7',
        make: 'Lamborghini',
        model: 'Urus',
        year: 2024,
        price: 225000,
        mileage: 1200,
        image: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/augmented-reality/urus/s/urus_s_ar.png',
        features: ['Sport Exhaust', 'Carbon Fiber Package', 'Advanced Driver Assistance', 'Air Suspension'],
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        description: 'Super SUV with unmatched performance and Italian craftsmanship.'
    },
    {
        id: '8',
        make: 'Rolls-Royce',
        model: 'Ghost',
        year: 2024,
        price: 350000,
        mileage: 0,
        image: 'https://stimg.cardekho.com/images/car-images/930x620/Rolls-Royce/Ghost/8051/1602847337627/223_silver-sand_7a776f.jpg',
        features: ['Starlight Headliner', 'Bespoke Audio', 'Rear Theater', 'Massage Seats'],
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        description: 'The pinnacle of luxury automotive excellence.'
    },
    {
        id: '9',
        make: 'Rivian',
        model: 'R1S',
        year: 2024,
        price: 78500,
        mileage: 0,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2022-rivian-r1s-128-1657043554.jpg?crop=0.723xw:0.609xh;0.163xw,0.391xh&resize=1200:*',
        features: ['Quad Motors', 'Adventure Package', 'Large Battery Pack', 'Camp Mode'],
        transmission: 'Automatic',
        fuelType: 'Electric',
        description: 'All-electric adventure SUV with exceptional capability.'
    },
    {
        id: '10',
        make: 'Bentley',
        model: 'Continental GT',
        year: 2023,
        price: 245000,
        mileage: 3500,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2023-bentley-continental-gt-s-coupe-101-1654526518.jpg?crop=0.767xw:0.648xh;0.0651xw,0.220xh&resize=1200:*',
        features: ['Naim Audio', 'Diamond Quilting', 'Rotating Display', 'Touring Package'],
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        description: 'Grand touring excellence with unmatched refinement.'
    },
    {
        id: '11',
        make: 'Maserati',
        model: 'Grecale',
        year: 2024,
        price: 82000,
        mileage: 0,
        image: 'https://hips.hearstapps.com/hmg-prod/images/2023-maserati-grecale-103-1649184060.jpg?crop=0.638xw:0.540xh;0.213xw,0.357xh&resize=1200:*',
        features: ['Sonus Faber Audio', 'Air Suspension', 'Sport Chrono', 'Premium Package'],
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        description: 'Italian luxury SUV with sporty handling and elegant design.'
    },
    {
        id: '12',
        make: 'Genesis',
        model: 'GV80',
        year: 2024,
        price: 65000,
        mileage: 0,
        image: 'https://gaadiwaadi.com/wp-content/uploads/2023/09/2024-Genesis-GV80-Facelift-3-1280x640.jpg',
        features: ['3D Cluster', 'Remote Smart Parking', 'Road Preview', 'Luxury Package'],
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        description: 'Korean luxury SUV redefining premium mobility.'
    }
];

// Format price to USD currency
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(price);
}

// Format number with commas
function formatNumber(number) {
    return number.toLocaleString();
}

// Create vehicle cards
function createVehicleCards() {
    const vehicleGrid = document.getElementById('vehicleGrid');
    
    vehicles.forEach(vehicle => {
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        
        card.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.year} ${vehicle.make} ${vehicle.model}" class="vehicle-image">
            <div class="vehicle-details">
                <h3 class="vehicle-title">${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
                <div class="vehicle-info">
                    <div class="vehicle-info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        ${formatPrice(vehicle.price)}
                    </div>
                    <div class="vehicle-info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        ${vehicle.year}
                    </div>
                    <div class="vehicle-info-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        ${formatNumber(vehicle.mileage)} mi
                    </div>
                </div>
                <p class="vehicle-description">${vehicle.description}</p>
                <div class="vehicle-features">
                    ${vehicle.features.slice(0, 3).map(feature => 
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                </div>
                <button class="btn btn-primary" onclick="viewVehicleDetails('${vehicle.id}')">
                    View Details
                </button>
            </div>
        `;
        
        vehicleGrid.appendChild(card);
    });
}

// Handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message. We will contact you soon!');
        form.reset();
    });
}

// View vehicle details (placeholder function)
function viewVehicleDetails(vehicleId) {
    const vehicle = vehicles.find(v => v.id === vehicleId);
    alert(`Viewing details for ${vehicle.year} ${vehicle.make} ${vehicle.model}`);
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    menuButton.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Update copyright year
function updateCopyrightYear() {
    const yearSpan = document.querySelector('.footer-bottom span');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    createVehicleCards();
    handleContactForm();
    setupMobileMenu();
    setupSmoothScrolling();
    updateCopyrightYear();
});