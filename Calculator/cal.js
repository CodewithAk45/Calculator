// Get the input field and buttons
const screenInput = document.getElementById('answer');
// Add event listeners to the buttons
document.querySelectorAll('.calc input[type="button"]').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    switch (value) {
      case '=':
        try {
          screenInput.value = eval(screenInput.value);
        } catch (e) {
          screenInput.value = 'Error';
        }
        break;
      case 'Ac':
        screenInput.value = '';
        break;
      default:
        screenInput.value += value;
    }
  });
});