window.addEventListener("DOMContentLoaded", () => {
    const row1 = document.querySelector(".row1");
    const row2 = document.querySelector(".row2");

    // Image animatie
    setTimeout(() => {
      row1.classList.add("animate");
    }, 300);

    // Tekst animatie
    setTimeout(() => {
      row2.classList.add("animate");
    }, 900);
  });