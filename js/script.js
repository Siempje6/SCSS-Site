const photos = document.querySelectorAll('.photo-container .photo');
const leftSidebar = document.querySelector('.sidebar.left');
const rightSidebar = document.querySelector('.sidebar.right');
const popup = document.querySelector('.popup');
const popupImg = document.querySelector('.popup-img');
const popupTitle = document.querySelector('.popup-title');
const popupDesc = document.querySelector('.popup-desc');
const popupBtn = document.querySelector('.popup-btn');
const closeBtn = document.querySelector('.close');

// 1️⃣ Willekeurige startpositie en rotatie
photos.forEach(photo => {
  gsap.set(photo, {
    x: Math.random() * 600 - 300,
    y: Math.random() * 300 - 150,
    rotation: Math.random() * 30 - 15,
    scale: 0.8 + Math.random() * 0.4
  });
});

// 2️⃣ Typingeffect voor tekst
const typeText = document.getElementById('type-text');
const textContent = typeText.textContent;
typeText.textContent = '';
let index = 0;
function type() {
  if(index < textContent.length){
    typeText.textContent += textContent.charAt(index);
    index++;
    setTimeout(type, 50);
  } else {
    animatePhotos();
  }
}
type();

// 3️⃣ Animatie: foto's bewegen en verzamelen in balkjes
function animatePhotos(){
  photos.forEach((photo, i) => {
    const targetSidebar = i % 2 === 0 ? leftSidebar : rightSidebar;
    const yOffset = i * 70;
    gsap.to(photo, {
      x: targetSidebar.offsetLeft + targetSidebar.offsetWidth/2 - photo.offsetWidth/2,
      y: yOffset,
      rotation: 0,
      scale: 1,
      duration: 1.5,
      delay: 0.5 + i * 0.2,
      ease: "power2.inOut",
      onComplete: () => targetSidebar.appendChild(photo)
    });
  });
}

// 4️⃣ Popup functionaliteit
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

// 5️⃣ Popup sluiten
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
