const playButton = document.querySelector('.js-play-button');
const audio = document.querySelector('audio');

/* eslint no-extend-native: */
if (!String.prototype.includes) {
  String.prototype.includes = (search, start) => {
    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    const num = start == null ? 0 : start;
    return this.indexOf(search, num) !== -1;
  };
}

function togglePlayButton() {
  playButton.classList.toggle('fa-pause-circle');
  playButton.classList.toggle('fa-play-circle');
}

function onPressPlay() {
  const atr = playButton.getAttribute('class');
  if (atr.includes('fa-play')) {
    audio.play();
  } else {
    audio.pause();
  }
  togglePlayButton();
}

export default function initAudioPlayer() {
  playButton.addEventListener('click', onPressPlay);
  audio.onended = () => {
    togglePlayButton();
  };
}
