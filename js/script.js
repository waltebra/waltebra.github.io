$(document).ready(function() {

    let navItemHover = function() {
        $(this).addClass("accent");
        $(this).removeClass("primary");
    }

    let navItemUnhover = function() {
        $(this).addClass("primary");
        $(this).removeClass("accent");
    };


    let quarterHover = function() {
        $(this).addClass("hovered-quarter");
    }

    let quarterUnhover = function() {
        $(this).removeClass("hovered-quarter");
    };

    let addEventListeners = function() {
        $(".navbar-item").hover(navItemHover, navItemUnhover);
        $(".quarter").hover(quarterHover, quarterUnhover);
    };

    addEventListeners();
});