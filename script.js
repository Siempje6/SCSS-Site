const photos = document.querySelectorAll('.photo-container .photo');
const leftSidebar = document.querySelector('.sidebar.left');
const rightSidebar = document.querySelector('.sidebar.right');
const overlayText = document.querySelector('.overlay-text');
const typeText = document.getElementById('type-text');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup-img');
const popupTitle = document.querySelector('.popup-title');
const popupDesc = document.querySelector('.popup-desc');
const popupBtn = document.querySelector('.popup-btn');
const closeBtn = document.querySelector('.close');

// Animatie flow: foto's verschijnen 1 voor 1
gsap.set(photos, {opacity:0});
let tl = gsap.timeline({defaults:{duration:1, ease:"power2.inOut"}});

photos.forEach((photo, i) => {
  tl.to(photo, {opacity:1, scale:1, delay:i*0.2})
    .to(photo, {
      x: i % 2 === 0 ? -window.innerWidth/2 + 100 : window.innerWidth/2 - 100,
      y: -window.innerHeight/2 + 50 + i*70,
      width: 60,
      height: 60,
      duration: 1.5,
      delay:0.3,
      onComplete: () => {
        const sidebar = i % 2 === 0 ? leftSidebar : rightSidebar;
        sidebar.appendChild(photo);
        gsap.set(photo, {x:0, y:0});
      }
    }, ">"); // ">" start direct na vorige animatie
});

// Typing effect start na foto's
tl.to(overlayText, {opacity:1, duration:0.5, onComplete: () => typeWriter(typeText)}, ">0.3");

function typeWriter(element) {
  const text = element.textContent;
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if(i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else clearInterval(interval);
  }, 50);
}

// Popup functionaliteit
photos.forEach(photo => {
  photo.addEventListener('click', () => {
    popup.style.display = 'flex';
    gsap.fromTo(popupImg, {scale:0}, {scale:1, duration:0.5});
    popupImg.src = photo.src;
    popupTitle.textContent = photo.dataset.title;
    popupDesc.textContent = photo.dataset.desc;
    popupBtn.textContent = photo.dataset.btn;
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
