$(function () {
    $('.slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 3000,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    })


    $('#header .m_open').on('click', function () {
        $('#header').toggleClass('ck');
        $('.m_btn').toggleClass('ck');
    });
})