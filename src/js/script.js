$(document).ready(function () {
    $('.nav__bar-btn').click(function () {
        $('.nav__list').toggleClass('active');
        $('#nav__bar-btn').toggleClass('fa-times').toggleClass('fa-bars');
    });
});