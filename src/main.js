// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCelebration } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCelebration()

// setupCounter(document.querySelector('#counter'))

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
