$('#full-slider').owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 5000,
    rtl: false,
    loop: true,
    // margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items: 1
        }
    }
})

$('#owl-right-slider').owlCarousel({
    autoplay: true,
    rtl: true,
    loop: true,
    margin:20,
    nav:true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    smartSpeed:800,
    responsive:{
        0:{
            items:1
        },
        600:{
            items: 2
        },
        1000:{
            items: 2.5
        }
    }
})

   $('#owl-left-slider').owlCarousel({
    autoplay: true,
    rtl: false,
    loop: true,
    margin: 20,
    nav:true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    smartSpeed:600,
    responsive:{
        0:{
            items:1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3.5
        }
    }
})
 
