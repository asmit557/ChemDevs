window.onscroll = function() {stickyNavbar()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// JavaScript to scroll to Explore section
function scrollToExplore() {
  document.getElementById("explore-section").scrollIntoView({ behavior: 'smooth' });
}




// JavaScript to toggle dark mode
function toggleDarkMode() {
  var body = document.body;
  var isDarkMode = body.classList.toggle('dark-mode');

  // Save dark mode preference in Local Storage
  localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');

  // Dispatch a custom event to notify other pages about the dark mode change
  var darkModeChangeEvent = new CustomEvent('darkModeChange', { detail: isDarkMode });
  document.dispatchEvent(darkModeChangeEvent);

  // Toggle button text based on current mode
  var button = document.getElementById('dark-mode-button');
  button.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';

  // Add transition to body background-color property
  body.style.transition = 'background-color 0.3s ease'; // Adjust the duration and easing as needed
  navbar.style.transition = 'background-color 1.5s ease'; // Adjust the duration and easing as needed
  footer.style.transition = 'background-color 1.5s ease'; // Adjust the duration and easing as needed
}

// Listen for dark mode change event from other pages
document.addEventListener('darkModeChange', function(event) {
  var isDarkMode = event.detail;
  var body = document.body;

  if (isDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});
