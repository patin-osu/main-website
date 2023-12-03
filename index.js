const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

// Add a click event listener to the button
playButton.addEventListener('click', function() {
  // Check if the audio is currently paused or has ended
  if (audioPlayer.paused || audioPlayer.ended) {
    // Play the audio
    audioPlayer.play();
    playButton.textContent = 'Pause!';
  } else {
    // Pause the audio
    audioPlayer.pause();
    playButton.textContent = 'Play!';
  }
});