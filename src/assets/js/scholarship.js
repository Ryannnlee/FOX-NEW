$(function() {
    $('.qualSlick').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        asNavFor: '.qualSlickBig',
    });
    $('.qualSlickBig').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // fade: true,
        asNavFor: '.qualSlick'
    });
    $('.procSlick').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        asNavFor: '.procSlickBig',
    });
    $('.procSlickBig').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // fade: true,
        asNavFor: '.procSlick'
    });
});

$('.qualSlick .slider').on('click', function() {
    show_VD1();
})
$('.procSlick .slider').on('click', function() {
    show_VD2();
})

function show_VD1() {
    var VD = $('#lightbox1');
    VD.css({ opacity: 1 });
    VD.css({ 'z-index': 999 });
}

function show_VD2() {
    var VD = $('#lightbox2');
    VD.css({ opacity: 1 });
    VD.css({ 'z-index': 999 });
}

function closebtnVD() {
    var VD = $('.lightbox');
    VD.css({ opacity: 0 });
    VD.css({ 'z-index': -1 });
}