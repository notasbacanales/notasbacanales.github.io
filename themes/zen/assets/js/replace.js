// Array de pares de búsqueda y reemplazo
const reemplazos = [
    { buscar: /Etiqueta/g, reemplazar: 'Programas por tema' },
];

// Función para reemplazar texto en un nodo
function reemplazarTexto(nodo) {
    if (nodo.nodeType === Node.TEXT_NODE) {
        let texto = nodo.textContent;
        reemplazos.forEach(({ buscar, reemplazar }) => {
            texto = texto.replace(buscar, reemplazar);
        });
        nodo.textContent = texto;
    } else if (nodo.nodeType === Node.ELEMENT_NODE) {
        for (let i = 0; i < nodo.childNodes.length; i++) {
            reemplazarTexto(nodo.childNodes[i]);
        }
    }
}

// Inicia el reemplazo en el cuerpo de la página
document.addEventListener('DOMContentLoaded', () => {
    reemplazarTexto(document.body);
});
