$(".gallery-button-link").on('click', function(index){
   event.preventDefault(index);
    $(".gallery-grid .gallery-grid-item.hidden").each(function(){
        $(this).removeClass('hidden');
    });
    if ($(".gallery-grid .gallery-grid-item.hidden").length == 0) {
            $(".gallery-button-link").addClass("hidden");

        }
    $(".gallery-grid").masonry({
        itemSelector: ".gallery-grid-item",
        columnWidth: 10,
        gutter: 11,
        fitWidth: true,

    });
     
})