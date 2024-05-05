// let navbar = document.querySelector(".header .navbar");

// document.querySelector("#menu-btn").onclick = () =>{
//   navbar.classList.add('active');
// }

// document.querySelector("#nav-close").onclick = () =>{
//   navbar.classList.remove('active');
// }

// window.onscroll = () =>{
//   navbar.classList.remove('active');
// };



// ScrollReveal({

//   reset:true,
//   distance:'60px',
//   duration:2500,
//   delay:400
// });

// ScrollReveal().reveal('.category',{delay:500});
// ScrollReveal().reveal('.about',{delay:500});
// ScrollReveal().reveal('.shop',{delay:500});
// ScrollReveal().reveal('.packages',{delay:500});
// ScrollReveal().reveal('.reviews',{delay:500});
// ScrollReveal().reveal('.services',{delay:500});
// ScrollReveal().reveal('.blogs',{delay:500});


var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {

  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {

        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
  },
});


var swiper = new Swiper(".review-slider", {

  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
  },
});


var swiper = new Swiper(".blogs-slider", {

  loop:true,
  grabCursor:true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        
  },
});

var swiper = new Swiper(".clients-slider", {

  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {

        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
  },
});
