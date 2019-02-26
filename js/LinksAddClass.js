$(document).ready(function(){
    $("body").on('click', ".navbar-menu-link", function(){

        $(".navbar-menu-link").removeClass("active");
        $(this).addClass("active");
        
     
});
});