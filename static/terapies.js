document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dotsContainer = document.querySelector(".dots-container");
    let cards = document.querySelectorAll(".hover-card");

    let index = 1; // Start from 1 because we clone the first card
    const totalCards = cards.length;

    // Clone first and last card
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[cards.length - 1].cloneNode(true);
    
    // Append and Prepend Clones
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, cards[0]);

    cards = document.querySelectorAll(".hover-card"); // Update NodeList after cloning
    let cardWidth = cards[0].offsetWidth + 30; // Card width + margin

    // Move to the first actual card (not the cloned one)
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;

    // Create Dots
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalCards; i++) {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll(".dot");

    function updateCarousel(transition = true) {
        carousel.style.transition = transition ? "transform 0.5s ease-in-out" : "none";
        carousel.style.transform = `translateX(-${index * cardWidth}px)`;

        // Update Dots (ignore clones)
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index - 1);
        });
    }

    nextBtn.addEventListener("click", () => {
        if (index >= totalCards) {
            index++;
            updateCarousel();
            setTimeout(() => {
                index = 1;
                updateCarousel(false);
            }, 500);
        } else {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index <= 0) {
            index--;
            updateCarousel();
            setTimeout(() => {
                index = totalCards;
                updateCarousel(false);
            }, 500);
        } else {
            index--;
            updateCarousel();
        }
    });

    // Dot Click Event
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i + 1; // Adjust for clone
            updateCarousel();
        });
    });

    // Keyboard Navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") prevBtn.click();
        if (e.key === "ArrowRight") nextBtn.click();
    });

    // Touch Swipe Functionality
    let touchStartX = 0, touchEndX = 0;
    
    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) nextBtn.click();
        if (touchEndX > touchStartX + swipeThreshold) prevBtn.click();
    }

    // Window Resize Handling
    window.addEventListener("resize", () => {
        setTimeout(() => {
            cardWidth = cards[0].offsetWidth + 30;
            updateCarousel(false);
        }, 100);
    });

    console.log("Infinite Carousel Initialized");
});
