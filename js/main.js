$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
    })

    $('.mainslide').slick({
        arrows: false,
        autoplay: 3000,
        dots: true,

    })
    $('.mainmenu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.mainmenu li').eq(idx).toggleClass('on').siblings().removeClass('on');
        $('.pz_menu li').eq(idx).addClass('on').siblings().removeClass('on');
    })
});