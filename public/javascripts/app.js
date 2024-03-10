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
  body.classList.toggle('dark-mode');

  // Toggle button text based on current mode
  var button = document.getElementById('dark-mode-button');
  if (body.classList.contains('dark-mode')) {
    button.innerText = 'Light Mode';
  } else {
    button.innerText = 'Dark Mode';
  }
}



