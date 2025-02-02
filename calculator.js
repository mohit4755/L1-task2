// Get all button elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let currentInput = '';

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      // Clear the display
      currentInput = '';
      display.value = '';
    } else if (value === '=') {
      // Evaluate the expression
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch (e) {
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      // Add value to the current input
      currentInput += value;
      display.value = currentInput;
    }
  });
});
