$(document).ready(function(){
    $('.navbar-menu-link').click(function(){
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html').animate({scrollTop: destination}, 1000);
    return false;
    })
}); 