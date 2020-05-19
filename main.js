const btn = document.querySelector('.mode__btn');

btn.addEventListener('click', function() {
  document.querySelector('body').classList.toggle('light');
  document.querySelector('.nav').classList.toggle('nav--light');
  document.querySelector('.header__title').classList.toggle('header__title--light');
  document.querySelector('.header__text').classList.toggle('header__text--light');
  document.querySelector('.mode__btn').classList.toggle('mode__btn--light');
  document.querySelectorAll('.follower').forEach(e => e.classList.toggle('follower--light'));
  document.querySelectorAll('.card').forEach(el => el.classList.toggle('card--light'));
  document.querySelectorAll('.follower__num').forEach(el => el.classList.toggle('follower__num--light'));
  document.querySelectorAll('.follower__text').forEach(el => el.classList.toggle('.follower__text--light'));
  document.querySelectorAll('.text').forEach(el => el.classList.toggle('text--light'));
  document.querySelectorAll('.num').forEach(el => el.classList.toggle('num--light'));

  const modeName = document.querySelector('.mode__name');
  if(document.querySelector('body').classList.contains('light')) {
    modeName.textContent = "Dark Mode";
  } else {
    modeName.textContent = "Light Mode";
  }
});