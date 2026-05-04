
const track = document.querySelector('.carousel-track');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

next.addEventListener('click', () => {
  index++;
  if (index > track.children.length - 1) index = 0;
  track.style.transform = `translateX(-${index * 320}px)`;
});

prev.addEventListener('click', () => {
  index--;
  if (index < 0) index = track.children.length - 1;
  track.style.transform = `translateX(-${index * 320}px)`;
});

/* УВЕЛИЧЕНИЕ */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const images = document.querySelectorAll(".carousel img");
const close = document.querySelector(".close");

images.forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

close.onclick = function() {
  modal.style.display = "none";
};

modal.onclick = function(e) {
  if (e.target === modal) modal.style.display = "none";
};