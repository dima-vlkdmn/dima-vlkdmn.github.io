let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {  // функція показу активного слайда, інші деактивуються
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // якщо гортаєм до останнього то наступний буде першим
  if (n < 1) {slideIndex = slides.length} // якщо гортаєм до першого то наступний буде останнім

  for (i = 0; i < slides.length; i++) {  // деактивуємо усі слайди
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // деактивуємо усі точки
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; // назначаємо активний слайд і точку
}
