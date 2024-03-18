document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const prevSlideButton = document.querySelector('.prev-slide');
    const nextSlideButton = document.querySelector('.next-slide');
    const slideWidth = sliderContainer.clientWidth / 3;
    let currentIndex = 0;
  
    prevSlideButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    });
  
    nextSlideButton.addEventListener('click', function() {
      if (currentIndex < Math.floor((sliderContainer.scrollWidth - sliderContainer.clientWidth) / slideWidth)) {
        currentIndex++;
        sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }
    });
  });
  