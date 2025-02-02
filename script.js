function openLetter() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');
}

function playMusic() {
    const vinyl = document.getElementById('vinyl');
    const song = document.getElementById('song');
    vinyl.classList.toggle('spinning');
    if (song.paused) {
        song.play();
    } else {
        song.pause();
    }
}
