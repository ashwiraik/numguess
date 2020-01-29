let min = 1
 let max = 10
  let correctNum = getRandomNum(min, max)
 let  gsLeft = 3
const game = document.querySelector('#game')
 const minNum = document.querySelector('.minnum')
 const maxNum = document.querySelector('.maxnum')
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload()
  }
});

const  gsInput = document.querySelector('#ginput')
const message = document.querySelector('.message')
const gsBtn = document.querySelector('#gbtn')
gsBtn.addEventListener('click', function () {
  let rannum = parseInt(gsInput.value)
 if (rannum === correctNum) {
    gsInput.style.borderColor = 'green'

    gameOver(true, `${correctNum} wrong answer,try again!`)

  } else {
    gsLeft -= 1

    if (gsLeft === 0) {

      gameOver(false, `game over,the answer is${correctNum}`)

    } else {
      gsInput.style.borderColor = 'red'
      gsInput.value = ''
      setMessage(`${rannum} is the number you have entered ,${gsLeft} attempts left`, 'red')
    }
  }
});

function gameOver(corr, msg) {
  let color;
  corr === true ? color = 'green' : color = 'red';
  gsInput.disabled = true;
  gsInput.style.borderColor = 'color';
  message.style.color = color;
  setMessage(msg);
 gsBtn.value = 'Play again';
  gsBtn.className += 'play-again';
}

function getRandomNum() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

