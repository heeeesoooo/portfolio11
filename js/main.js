$(function () {
    $('.slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 3000,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
    })

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    })
})