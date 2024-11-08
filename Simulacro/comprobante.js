$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var nombre = urlParams.get('nombre');
    var apellido = urlParams.get('apellido');
    var producto = urlParams.get('producto');
    var cantidad = urlParams.get('cantidad');
    var total = urlParams.get('total');
    var metodoPago = urlParams.get('metodoPago');
    var descuentoRecargo = urlParams.get('descuentoRecargo');
    var totalFinal = urlParams.get('totalFinal');

    var comprobanteHtml = '<p>Nombre: ' + nombre + '</p>' +
        '<p>Apellido: ' + apellido + '</p>' +
        '<p>Producto: ' + producto + '</p>' +
        '<p>Cantidad: ' + cantidad + '</p>' +
        '<p>Total: $' + total + '</p>' +
        '<p>Método de Pago: ' + metodoPago + '</p>' +
        '<p>Descuento/Recargo: $' + descuentoRecargo + '</p>' +
        '<p>Total Final: $' + totalFinal + '</p>';

    $('#comprobante').html(comprobanteHtml);
});
