// Fotos exactas: solo cuando sabemos que la imagen corresponde
// realmente a ese producto.
const fotosProductos = {};

// Fotos reales representativas para categorías.
// No necesariamente muestran el modelo exacto del producto.
const fotosCategorias = {
    "Jeans dama flare": "img/jeans_flare_azul.png",
    "Jeans pitillo dama": "img/jeans_azul_claro.png",
    "Jeans palazo dama": "img/jeans_azules_grandes.png"
};


// Busca primero una foto exacta.
// Si no existe, utiliza una foto representativa de la categoría.
function obtenerFotoProducto(producto) {

    if (!producto) return null;

    if (fotosProductos[producto.nombre]) {
        return {
            ruta: fotosProductos[producto.nombre],
            exacta: true
        };
    }

    if (fotosCategorias[producto.categoria]) {
        return {
            ruta: fotosCategorias[producto.categoria],
            exacta: false
        };
    }

    return null;
}