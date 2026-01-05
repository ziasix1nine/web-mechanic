const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  
  // Switch icon between Hamburger and Close 
  menuToggle.innerHTML = navMenu.classList.contains('open') ? '&times;' : '&#9776;';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.innerHTML = '&#9776;';
  });
});
