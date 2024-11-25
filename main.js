document.getElementById('flipcard').addEventListener('change', function () {
    // Crear gradientes
    const darkColor1 = getRandomDarkColor();
    const darkColor2 = getRandomDarkColor();
    const lightColor1 = getRandomLightColor();
    const lightColor2 = getRandomLightColor();

    // Determinar el gradiente basado en el estado del checkbox
    const gradient = this.checked
        ? `linear-gradient(to right, ${darkColor1}, ${darkColor2})`
        : `linear-gradient(to right, ${lightColor1}, ${lightColor2})`;

    // Verificar si ya existe el contenedor de fondo
    let bgContainer = document.getElementById('background-gradient');
    if (!bgContainer) {
        // Crear contenedor de fondo si no existe
        bgContainer = document.createElement('div');
        bgContainer.id = 'background-gradient';
        bgContainer.style.position = 'absolute';
        bgContainer.style.top = '0';
        bgContainer.style.left = '0';
        bgContainer.style.width = '100%';
        bgContainer.style.height = '100%';
        bgContainer.style.zIndex = '-1';
        bgContainer.style.transition = 'opacity 1s ease, background-image 1s ease';
        document.body.appendChild(bgContainer);
    }

    // Aplicar transición con opacidad suave
    bgContainer.style.opacity = '0'; // Desaparece el actual gradiente
    setTimeout(() => {
        // Cambiar el gradiente después de la opacidad
        bgContainer.style.backgroundImage = gradient;
        bgContainer.style.opacity = '1'; // Vuelve a aparecer con el nuevo gradiente
    }, 500);
});

// Función para obtener colores oscuros aleatorios
function getRandomDarkColor() {
    const r = Math.floor(Math.random() * 70); // 0-50
    const g = Math.floor(Math.random() * 70); // 0-50
    const b = Math.floor(Math.random() * 70); // 0-50
    return `rgb(${r}, ${g}, ${b})`;
}

// Función para obtener colores claros aleatorios
function getRandomLightColor() {
    const r = Math.floor(Math.random() * 106) + 140; // 140-255
    const g = Math.floor(Math.random() * 106) + 140; // 140-255
    const b = Math.floor(Math.random() * 106) + 140; // 140-255
    return `rgb(${r}, ${g}, ${b})`;
}

// Cambiar el estado del checkbox
const changeThemeLinks = document.querySelectorAll('.flip');
changeThemeLinks.forEach(function (flip) {
    flip.addEventListener('click', function (e) {
        e.preventDefault();
        const checkbox = document.getElementById('flipcard');
        checkbox.checked = !checkbox.checked; // Cambia el estado del checkbox
        checkbox.dispatchEvent(new Event('change')); // Dispara el evento 'change' del checkbox
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Varios degradados claros
    const dayGradients = [
        "linear-gradient(to right, rgb(180, 220, 255), rgb(250, 250, 255))",
        "linear-gradient(to right, rgb(255, 200, 150), rgb(255, 250, 220))",
        "linear-gradient(to right, rgb(180, 255, 180), rgb(220, 250, 220))",
        "linear-gradient(to right, rgb(220, 240, 255), rgb(255, 255, 255))",
        "linear-gradient(to right, rgb(135, 206, 235), rgb(255, 223, 186))", 
        "linear-gradient(to right, rgb(173, 216, 230), rgb(255, 182, 193))", 
        "linear-gradient(to right, rgb(144, 238, 144), rgb(255, 239, 213))", 
        "linear-gradient(to right, rgb(176, 224, 230), rgb(250, 250, 210))", 
        "linear-gradient(to right, rgb(240, 230, 140), rgb(255, 228, 196))" 

    ];

    // Azar de los degradados definidos
    const randomGradient = dayGradients[Math.floor(Math.random() * dayGradients.length)];

    // Degradado inicial al fondo
    let bgContainer = document.getElementById('background-gradient');
    if (!bgContainer) {
        bgContainer = document.createElement('div');
        bgContainer.id = 'background-gradient';
        bgContainer.style.position = 'absolute';
        bgContainer.style.top = '0';
        bgContainer.style.left = '0';
        bgContainer.style.width = '100%';
        bgContainer.style.height = '100%';
        bgContainer.style.zIndex = '-1';
        bgContainer.style.transition = 'opacity 1s ease, background-image 1s ease';
        document.body.appendChild(bgContainer);
    }
    bgContainer.style.backgroundImage = randomGradient;
    bgContainer.style.opacity = '1';
});

document.querySelectorAll('.flip').forEach(flip => {
  link.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
});

