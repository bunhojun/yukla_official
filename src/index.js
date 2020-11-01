import initAudioPlayer from './app/audio-player';
import initSlideShow from './app/slideshow';
import initSnowFlake from './app/snowflake';
import './main.css';

window.onload = () => {
  initSlideShow();
  initAudioPlayer();
  initSnowFlake();
};
