const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu) {
  burger.addEventListener('click', () => {
  burger.classList.toggle('_active');
  menu.classList.toggle('_active');
  body.classList.toggle('_lock');
})
}



const filter = document.querySelector('.filter');

if (filter) {
  filter.addEventListener('click', event => {
    console.log('Click event fired');
    const blockFilter = event.target.closest('.block-filter');
    if (!blockFilter) return;

    const dropdown = blockFilter.querySelector('.block-filter__dropdown');
    const icon = blockFilter.querySelector('.block-filter__icon');

    if (event.target.classList.contains('block-filter__item')) {
      const valueElement = blockFilter.querySelector('.block-filter__velue');
      valueElement.textContent = event.target.textContent;
    }

    dropdown.classList.toggle('_active');
    icon.classList.toggle('_active');
  });
}

