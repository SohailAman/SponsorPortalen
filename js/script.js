var swiperPanorama = new Swiper(".swiper-panorama", {
    loop: true,
    slidesPerView: 1.8,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    // centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2.6,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3.6,
            spaceBetween: 15,
        },
    },
});
// swiperPhase1
var swiperPhase1 = new Swiper(".swiper-phase1", {
    grabCursor: true,
    slidesPerView: 2.2,
    spaceBetween: 22,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 1.4,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 2.4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 35,
        }
    },
});

// swiperPhase2
var swiperPhase2 = new Swiper(".swiper-phase2", {
    grabCursor: true,
    slidesPerView: 2.2,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 1.4,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 2.4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 35,
        }
    },
});
// swiperHum
var swiperHum = new Swiper(".swiper-hum", {
    grabCursor: true,
    slidesPerView: 2.2,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 1.4,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 2.4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 35,
        }
    },
});

// aboutSwiper
var aboutSwiper = new Swiper(".aboutSwiper", {
    grabCursor: true,
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 30,
    navigation: {
        nextEl: ".aboutSwiper-button-next",
        prevEl: ".aboutSwiper-button-prev",
    },
    pagination: {
        el: ".aboutSwiper-pagination",
        clickable: true,
    },
});


// back-to-top

let backToTop = document.querySelector('.back-to-top');

window.onscroll = () => {
    if (window.scrollY > 350) {
        backToTop.style.visibility = "visible";
        backToTop.style.opacity = "1";
    }
    else {
        backToTop.style.visibility = "hidden";
        backToTop.style.opacity = "0";

    }
}