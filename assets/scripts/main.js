var dropdown = document.getElementsByClassName('dropdown');

console.log(dropdown[0]);

dropdown[0].addEventListener('click', function(e) {
  dropdown[0].classList.toggle('is-active');
})
