class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('#timer');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    // this.timerElement.textContent = '00:00:00'
  }

  registerEvents() {
    document.addEventListener('keydown', (e) => {
      if (!e.repeat) {
        if (e.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
          this.success();
        } else {
          this.fail();
        }
      }
    })
  }

  gameTimer(word) {
    const timer = document.getElementById('timer')
    let [hour, minute, second] = timer.textContent.split(":");
    second = word.length;
    timer.textContent = `${hour}:${minute}:${second < 10 ? "0" + second : second}`
    this.test = setInterval(() => {
        if (+second > 0) {
          second -= 1
        } else {
          clearInterval(this.test)
          this.fail()
          second = 0;
        }
        timer.textContent = `${hour}:${minute}:${second < 10 ? "0" + second : second}`
      }, 1000)
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    clearInterval(this.test)
    this.renderWord(word);
    this.gameTimer(word)
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))
