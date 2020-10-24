import p5 from "p5";
import "./main.css";

let width, heightOfLogoZone;
let snowflakes = [];
let slideIndex = 1;
showDiv(slideIndex);

const playButton = document.querySelector('.play-button');
const audio = document.querySelector('audio');
const logoZoneDom = document.getElementById('logo-zone');

function initSize() {
    width = logoZoneDom.offsetWidth;
    heightOfLogoZone = logoZoneDom.offsetHeight;
}

const sketch = (p) => {
    p.setup = function() {
        initSize();
        const canvas = p.createCanvas(width, heightOfLogoZone);
        canvas.parent('logo-zone');
        p.noStroke();
        playButton.addEventListener('click', onPressPlay);
        audio.onended = () => {
            togglePlayButton();
        }
    }

    p.windowResized = function() {
        initSize();
        p.resizeCanvas(width, heightOfLogoZone);
    }
    
    p.draw = function() {
        p.background('black');
        
        let t = p.frameCount / 300; // update time
    
        snowflakes.push(new snowflake()); // append snowflake object
    
        // loop through snowflakes with a for..of loop
        for (let flake of snowflakes) {
            flake.update(t); // update snowflake position
            flake.display(); // draw snowflake
        }
    }

    // snowflake class
    function snowflake() {
        // initialize coordinates
        this.posX = 0;
        this.posY = p.random(-50, 0);
        this.initialangle = p.random(0, 2 * p.PI);
        this.size = (window.innerWidth > 425)? p.random(2, 9): p.random(1, 3);
    
        // radius of snowflake spiral
        // chosen so the snowflakes are uniformly spread out in area
        this.radius = p.sqrt(p.random(p.pow(width / 2, 2)));
    
        this.update = function(time) {
            // x position follows a circle
            let w = 0.6; // angular speed
            let angle = w * time + this.initialangle;
            this.posX = width / 2 + this.radius * p.sin(angle);
    
            // different size snowflakes fall at slightly different y speeds
            this.posY += p.pow(this.size, 0.5);
    
            // delete snowflake if past end of screen
            if (this.posY > p.height) {
                let index = snowflakes.indexOf(this);
                snowflakes.splice(index, 1);
            }
        };
    
        this.display = function() {
            p.ellipse(this.posX, this.posY, this.size);
        };
    }
}

new p5(sketch, logoZoneDom);

function onPressPlay() {
    const atr = playButton.getAttribute('class');
    if(atr.includes('fa-play')) {
        audio.play();
    }else {
        audio.pause();
    }
    togglePlayButton();
}

function togglePlayButton() {
    playButton.classList.toggle('fa-pause-circle');
    playButton.classList.toggle('fa-play-circle');
}


//////////////////////////slide show///////////////////////
const prevButton = document.querySelector('.js-prev-button');
const nextButton = document.querySelector('.js-next-button');
prevButton.addEventListener("click", minusSlides);
nextButton.addEventListener("click", plusSlides);

function plusSlides() {
    showDiv(slideIndex += 1);
}

function minusSlides() {
    showDiv(slideIndex -= 1);
}

function showDiv(n) {
    const x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}