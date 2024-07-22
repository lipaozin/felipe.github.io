document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
  });

  const navListItems = document.getElementsByClassName('nav-list-item');

  for (const item of navListItems) {
    item.addEventListener('click', () => {
      navList.classList.toggle('active');
    });    
  }
});