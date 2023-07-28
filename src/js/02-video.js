
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onTime = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
const currentTime = Number(localStorage.getItem('videoplayer-current-time'));
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
player.on('timeupdate', throttle(onTime, 1000));