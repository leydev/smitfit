$('#BtnOpenMenuMobile').click(() => {
    $('#MenuMobile').addClass('navbar-mobile-open');
    $('article').addClass('article-haze');
});
$('#BtnCloseMenuMobile').click(() => {
    $('#MenuMobile').removeClass('navbar-mobile-open');
    $('article').removeClass('article-haze');
});
$('#MenuMobile').click(function (e) {
    if (e.target.tagName == 'A') {
        $('#MenuMobile').removeClass('navbar-mobile-open');
        $('article').removeClass('article-haze');
    }
});

let lastScroll = $(window).scrollTop();
$(window).bind('scroll', function () {
    if ($(window).scrollTop() < $('header').height()) {
        $('#site-navbar').removeClass('navbar-fixed');
        document.querySelector('.mini-logo-site').style.display = '';
    } else if (lastScroll > $(window).scrollTop()) {
        $('#site-navbar').addClass('navbar-fixed');
        document.querySelector('.mini-logo-site').style.display = 'block';
    } else {
        $('#site-navbar').removeClass('navbar-fixed');
    }
    lastScroll = $(window).scrollTop();
});

$('#audioVideo').click(function () {
    if (document.querySelector('#bGVideo').muted) {
        document.querySelector('#bGVideo').muted = false;
        $('#audioVideo').find('.muted').hide('fast');
        $('#audioVideo').find('.unmuted').show('fast');
    } else {
        document.querySelector('#bGVideo').muted = true;
        $('#audioVideo').find('.muted').show('fast');
        $('#audioVideo').find('.unmuted').hide('fast');
    }
})


