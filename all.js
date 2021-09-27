document.addEventListener('keydown', function (e) {
  // console.log(e.keyCode)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
});

function playSound(e) {
  //利用自訂義屬性找出特定的audio標籤

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; //如果沒有audio存在就終止這個function(鍵盤按鈕沒有對應的audio)

  audio.currentTime = 0; //每次撥放都從最開始地方

  audio.play();
  key.classList.add('playing');
}
