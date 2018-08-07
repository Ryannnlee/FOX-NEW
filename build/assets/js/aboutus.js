'use strict';

$(function () {
    var h = $(window).height();
    if ($(window).scrollTop() < h / 5) {
        $('header').addClass("menuScroll");
    } else {
        $('header').removeClass("menuScroll");
    }
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > h / 5) {
            $('header').removeClass("menuScroll");
        } else {
            $('header').addClass("menuScroll");
        }
    });
});