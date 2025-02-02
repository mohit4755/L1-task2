// Task 1: Button & Background Color Change
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
  const buttonColors = ['#ff9aa2', '#ffb7b2', '#ffdac1', '#e2f0cb', '#c7ceea'];
  const bodyColors = ['#fdf8f8', '#fff4e6', '#f7fff7', '#eaf4ff', '#fdf2ff'];

  const randomIndex = Math.floor(Math.random() * buttonColors.length);

  // Change button color
  colorButton.style.backgroundColor = buttonColors[randomIndex];

  // Change body background color
  document.body.style.backgroundColor = bodyColors[randomIndex];
});

// Task 2: Improved Greeting Alert with Current Time
const greetingButton = document.getElementById('greetingButton');
greetingButton.addEventListener('click', () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTime = `${currentHour % 12 || 12}:${currentMinutes.toString().padStart(2, '0')} ${currentHour >= 12 ? 'PM' : 'AM'}`;
  
  let greeting;
  let backgroundColor;
  let emoji;

  if (currentHour < 12) {
    greeting = 'Good Morning! ☀️';
    backgroundColor = '#FFECB3'; // Light yellow for morning
    emoji = '🌅';
  } else if (currentHour < 18) {
    greeting = 'Good Afternoon! 🌤️';
    backgroundColor = '#FFE0B2'; // Light orange for afternoon
    emoji = '🌞';
  } else {
    greeting = 'Good Evening! 🌙';
    backgroundColor = '#D1C4E9'; // Light purple for evening
    emoji = '🌌';
  }

  // Create a custom alert box
  const alertBox = document.createElement('div');
  alertBox.style.position = 'fixed';
  alertBox.style.top = '50%';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translate(-50%, -50%)';
  alertBox.style.padding = '20px';
  alertBox.style.borderRadius = '15px';
  alertBox.style.backgroundColor = backgroundColor;
  alertBox.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
  alertBox.style.textAlign = 'center';
  alertBox.style.zIndex = '9999';
  alertBox.style.width = '320px';

  // Alert content
  alertBox.innerHTML = `
    <h2 style="margin: 0; font-size: 1.5rem; color: #333;">${greeting}</h2>
    <p style="font-size: 1.2rem; margin: 10px 0;">Current Time: <strong>${currentTime}</strong></p>
    <p style="font-size: 1.2rem; margin: 10px 0;">Have a wonderful day! ${emoji}</p>
    <button id="closeAlert" style="
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #ff5f7e;
      color: #fff;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      font-size: 1rem;
    ">Close</button>
  `;

  document.body.appendChild(alertBox);

  // Close alert functionality
  const closeAlert = document.getElementById('closeAlert');
  closeAlert.addEventListener('click', () => {
    document.body.removeChild(alertBox);
  });
});



// Task 3: Basic Calculator
const calcButton = document.getElementById('calcButton');
calcButton.addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultElement = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = 'Please enter valid numbers!';
    resultElement.style.color = 'red';
  } else {
    const sum = num1 + num2;
    resultElement.textContent = `Result: ${sum}`;
    resultElement.style.color = 'green';
  }
});
