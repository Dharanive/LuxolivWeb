const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});


// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Date picker initialization
  const checkInInput = document.querySelector('input[placeholder="Check In"]');
  const checkOutInput = document.querySelector('input[placeholder="Check Out"]');

  // Placeholder function for date picker, replace with actual date picker initialization
  const initDatePicker = (input) => {
    input.addEventListener('focus', function () {
      this.type = 'date';
    });
    input.addEventListener('blur', function () {
      this.type = 'text';
    });
  };

  initDatePicker(checkInInput);
  initDatePicker(checkOutInput);

  // Form submission event
  const form = document.querySelector('.booking__form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
  });

  // Form validation
  const validateForm = () => {
    const guestInput = document.querySelector('input[placeholder="Guest"]');
    const checkInValue = checkInInput.value;
    const checkOutValue = checkOutInput.value;
    const guestValue = guestInput.value;

    let isValid = true;

    // Basic validation
    if (!checkInValue) {
      alert('Please select a check-in date.');
      isValid = false;
    }

    if (!checkOutValue) {
      alert('Please select a check-out date.');
      isValid = false;
    }

    if (!guestValue || isNaN(guestValue) || guestValue <= 0) {
      alert('Please enter a valid number of guests.');
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      // Add form submission logic here, like sending data to the server
      form.submit();
    }
  };
});


document.addEventListener('DOMContentLoaded', function () {
  // Add to Favorites functionality
  const favoriteIcons = document.querySelectorAll('.ri-heart-fill');
  favoriteIcons.forEach(icon => {
    icon.addEventListener('click', function () {
      this.classList.toggle('favorite');
      if (this.classList.contains('favorite')) {
        alert('Added to favorites!');
      } else {
        alert('Removed from favorites!');
      }
    });
  });

  // Booking Alert functionality
  const bookButtons = document.querySelectorAll('.btn');
  bookButtons.forEach(button => {
    button.addEventListener('click', function () {
      alert('Booking Available!');
    });
  });
});





function handleBookNowClick() {
  // URL of the Google Forms
  const googleFormsURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdJt1BbmB7nFhq2PK5AA-ZsL_t2UkNb3UPGXKzx4FhTncrRJg/viewform';
  
  // Redirect to Google Forms
  window.location.href = googleFormsURL;
}

// Add event listener to the button with the class 'nav__btn'
document.addEventListener('DOMContentLoaded', () => {
  const bookNowButton = document.querySelector('.nav__btn');
  
  if (bookNowButton) {
      bookNowButton.addEventListener('click', handleBookNowClick);
  }
});





