function mostrarNavarrete() {
    var container = document.getElementById('navarro');
    var navarro = document.createElement('img');
    navarro.src = 'imagen/navarro.jpg';
    navarro.width = 300;
    navarro.height = 300;
    navarro.alt = 'Navarro';
    navarro.style = 'margin-top: 20px;';
    container.appendChild(navarro);
    var audio = new Audio('audio/narizon.mp3');
    audio.play();
}
