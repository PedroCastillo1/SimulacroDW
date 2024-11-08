$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var producto = urlParams.get('producto');
    var precio = parseFloat(urlParams.get('precio'));

    if (producto && precio) {
        $('#producto').val(producto);
        $('#cantidad').on('input', function() {
            var cantidad = $(this).val();
            var total = cantidad * precio;
            $('#total').val(total.toFixed(2));
        });
    }
    $('#form-compra').on('submit', function(event) {
        event.preventDefault();
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var producto = $('#producto').val();
        var cantidad = $('#cantidad').val();
        var total = $('#total').val();
        var metodoPago = $('#metodo-pago').val();

        var descuentoRecargo = 0;
        if (metodoPago === 'tarjeta') {
            descuentoRecargo = total * 0.05;
        } else if (metodoPago === 'efectivo') {
            descuentoRecargo = -total * 0.10;
        }

        var totalFinal = parseFloat(total) + descuentoRecargo;

        var comprobanteUrl = '../comprobante.html?nombre=' + encodeURIComponent(nombre) +
            '&apellido=' + encodeURIComponent(apellido) +
            '&producto=' + encodeURIComponent(producto) +
            '&cantidad=' + encodeURIComponent(cantidad) +
            '&total=' + encodeURIComponent(total) +
            '&metodoPago=' + encodeURIComponent(metodoPago) +
            '&descuentoRecargo=' + encodeURIComponent(descuentoRecargo) +
            '&totalFinal=' + encodeURIComponent(totalFinal.toFixed(2));

        window.location.href = comprobanteUrl;
    });
});
