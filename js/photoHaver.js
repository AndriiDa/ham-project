$(".gallery-item").on("mouseenter", function () {

    $(this).append("<div class='gallery-item-active'>" +
        "<a href='' class='gallery-active-search fas fa-search white-color blue-background'></a>" +
        "<a href='' class='gallery-active-arrows fas fa-arrows-alt white-color blue-background'></a>" +
        "</div>");
    delete activeImageInfo;
});

$(".gallery-item").on("mouseleave", function () {
    $(this).find(".gallery-item-active").remove();
});
