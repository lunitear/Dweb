// Variable para manejar los estilos
let currentStyleLink = null;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar efectos adicionales para mejorar la experiencia
    addHoverEffects();
});

// Cerrar sesión
function logout() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas cerrar la sesión?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Sesión cerrada',
                text: 'Has cerrado sesión exitosamente',
                showConfirmButton: false,
                timer: 1200
            }).then(() => {
                // Redirigir al login
                window.location.href = 'index.html';
            });
        }
    });
}

// Cambiar estilos
function changeStyle(style) {
    // Remover el enlace CSS actual si existe
    if (currentStyleLink) {
        currentStyleLink.remove();
        currentStyleLink = null;
    }

    // Aplicar el estilo seleccionado
    switch(style) {
        case 'party':
            loadStyleSheet('estilo1.css');
            break;
        case 'fino':
            loadStyleSheet('estilo2.css');
            break;
        case 'nadita':
            // No cargar ningún estilo adicional, solo el por defecto
            break;
    }
}

// Función para cargar una hoja de estilos
function loadStyleSheet(fileName) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = fileName;
    document.head.appendChild(link);
    currentStyleLink = link;
}

// Agregar efectos adicionales
function addHoverEffects() {
    // Agregar efecto de hover a los botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}