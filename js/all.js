$(document).ready(function () {
    $('.dropDown').on('click', function (e) {
        e.preventDefault();
        $('.mobileNav').toggleClass('active');
    });
});
