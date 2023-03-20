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
        $(this).css('opacity', '0.6');
    }

    let quarterUnhover = function() {
        $(this).css('opacity', '1');
    };

    let addEventListeners = function() {
        $(".navbar-item").hover(navItemHover, navItemUnhover);
        $(".quarter").hover(quarterHover, quarterUnhover);
    };

    addEventListeners();
});