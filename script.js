var navBar = document.getElementById('nav-bar');
var burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  if (navBar.style.display === 'none') {
    navBar.style.display = 'block';
  } else {
    navBar.style.display = 'none';
  }
})


