// Seleccionamos el reproductor de audio genérico
const reproductor = document.getElementById('reproductorPokedex');

// Buscamos todas las secciones colapsables de la Pokedex en la página
const panelesPokemon = document.querySelectorAll('.pokedex-collapse');

// Registramos el evento de apertura para cada panel individualmente
panelesPokemon.forEach(panel => {
    panel.addEventListener('show.bs.collapse', function () {
        // Obtenemos la ruta de audio guardada en el atributo data-audio de ESTE panel
        const rutaAudio = this.getAttribute('data-audio');
        
        if (rutaAudio) {
            reproductor.src = rutaAudio;       // Asignamos el sonido correspondiente
            reproductor.currentTime = 0;       // Reseteamos el contador
            reproductor.play();                // ¡Suena el grito!
        }
    });
});