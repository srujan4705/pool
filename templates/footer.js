<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.4.1/swiper-bundle.min.js"></script>;

const body = document.body;
const surveyForm = document.querySelector(".survey-form");

// When survey form is visible
surveyForm.style.display = "block"; // Or however you show the form
body.style.overflow = "hidden"; // Prevent scrolling

// When the survey is closed
surveyForm.style.display = "none";
body.style.overflow = "auto"; // Allow scrolling again

// Initialize Swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Mobile Menu Toggle
  var mobileMenuButton = document.getElementById("mobileMenuButton");
  var mobileMenu = document.getElementById("mobileMenu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
