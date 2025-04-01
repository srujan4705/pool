document.addEventListener('DOMContentLoaded', function() {
    const therapyItems = document.querySelectorAll('.therapy-item');
    const contentSections = document.querySelectorAll('.content-section');
    const currentPageEl = document.getElementById('current-page');
    const totalPagesEl = document.getElementById('total-pages');
    
    // Set total pages
    totalPagesEl.textContent = therapyItems.length;
    
    // Initialize first section as active
    contentSections[0].classList.add('active');
    therapyItems[0].classList.add('active');
    currentPageEl.textContent = '1';
    
    // Add click event to each therapy item
    therapyItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Update active therapy item
            document.querySelector('.therapy-item.active').classList.remove('active');
            item.classList.add('active');
            
            // Update active content section
            document.querySelector('.content-section.active').classList.remove('active');
            contentSections[index].classList.add('active');
            
            // Update page indicator
            currentPageEl.textContent = index + 1;
        });
    });
    
    // Scroll functionality
    const rightPanel = document.querySelector('.right-panel');
    let isScrolling = false;
    let currentIndex = 0;
    
    rightPanel.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        if (!isScrolling) {
            isScrolling = true;
            
            // Determine scroll direction
            if (e.deltaY > 0 && currentIndex < therapyItems.length - 1) {
                // Scrolling down
                currentIndex++;
            } else if (e.deltaY < 0 && currentIndex > 0) {
                // Scrolling up
                currentIndex--;
            }
            
            // Update active therapy item
            document.querySelector('.therapy-item.active').classList.remove('active');
            therapyItems[currentIndex].classList.add('active');
            
            // Update active content section
            document.querySelector('.content-section.active').classList.remove('active');
            contentSections[currentIndex].classList.add('active');
            
            // Update page indicator
            currentPageEl.textContent = currentIndex + 1;
            
            // Reset scrolling flag after animation
            setTimeout(() => {
                isScrolling = false;
            }, 500);
        }
    });
});