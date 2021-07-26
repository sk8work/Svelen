$(document).ready(function($) {


    $('.wrapper').addClass('loaded');

    $('.icon-menu').click(function(event) {
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $('.menu__body').toggleClass('lock');
    })


    function ibg() {
        $.each($('.ibg'), function(index, value) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        })
    }

    ibg();

});