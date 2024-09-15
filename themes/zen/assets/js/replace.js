// Array de pares de búsqueda y reemplazo
const reemplazos = [
    { buscar: /Etiquetas/g, reemplazar: 'Programas por tema' },
    { buscar: /Publicaciones/g, reemplazar: 'Programas' },
    { buscar: /Posts/g, reemplazar: 'Programas' },
];

// Función para reemplazar texto solo en elementos h1
function reemplazarTextoEnH1() {
    const elementosH1 = document.querySelectorAll('h1');
    elementosH1.forEach(h1 => {
        let texto = h1.textContent;
        reemplazos.forEach(({ buscar, reemplazar }) => {
            texto = texto.replace(buscar, reemplazar);
        });
        h1.textContent = texto;
    });
}

// Inicia el reemplazo en los elementos h1 al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    reemplazarTextoEnH1();
});
