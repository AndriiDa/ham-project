$(document).ready(function(){
    $("body").on('click', ".amazing-works-link", function(){
        $(".amazing-works-link").removeClass("active-link");
        $(this).addClass("active-link");
        
    })
})