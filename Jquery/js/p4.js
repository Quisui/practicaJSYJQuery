$(document).ready(function () {
    var resultado = $('#resultado');
    $('.btn-outline-success').click(function () {
        resultado.fadeIn();
    });
    $('.btn-outline-danger').click(function () {
        resultado.show(2000);
    });
    $('.btn-outline-dark').click(function () {
        resultado.toggle(10000);
    });

});