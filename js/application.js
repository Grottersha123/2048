// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'C:/Users/Анастасия/Udacity/2048/audi/with.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}