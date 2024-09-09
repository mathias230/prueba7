// Mostrar el modal de aviso al cargar la página
window.onload = function() {
    const modalAviso = document.getElementById("aviso-modal");
    const closeModalX = document.querySelector(".close-button-aviso");
    const closeModalBtn = document.getElementById("entendidoBtn");

    // Mostrar el modal al cargar la página
    modalAviso.style.display = "flex";

    // Cerrar el modal de aviso al hacer clic en el botón "Entendido"
    closeModalBtn.onclick = function() {
        modalAviso.style.display = "none";
    };

    // Cerrar el modal de aviso al hacer clic en la "X"
    closeModalX.onclick = function() {
        modalAviso.style.display = "none";
    };

    // Cerrar el modal de aviso si se hace clic fuera de su contenido
    window.addEventListener('click', function(event) {
        if (event.target === modalAviso) {
            modalAviso.style.display = "none";
        }
    });
};

// Función para abrir el modal dinámico de las imágenes de la galería
function openModal(imageElement) {
    const modal = document.getElementById('modal-imagen');
    const title = imageElement.getAttribute('data-title');
    const info = imageElement.getAttribute('data-info');
    const imgSrc = imageElement.getAttribute('data-img');
    
    // Rellenar el modal con los datos de la imagen
    modal.querySelector('.modal-info h2').innerText = title;
    modal.querySelector('.modal-info p').innerText = info;
    modal.querySelector('.modal-image img').src = imgSrc;
    modal.style.display = 'block';
}

// Cerrar el modal de imágenes cuando se hace clic en la "X"
const closeModalButtons = document.querySelectorAll('.close-button');
closeModalButtons.forEach(button => {
    button.onclick = function() {
        const modal = button.closest('.modal');
        modal.style.display = 'none'; // Ocultar el modal al hacer clic en la "X"
    };
});

// Cerrar el modal de imágenes si se hace clic fuera del contenido
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal-imagen');
    if (event.target === modal) {
        modal.style.display = 'none'; // Ocultar el modal si se hace clic fuera
    }
});

// Desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el comportamiento predeterminado
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Habilita el desplazamiento suave
        });
    });
});

// Mostrar el botón de Scroll to Top cuando se baja la página
window.onscroll = function() {
    const scrollBtn = document.getElementById('scrollBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Función para desplazarse hacia arriba
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
