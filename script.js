// script.js
function changeText() {
  const welcomeText = document.getElementById("welcome-text");
  const button = document.getElementById("change-text-btn");
  const nameInput = document.getElementById("name-input");

  // Change text content
  const name = nameInput.ariaValueMax.trim();
  welcomeText.innerText = name ? `welcome to javascript, ${name}!` : "Welcome to javascript";
  
  // Add a pulsating animation
  welcomeText.classList.add("pulse-animation");
  
  // Change button color randomly
  button.style.backgroundColor = getRandomColor();

}

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function toggleTheme() {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
}
function createParticles() {
  const button = document.getElementById("change-text-btn");
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${button.offsetLeft + button.offsetWidth / 2}px`;
    particle.style.top = `${button.offsetTop + button.offsetHeight / 2}px`;
    particle.style.backgroundColor = getRandomColor();

    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000); // Remove after animation
  }
}

// Call `createParticles()` inside `changeText`
function changeText() {
  const welcomeText = document.getElementById("welcome-text");
  const nameInput = document.getElementById("name-input");
  const name = nameInput.value.trim();
  welcomeText.innerText = name ? `Welcome to JavaScript, ${name}!` : "Welcome to JavaScript!";
  welcomeText.classList.add("pulse-animation");

  createParticles();
}

document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("custom-cursor");
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});
