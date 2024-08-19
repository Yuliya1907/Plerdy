document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const headerRight = document.querySelector('.header-right');

    burgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
        headerRight.classList.toggle('active');
    });

    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.second-section-block');
    const prevSlideButton = document.querySelector('.prev-slide');
    const nextSlideButton = document.querySelector('.next-slide');

    let currentIndex = 0;
    const visibleSlides = 4;
    const slideWidth = slides[0].clientWidth;

    function updateSliderPosition() {
        const offset = -currentIndex * slideWidth;
        sliderWrapper.style.transform = `translateX(${offset}px)`;
    }

    prevSlideButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextSlideButton.addEventListener('click', function() {
        if (currentIndex < slides.length - visibleSlides) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    updateSliderPosition();
});


document.addEventListener('DOMContentLoaded', function () {
    const popupButton = document.querySelector('.contact-sales');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-button');

    // Show popup on button click
    popupButton.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    // Hide popup on close button click
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Hide popup when clicking outside of the popup content
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Initialize phone input with intl-tel-input
    const phoneInput = document.getElementById('phone');
    const iti = window.intlTelInput(phoneInput, {
        separateDialCode: true,
        showSelectedDialCode: true,
        initialCountry: 'ua',
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    });

    // Custom placeholder for phone input
    iti.setNumber(iti.getSelectedCountryData().dialCode);
    iti.handleCountryChange();

    // Remove non-numeric characters from phone input
    phoneInput.addEventListener('input', function () {
        phoneInput.value = phoneInput.value.replace(/\D/g, '');
    });

    // Validate name input to allow only letters
    const nameInput = document.querySelector('.form__input--name');
    nameInput.addEventListener('input', function () {
        nameInput.value = nameInput.value.replace(/[^a-zA-Z]/g, '');
    });

    // Enable or disable submit button based on form validity
    const form = document.querySelector('.form');
    const submitButtons = form.querySelectorAll('.form__button');
    form.addEventListener('input', function () {
        let isValid = form.checkValidity();
        submitButtons.forEach(button => {
            if (isValid) {
                button.disabled = false;
                button.classList.remove('form__button--disabled');
            } else {
                button.disabled = true;
                button.classList.add('form__button--disabled');
            }
        });
    });
});
