$(document).ready(function () {

    $(".amazing-works-link").on('click', function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(this).parent().siblings().find("a.active").removeClass('active');
        let category = $(this).attr("data-info");
        if (category == "all") {
            $(".amazing-works-list .amazing-works-logo").addClass("hidden");
            $(".amazing-works-list .amazing-works-logo").each(function (index) {
                if (index === 12) {
                    return false;
                }
                $(this).removeClass('hidden');
            });
        } else {
            $(".amazing-works-list .amazing-works-logo:not(." + category + ")").addClass("hidden");
            $(".amazing-works-list ." + category).each(function (index) {
                if (index === 12) {
                    return false;
                }
                $(this).removeClass('hidden');
            });
        }

    });
    $(".works-button-link").on('click', function (event) {
        event.preventDefault();
        $(".amazing-works-list .amazing-works-logo.hidden").each(function (index) {
            if (index === 12) {
                return false;
            }
            $(this).removeClass('hidden');
        });
        if ($(".amazing-works-list .amazing-works-logo.hidden").length == 0) {
            $(".works-button-link").addClass('hidden');

        }
    });


});
