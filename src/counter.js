export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function setupCelebration() {
  const celebrate = () => {
    document.querySelector('#celebration').classList.remove("hidden");
    document.querySelector('#question').classList.add("hidden");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  document.querySelector('#yes').addEventListener('click', () => celebrate());
  document.querySelector('#ok').addEventListener('click', () => celebrate());
}