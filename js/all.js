$(document).ready(function () {
    $('.main-menu').hover(function () {
        $('#header_subnav').toggle();
    });
    $('.content-section').click(function () {
        $('#header_subnav').hide('show');
    });

});