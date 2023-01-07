const messages = ["lucky0", "lucky1", "lucky2", "lucky3", "lucky4", "lucky5", "lucky6", "lucky7"];

function getEightBallMessage() {
  let messageSize = messages.length;
  randomIndex = Math.floor(Math.random() * messageSize);
  fortuneStr = messages[randomIndex]

  return fortuneStr;
}

function changeMessage() {

  const eightEl = document.getElementById('eight');
  eightEl.textContent = '';

  // We want the 8Ball to pick a random fortune for us!
  document.getElementById('answer').textContent = getEightBallMessage();
}

const buttonEl = document.getElementById('button');
buttonEl.addEventListener('click', changeMessage);