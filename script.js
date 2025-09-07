const fortunes = [
  "You will have a pleasant surprise.",
  "A thrilling time is in your immediate future.",
  "Now is the time to try something new.",
  "Your talents will be recognized and rewarded.",
  "Happiness begins with facing life with a smile.",
  "A fresh start will put you on your way.",
  "You will make a valuable discovery.",
  "Adventure can be real happiness.",
  "Your ability for accomplishment will follow with success.",
  "A lifetime friend shall soon be made."
];

const app = document.getElementById('app');
const cookieBtn = document.getElementById('cookie');

function getRandomFortune() {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}

function showCard() {
  cookieBtn.classList.add('hidden');
  let card = document.getElementById('card');
  if (!card) {
    card = document.createElement('div');
    card.id = 'card';
    card.className = "flex flex-col items-center bg-white/90 rounded-xl shadow-2xl px-8 py-6 mt-4 animate-fadein";
    card.innerHTML = `
      <div id="fortune" class="mb-4 text-lg text-yellow-900 font-semibold text-center min-h-[2.5rem]"></div>
      <button id="another" class="mt-2 px-5 py-2 bg-purple-200 text-purple-900 rounded-lg shadow hover:bg-purple-300 transition-colors duration-200 font-medium focus:outline-none">
        Open another
      </button>
    `;
    app.appendChild(card);
    // Animation keyframes via Tailwind
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadein { from { opacity: 0; transform: scale(0.95);} to { opacity: 1; transform: scale(1);} }
      .animate-fadein { animation: fadein 0.5s ease; }
    `;
    document.head.appendChild(style);
  }
  document.getElementById('fortune').textContent = getRandomFortune();
  document.getElementById('another').onclick = () => {
    document.getElementById('fortune').textContent = getRandomFortune();
  };
}

cookieBtn.onclick = showCard;