document.addEventListener('DOMContentLoaded', function() {
    // ROI Calculator
    const calculator = {
        inputs: {
            sessionsPerDay: document.getElementById('sessionsPerDay'),
            pricePerSession: document.getElementById('pricePerSession'),
            daysPerMonth: document.getElementById('daysPerMonth')
        },
        outputs: {
            monthlyRevenue: document.getElementById('monthlyRevenue'),
            annualRevenue: document.getElementById('annualRevenue')
        },
        
        calculate() {
            const sessions = parseFloat(this.inputs.sessionsPerDay.value) || 0;
            const price = parseFloat(this.inputs.pricePerSession.value) || 0;
            const days = parseFloat(this.inputs.daysPerMonth.value) || 0;
            
            const monthly = sessions * price * days;
            const annual = monthly * 12;
            
            this.outputs.monthlyRevenue.textContent = `$${monthly.toLocaleString()}`;
            this.outputs.annualRevenue.textContent = `$${annual.toLocaleString()}`;
        },
        
        init() {
            Object.values(this.inputs).forEach(input => {
                input.addEventListener('input', () => this.calculate());
            });
            this.calculate();
        }
    };
    
    // Initialize calculator
    calculator.init();
    
    // Gallery Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentImageIndex = 0;
    
    function createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="" alt="Gallery Image">
                <button class="prev-btn">&lt;</button>
                <button class="next-btn">&gt;</button>
                <button class="close-btn">&times;</button>
            </div>
        `;
        document.body.appendChild(lightbox);
        return lightbox;
    }
    
    const lightbox = createLightbox();
    const lightboxImage = lightbox.querySelector('img');
    
    function showImage(index) {
        const galleryImage = galleryItems[index].querySelector('img');
        lightboxImage.src = galleryImage.src;
        currentImageIndex = index;
    }
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            showImage(index);
        });
    });
    
    // Lightbox Navigation
    lightbox.querySelector('.prev-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        showImage(currentImageIndex);
    });
    
    lightbox.querySelector('.next-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        showImage(currentImageIndex);
    });
    
    lightbox.querySelector('.close-btn').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    
    // Close lightbox when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            switch(e.key) {
                case 'ArrowLeft':
                    lightbox.querySelector('.prev-btn').click();
                    break;
                case 'ArrowRight':
                    lightbox.querySelector('.next-btn').click();
                    break;
                case 'Escape':
                    lightbox.style.display = 'none';
                    break;
            }
        }
    });
});