$(document).ready(function(){
    $(".services-carousel").owlCarousel({
        loop:true,
        margin:30,
        rtl: true,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
$(document).ready(function(){
    $(".clients-carousel").owlCarousel({
        loop:true,
        margin:50,
        rtl: true,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});

new WOW().init();