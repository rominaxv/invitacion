// Elementos del DOM
const confirmBtn = document.getElementById('confirmBtn');
const detailsBtn = document.getElementById('detailsBtn');
const confirmationModal = document.getElementById('confirmationModal');
const detailsModal = document.getElementById('detailsModal');
const confirmationForm = document.getElementById('confirmationForm');


createConfetti();
setInterval(leafs, 1500);

// Abrir modal de confirmación
confirmBtn.addEventListener('click', () => {
    confirmationModal.style.display = 'flex';
});

// Abrir modal de detalles
detailsBtn.addEventListener('click', () => {
    detailsModal.style.display = 'flex';
});

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === confirmationModal) confirmationModal.style.display = 'none';
    if (e.target === detailsModal) detailsModal.style.display = 'none';
});

// Manejar envío del formulario
confirmationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const guests = document.getElementById('guests').value;

    // Construir enlace de WhatsApp (wa.me) con el número y el texto codificado
    const phone = '526623415601'; // número provisto
    const text = `Hola, confirmo mi asistencia. Nombre: ${name}. Número de asistentes: ${guests}.`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`; //https://wa.me/526623415601?text=Gracias%20por%20confirmar.%20Esperamos%20que%20lo%20disfrutes.%0ANombre%3A

    // Abrir WhatsApp en nueva pestaña/ventana
    window.open(waUrl, '_blank');

    // Actualizar la UI como antes
    confirmationModal.style.display = 'none';
    confirmationForm.reset();
    confirmBtn.innerHTML = '<i class="fas fa-check"></i> ¡Confirmado!';
    confirmBtn.style.background = 'linear-gradient(90deg, #4CAF50, #8BC34A)';
    confirmBtn.disabled = true;
});

// Efecto de confeti
function createConfetti() {
    const colors = ['#ff7e5f', '#feb47b', '#6a11cb', '#2575fc', '#4CAF50'];
    const container = document.querySelector('.invitation-card');
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = '1';
        container.appendChild(confetti);

        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 5000 + 2000,
            easing: 'cubic-bezier(0.2, 0.8, 0.3, 0.9)'
        });

        animation.onfinish = () => confetti.remove();
    }
}

//create leafs
function leafs() {
//    const colors = ['#fc3d3dff', '#ff5858ff', '#fd6b6bff', '#fd9a9aff', '#ffd0d0ff'];
    const container = document.querySelector('.invitation-card');
    for (i = 0; i < 6; i++) {
        const leafs = document.createElement('div');
        leafs.className = 'leafs';
        leafs.style.left = Math.random() * 100 + 'vw';
        leafs.style.top = '-50px';
        leafs.style.backgroundColor = 'transparent';
//        leafs.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        const img = document.createElement('img');
        img.src = 'leaf.png'; //https://www.flaticon.es/iconos-gratis/sakura
        img.alt = 'leaf';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.transform = `rotate(${Math.random() * 360}deg)`;
        // ajuste aleatorio de brillo entre 0.6 y 1.4
        const brightness = (Math.random() * 0.9 + 0.5).toFixed(2);
        img.style.filter = `brightness(${brightness})`;
        img.style.transition = 'filter 2s ease';
        img.style.objectFit = 'contain';
        img.style.pointerEvents = 'none';
        leafs.appendChild(img);
        leafs.style.width = Math.random() * 15 + 15 + 'px';
//        leafs.style.height = Math.random() * 10 + 10 + 'px';
        leafs.style.height = leafs.style.width;
//        leafs.style.borderRadius = Math.random() > 0.5 ? '70%' : '40%';
        leafs.style.opacity = '1';
        container.appendChild(leafs);

        const pageHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight);
        const animation = leafs.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 0.7 },
            { transform: `translateY(${pageHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 32000 + 8000,
            easing: 'cubic-bezier(0.8, 0.8, 1, 0.7)'
        });

        animation.onfinish = () => leafs.remove();
    }
}

// Cuenta regresiva mejorada
const countdown = document.getElementById("timer");
const eventDate = new Date("2025-12-06T18:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdown.innerHTML = "<span>¡El evento ha comenzado!</span>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        <span>${days}<br><small>días</small></span>
        <span>${hours}<br><small>horas</small></span>
        <span>${minutes}<br><small>minutos</small></span>
        <span>${seconds}<br><small>segundos</small></span>
    `;
};

updateCountdown();

setInterval(updateCountdown, 1000);
