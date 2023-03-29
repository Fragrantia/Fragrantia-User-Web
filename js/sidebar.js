const toggleFilter = document.querySelector('.toggleFilter');
const filter = document.querySelector('.filter');

toggleFilter.addEventListener('click', () => {
  $(filter).fadeToggle();
});
