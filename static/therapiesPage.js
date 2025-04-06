document.addEventListener('DOMContentLoaded', function() {
    const contentSections = document.querySelectorAll('.content-section');
    const therapyItems = document.querySelectorAll('.therapy-item');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');
    let currentIndex = 0;

    // Show first section and hide others
    contentSections.forEach((section, index) => {
        if (index === 0) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    function updateActiveTherapy() {
        therapyItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        currentPageSpan.textContent = currentIndex + 1;
    }

    let isScrolling = false;
    const rightPanel = document.querySelector('.right-panel');
    
    rightPanel.addEventListener('wheel', function(event) {
        event.preventDefault();
        if (isScrolling) return;
        
        const delta = event.deltaY;
        if (delta > 50 && currentIndex < contentSections.length - 1) {
            isScrolling = true;
            contentSections[currentIndex].classList.remove('active');
            currentIndex++;
            contentSections[currentIndex].classList.add('active');
            updateActiveTherapy();
        } else if (delta < -50 && currentIndex > 0) {
            isScrolling = true;
            contentSections[currentIndex].classList.remove('active');
            currentIndex--;
            contentSections[currentIndex].classList.add('active');
            updateActiveTherapy();
        }

        if (isScrolling) {
            setTimeout(() => {
                isScrolling = false;
            }, 600);
        }
    }, { passive: false });

    therapyItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (currentIndex !== index) {
                contentSections[currentIndex].classList.remove('active');
                currentIndex = index;
                contentSections[currentIndex].classList.add('active');
                updateActiveTherapy();
            }
        });
    });

    updateActiveTherapy();
    totalPagesSpan.textContent = contentSections.length;
});