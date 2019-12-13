$(document).ready(function () {
    /* $('h1').html('Etiqueta h1');
    $('.display-4').html('desde clase');
    $('#idh1').html('Desde id'); */
    //$('.container h1:first').html('Seleccionando los h1 con cambio de text');
    //$('.container h1:last').html("seleccionado el ultimo hijo de h1");
    $('#idh1').addClass('text-danger');
    $('#idh1').removeClass('display-4');
    var estado = false;
    $('#contenido').append('<h1>lorem5</h1>');
    $('#contenido').prepend('<h1>lorem5</h1>');

    $('#color-azul').css('color', 'blue');
    $('#color-azul').css({
        color: 'blue',
        background: 'salmon',
        padding: '20px'
    });
    //$('#color-azul').remove();
    $('#color-azul').hide();
    $('#color-azul').show();

    $('img').attr('src', 'https://api.jquery.com/jquery-wp-content/themes/jquery/content/books/learning-jquery-4th-ed.jpg');
    $('#boton').click(function () {
        if (estado == false) {
            $('img:last').attr('width', '50px').css({
                'border-radius': '0px 25px 0px 25px'
            });

            estado = true;
        } else {
            $('img:last').attr('width', '92px').css({
                'border-radius': '25px 0px 25px 0px',
                display: 'in-line',
            });
            estado = false;
        }
    });
});