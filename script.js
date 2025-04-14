// 🧠 Constants
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdGLUAfDFaw57iNq_49QW9ACH3dAOxykucM7oCi7L8xcWAhTg/viewform?usp=sf_link";

let currentIndex = 1; // center image
const track = document.getElementById('carousel-track');
const slides = track ? track.children : [];

function updateCarousel() {
  const images = document.querySelectorAll('.carousel-image');
  images.forEach((img, index) => {
    img.classList.remove('main', 'blurred', 'left', 'right');
    if (index === currentIndex) {
      img.classList.add('main');
    } else {
      img.classList.add('blurred');
      if (index < currentIndex) img.classList.add('left');
      else img.classList.add('right');
    }
  });

  updateIndicators();
}

function updateIndicators() {
  const dots = document.querySelectorAll('.carousel-indicators .dot');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentIndex]) {
    dots[currentIndex].classList.add('active');
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 3;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateCarousel();
}

// 🔁 Auto-rotate
setInterval(nextSlide, 5000);

// ⚠️ Modal Functions
function openModal() {
  document.getElementById("googleFormModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("googleFormModal").style.display = "none";
}

function redirectToForm() {
  window.location.href = formUrl;
}




const images = [
    {
    src: "assets/aboutSection/1.png",
    quote: "“Cutest thing I’ve ordered this year! Made my fridge so happy.”",
    },
    {
    src: "assets/aboutSection/2.png",
    quote: "“Perfect gift for our anniversary. Absolutely loved it.”",
    },
    {
    src: "assets/aboutSection/3.png",
    quote: "“Looks amazing on our fridge. High quality and super cute!”",
    },
    {
    src: "assets/aboutSection/4.png",
    quote: "“The best surprise I gave my partner this year. Highly recommend!”",
    },
    {
    src: "assets/aboutSection/5.png",
    quote: "“Brightened up our home. We smile every time we see it.”",
    },
    {
    src: "assets/aboutSection/6.png",
    quote: "“Beautiful packaging and even better magnets inside.”",
    },
    {
    src: "assets/wallOfLove/1.jpg",
    quote: "“Beautiful packaging and even better magnets inside.”",
    },
];

const gallery = document.getElementById("wall-gallery");

images.forEach((item) => {
    const div = document.createElement("div");
    div.className = "wall-tile";
    div.innerHTML = `
    <img src="${item.src}" alt="Customer submission">
    <p class="quote">${item.quote}</p>
    `;
    gallery.appendChild(div);
});
