$(function () {
    $('.mainslide').slick({
        arrows: false,
        autoplay: 3000,
        dots: true,

    })
    $('.pz_content li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.pz_menu li').eq(idx).addClass('on').siblings().removeClass('on');
    })
});