// Navbar///////////////////////////////
function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross")
}
// header-slider////////////////////////
$('.header-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 900,
  fade: true,

});
$('.review-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 500,
  fade: true,

});
$('.second-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  speed: 900,
  prevArrow: ".pre-btn",
  nextArrow: ".next-btn",

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,


      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,

      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,

      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,

      }
    }
  ]
});
// back-to-top//////////////
let my_button = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    my_button.style.display = "block";
  } else {
    my_button.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// pre-loader/////////////////////
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      let loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.style.display = "none";
      document.querySelector("body").classList.remove("overflow_hidden");
    },2000 );
  });
});
const mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };