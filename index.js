const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', function() {
  if (audioPlayer.paused || audioPlayer.ended) {
    audioPlayer.play();
    playButton.textContent = 'Pause!';
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play!';
  }
});