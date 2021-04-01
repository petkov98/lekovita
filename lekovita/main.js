
$(document).ready(function(){
    $('.main_list').owlCarousel({
        loop:true,
        nav:true,
        navText: ["<i style=\"font-size:30px; position:absolute; top: 98%; left: 45%\" class=\"fa fa-chevron-left\"></i>",
        "<i style=\"font-size:30px; position:absolute; top: 98%; right:45%\" class=\"fa fa-chevron-right\"></i>"],
        dots: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        // singleItem:true,
        autoHeight:true,
        margin:10,  

        navigation : true, // Show next and prev buttons
        autoplay:false,
        items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{

                items:1
            }
        }
    })

    $('.services').owlCarousel({
        loop:true,
        dots: true,
        nav: true,
        // navText: ["<i style=\"font-size:30px; position:absolute; top: 98%; left: 45%\" class=\"fa fa-chevron-left\"></i>",
        // "<i style=\"font-size:30px; position:absolute; top: 98%; right:45%\" class=\"fa fa-chevron-right\"></i>"],
        autoplay: true,
        // slideSpeed : 300,
        // paginationSpeed : 400,
        // singleItem:true,
        autoHeight:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{

                items:3
            }
        }
    })




});

