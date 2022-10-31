console.log("welcome");
let searchBtn = document.querySelector("#search-btn")
let searchbar = document.querySelector(".search-container")
let loginBtn = document.querySelector("#login-btn")
let loginForm = document.querySelector(".login-form-container")
let loginCloseBtn = document.querySelector(".login-close")
let menuBtn = document.querySelector("#menu-bar")
let navbar = document.querySelector(".navbar")
let vidBtn = document.querySelectorAll(".vid-btn")
let section = document.querySelectorAll("section")
let navlinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
    searchBtn.classList.remove("fa-times")
    searchbar.classList.remove("active")
    loginForm.classList.remove("active")
    menuBtn.classList.remove("fa-times")
    navbar.classList.remove("active")

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    })
}
searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times")
    searchbar.classList.toggle("active")
})
loginBtn.addEventListener("click", () => {
    loginForm.classList.add("active")
})
loginCloseBtn.addEventListener("click", () => {
    loginForm.classList.remove("active")
})
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})

vidBtn.forEach(btn => {
    console.log("111");
    btn.addEventListener("click", () => {
        document.querySelector(" .controls .active").classList.remove("active");
        btn.classList.add("active")
        let src = btn.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    });
})

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },

    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    breakpoints: {
        310: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        }
    },
});
