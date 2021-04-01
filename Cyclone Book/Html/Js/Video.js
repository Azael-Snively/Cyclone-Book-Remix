var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var stop = document.querySelector('.stop');
var PDroite = document.querySelector('.PDroite');
var PGauche = document.querySelector('.PGauche');
var timeLabel = document.querySelector('.time');


var player = document.querySelector('video');

player.removeAttribute('controls');

playPauseBtn.onclick = function() {
  if(player.paused) {
    player.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    player.pause();
    playPauseBtn.textContent = 'Play';
  }
};

stopBtn.onclick = function() {
  player.pause();
  player.currentTime = 0;
  playPauseBtn.textContent = 'Play';
};

PDroite.onclick = function() {
  player.currentTime -= 3;
};

PGauche.onclick = function() {
  player.currentTime += 3;
  if(player.currentTime >= player.duration || player.paused) {
    player.pause();
    player.currentTime = 0;
    playPauseBtn.textContent = 'Play';
  }
};
player.ontimeupdate = function() {
  var minutes = Math.floor(player.currentTime / 60);
  var seconds = Math.floor(player.currentTime - minutes * 60);
  var minuteValue;
  var secondValue;

  if (minutes<10) {
    minuteValue = "0" + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds<10) {
    secondValue = "0" + seconds;
  } else {
    secondValue = seconds;
  }

  mediaTime = minuteValue + ":" + secondValue;
  timeLabel.textContent = mediaTime;
};
