const videos = document.querySelectorAll('video');

// Pause all <video> elements except for the one that started playing.
function pauseOtherVideos({ target }) {
  for (const video of videos) {
    if (video !== target) {
      video.pause();
    }
  }
}

// Listen for the 'play' event on all the <video> elements.
for (const video of videos) {
  video.addEventListener('play', pauseOtherVideos);
}