$(document).ready(function () {
    var parrafo2 = $('#prueba p');
    var parrafo = $('#resultado p');
    $('.btn-outline-success').click(function () {
        parrafo.addClass('display-4');
        parrafo2.addClass('bg-dark');
    });
    $('.btn-outline-danger').click(function () {
        parrafo.removeClass('display-4');
        parrafo2.removeClass('bg-dark');
    });
    $('.btn-outline-dark').click(function () {
        parrafo.toggleClass('display-4');
        parrafo2.removeClass('bg-dark');
        parrafo2.toggleClass('display-4');
        parrafo2.toggleClass('bg-danger')
    });

});