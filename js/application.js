// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
var AudioTrack = new Audio();
var Flag = false;

function soundClick() {
  if (Flag == true)
  {
  	AudioTrack.pause();
  	delete AudioTrack;
  	Flag = false;
  }
  else
  {
  	AudioTrack = new Audio();
  	AudioTrack.src = 'audi/with.mp3'; // Указываем путь к звуку "клика"
  	AudioTrack.autoplay = true; // Автоматически запускаем
  	Flag = true;
  }

 
}