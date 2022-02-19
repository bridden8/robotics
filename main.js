//JS FILE
const slideIndex = 1;
showDvis(slideIndex);

function plusDvis(n) {
  showDvis((slideIndex += n));
}

function showDvis(n) {
  const i;
  const x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
