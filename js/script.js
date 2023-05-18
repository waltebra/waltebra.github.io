$(document).ready(function() {

    let navItemHover = function() {
        $(this).addClass("accent");
        $(this).removeClass("primary");
    }

    let navItemUnhover = function() {
        $(this).addClass("primary");
        $(this).removeClass("accent");
    };

    let addEventListeners = function() {
        $(".navbar-item").hover(navItemHover, navItemUnhover);
    };

    addEventListeners();
});