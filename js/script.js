// Credenciales predefinidas
const validUsername = "umg";
const validPassword = "admin";

// Variables para manejar los estilos
let currentStyleLink = null;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de login
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
});

// Función para manejar el login
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === validUsername && password === validPassword) {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Ingreso exitoso',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            showHomePage();
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos',
            confirmButtonText: 'Intentar de nuevo'
        });
    }
}

// Redirigir a página de home
function showHomePage() {
    window.location.href = 'home.html';
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

// Agregar efectos adicionales para mejorar la experiencia
document.addEventListener('DOMContentLoaded', function() {
    // Agregar efecto de enfoque a los campos de entrada
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
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
});