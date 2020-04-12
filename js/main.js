/* global $, alert, console */
$(function ()
{
    'use strict';
    /* navbar scroll links */
    $('header .container .navigation ul li a').click(function (s)
    {
        s.preventDefault();
        $('html, body').animate(
        {
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
    });
    /* nice scroll plugin */
    $('body').niceScroll(
    {
        cursorcolor: "#ffc25c",
        cursorborder: "none"
    });
    /* wow plugin */
    new WOW().init();
});