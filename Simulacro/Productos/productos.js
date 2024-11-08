// ...existing code...

function inicializarCompra() {
    // Manejar el botón "Comprar"
    $('.comprar').on('click', function() {
        var producto = $(this).data('producto');
        var precio = $(this).data('precio');
        comprarYRedirigir(producto, precio);
    });
}

function comprarYRedirigir(producto, precio) {
    window.location.href = '../Compras/compras.html?producto=' + encodeURIComponent(producto) + '&precio=' + encodeURIComponent(precio);
}

// Llamar a la función para inicializar la compra
$(document).ready(function() {
    inicializarCompra();
});
