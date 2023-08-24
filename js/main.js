/*=============== CHANGE BACKGROUND HEADER ===============*/
function changeHeader() {
  let header = document.querySelector(".header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", changeHeader);

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredslides: true,
  slidesPerview: "auto", //3
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE DROPDOWNS===============*/
let dropdownItems = document.querySelectorAll(".value__dropdowns-item");

dropdownItems.forEach(function (ele) {
  let dropdownHeader = ele.querySelector(".value__dropdowns-header");
  dropdownHeader.addEventListener("click", () => {
    let openItem = document.querySelector(".dropdown-open");
    if (openItem && openItem !== ele) toggleItem(openItem);
    toggleItem(ele);
  });
});

function toggleItem(ele) {
  let dropdownContent = ele.querySelector(".value__dropdowns-content");
  if (ele.classList.contains("dropdown-open")) {
    dropdownContent.removeAttribute("style");
    ele.classList.remove("dropdown-open");
  } else {
    dropdownContent.style.height = dropdownContent.scrollHeight + "px";
    ele.classList.add("dropdown-open");
  }
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
let up = document.querySelector(".scrollup");
window.onscroll = function () {
  if (scrollY >= 450) {
    up.classList.add("show");
  } else {
    up.classList.remove("show");
  }
};
up.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('dark-mode-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// before user selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa fa-moon': 'fa fa-sun';

//We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or de 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    console.log(selectedIcon);
    themeButton.classList[selectedIcon !== 'fa fa-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme 
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // themeButton.classList.add('fa-solid') = 'fa-solid ' + iconTheme +' dark-mode';

    // We save the theme and the current icon that the user chose 
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})
  
sr.reveal('.home_title, .popular__container, .subscribe__container')
sr.reveal('.home__description', {delay: 500})
sr.reveal('.home__search', {delay: 600})
sr.reveal('.home__value', {delay: 700})
sr.reveal ('.home__image, .footer__container', {delay: 800, origin: 'bottom'})
sr.reveal('.logos__img', {interval: 100})
sr.reveal ('.value__images, .contact__content', {delay: 800, origin: 'left'})
sr.reveal ('.value__content, .contact__images', {delay: 800, origin: 'right'})
