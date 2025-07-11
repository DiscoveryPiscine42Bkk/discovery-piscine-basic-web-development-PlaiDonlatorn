
// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Get the button element
const changeColorBtn = document.getElementById('changeColorBtn');

// Add event listener for the button click
changeColorBtn.addEventListener('click', () => {
  // Change the background color to a random color
  document.body.style.backgroundColor = getRandomColor();
});