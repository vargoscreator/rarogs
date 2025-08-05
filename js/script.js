document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".videoBlock__video-start");
    const video = document.querySelector(".videoBlock__video");
    button.addEventListener("click", function () {
      button.style.display = "none";
      video.setAttribute("controls", true);
      video.play();
    });

    let zonesSwiper = new Swiper(".zones__slider", {
        loop: false,
        spaceBetween: 16,
        slidesPerView: 1,
        pagination: {
            el: '.zones__slider-pagination',
            clickable: true,
        },
        breakpoints: {
            1000: {
                spaceBetween: 32,
                slidesPerView: 1.5,
            },
        },
    });

    let projectsSwiper = new Swiper(".projects__slider", {
        loop: false,
        spaceBetween: 16,
        slidesPerView: 1.2,
        pagination: {
            el: '.projects__slider-pagination',
            clickable: true,
        },
        breakpoints: {
            1000: {
                spaceBetween: 30,
                slidesPerView: 2,
            },
        },
    });
});

let bookingSwiper = null;
function initOrDestroySwiper() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
        if (!bookingSwiper) {
            bookingSwiper = new Swiper(".booking__slider", {
                loop: false,
                spaceBetween: 16,
                slidesPerView: 1,
                pagination: {
                    el: '.booking__slider-pagination',
                    clickable: true,
                },
            });
        }
    } else {
        if (bookingSwiper) {
            bookingSwiper.destroy(true, true);
            bookingSwiper = null;
        }
    }
}
window.addEventListener("load", initOrDestroySwiper);
window.addEventListener("resize", initOrDestroySwiper);
