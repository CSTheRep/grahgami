// Get the slider container and images
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider img');

// Set the current slide index
let currentSlide = 0;

// Add event listeners to navigation buttons
document.querySelector('.prev').addEventListener('click', () => {
  currentSlide--;
  updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
  currentSlide++;
  updateSlider();
});

// Update the slider
function updateSlider() {
  // Remove active class from all images
  sliderImages.forEach((img) => img.classList.remove('active'));

  // Add active class to the current image
  sliderImages[currentSlide].classList.add('active');

  // Update the slider container width
  sliderContainer.style.width = `${sliderImages[currentSlide].width}px`;
}

// Initialize the slider
updateSlider();