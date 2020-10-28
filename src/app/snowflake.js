import p5 from 'p5';

let width; let
  heightOfLogoZone;
const snowflakes = [];

const playButton = document.querySelector('.play-button');
const audio = document.querySelector('audio');
const logoZoneDom = document.getElementById('logo-zone');

function initSize() {
  width = logoZoneDom.offsetWidth;
  heightOfLogoZone = logoZoneDom.offsetHeight;
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

const sketch = (p) => {
  // snowflake class
  function SnowFlake() {
    // initialize coordinates
    this.posX = 0;
    this.posY = p.random(-50, 0);
    this.initialangle = p.random(0, 2 * p.PI);
    this.size = (window.innerWidth > 425) ? p.random(2, 9) : p.random(1, 3);

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = p.sqrt(p.random(p.pow(width / 2, 2)));

    this.update = (time) => {
      // x position follows a circle
      const w = 0.6; // angular speed
      const angle = w * time + this.initialangle;
      this.posX = width / 2 + this.radius * p.sin(angle);

      // different size snowflakes fall at slightly different y speeds
      this.posY += p.pow(this.size, 0.5);

      // delete snowflake if past end of screen
      if (this.posY > p.height) {
        const index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);
      }
    };

    this.display = () => {
      p.ellipse(this.posX, this.posY, this.size);
    };
  }
  /* eslint no-param-reassign: ["error", { "props": false }] */
  p.setup = () => {
    initSize();
    const canvas = p.createCanvas(width, heightOfLogoZone);
    canvas.parent('logo-zone');
    p.noStroke();
    playButton.addEventListener('click', onPressPlay);
    audio.onended = () => {
      togglePlayButton();
    };
  };

  p.windowResized = () => {
    initSize();
    p.resizeCanvas(width, heightOfLogoZone);
  };

  p.draw = () => {
    p.background('black');

    const t = p.frameCount / 300; // update time

    snowflakes.push(new SnowFlake()); // append snowflake object

    // loop through snowflakes with a for..of loop
    snowflakes.forEach((flake) => {
      flake.update(t); // update snowflake position
      flake.display(); // draw snowflake
    });
  };
};

export default function initHeader() {
  /* eslint new-cap: ["error", { "newIsCap": false }] */
  /* eslint no-new: 0 */
  new p5(sketch, logoZoneDom);
}
