window.addEventListener("DOMContentLoaded", () => {
    const row1 = document.querySelector(".row1");
    const row2 = document.querySelector(".row2");

    setTimeout(() => {
      row1.classList.add("animate");
    }, 300);

    setTimeout(() => {
      row2.classList.add("animate");
    }, 900);
  });