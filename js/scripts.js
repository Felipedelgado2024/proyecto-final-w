// Carrusel
const carruselItems = document.querySelectorAll('.carrusel-item');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
let currentIndex = 0;

function showSlide(index) {
    carruselItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carruselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carruselItems.length) % carruselItems.length;
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Cambiar automáticamente cada 5 segundos//
setInterval(nextSlide, 5000);

// Formulario de pedido
document.getElementById("formPedido").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const producto = document.getElementById("producto").value;
    const direccion = document.getElementById("direccion").value;

    if (nombre && producto && direccion) {
        alert('¡Gracias, ${nombre}! Tu pedido de ${producto} llegara pronto a ${direccion}.');
    } 
    else {
        alert("Por favor completa todos los campos.");
    }
});

