$(document).ready(function () {

    $('.slider-for').slick({
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({        
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});

$(document).ready(function(){
    $("body").on('click', ".services-navbar-menu-link", function(){
        $(".services-navbar-menu-link").removeClass("active");
        $(this).addClass("active");
        
    })
});

$(document).ready(function(){
    $("body").on('click', "modal", function(){
        
    })
});



