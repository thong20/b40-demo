$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // speed play
        arrows: false,
        dots: false,
            pauseOnHover: false,
            responsive: [{
            breakpoint: 768, //for screen 768px
            settings: {
                slidesToShow: 3 // column show
            }
        }, {
            breakpoint: 520, //for screen 520px
            settings: {
                slidesToShow: 2 // column show
            }
        }]
    });
});