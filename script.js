document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const animatedBox = document.getElementById('animatedBox');
    const animatedImage = document.getElementById('animatedImage');
  
    // Load animation states from localStorage
    const isBoxAnimationEnabled = localStorage.getItem('boxAnimationEnabled') === 'true';
    const isImageAnimationEnabled = localStorage.getItem('imageAnimationEnabled') === 'true';
  
    // Apply initial states
    if (isBoxAnimationEnabled) {
      animatedBox.classList.add('active');
    }
    if (isImageAnimationEnabled) {
      animatedImage.classList.add('active');
    }
  
    // Toggle animations on button click
    toggleBtn.addEventListener('click', () => {
      // Toggle box animation
      animatedBox.classList.toggle('active');
      const isBoxActive = animatedBox.classList.contains('active');
      localStorage.setItem('boxAnimationEnabled', isBoxActive);
  
      // Toggle image animation
      animatedImage.classList.toggle('active');
      const isImageActive = animatedImage.classList.contains('active');
      localStorage.setItem('imageAnimationEnabled', isImageActive);
    });
  });