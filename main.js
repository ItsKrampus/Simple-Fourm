const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  
  function validatePassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
      confirmPasswordInput.setCustomValidity("Passwords don't match");
    } else {
      confirmPasswordInput.setCustomValidity('');
    }
  }
  
  passwordInput.addEventListener('change', validatePassword);
  confirmPasswordInput.addEventListener('keyup', validatePassword);




const slider = document.getElementById('slider');
  const sliderValue = document.getElementById('slider-value');
  
  slider.addEventListener('input', function() {
    sliderValue.textContent = ' ' + slider.value;
  });



