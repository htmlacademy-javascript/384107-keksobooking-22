const form = document.querySelector('.ad-form');
const formFieldsets = form.querySelectorAll('fieldset');
const filter = document.querySelector('.map__filters');
const filterOptions = filter.querySelectorAll('select');
const filterfeatures = filter.querySelectorAll('input');

form.classList.add('ad-form--disabled');
filter.classList.add('ad-form--disabled');

const blockElements = (someArray) => {
  someArray.forEach((element) => {
     element.disabled = true;
  })
}
blockElements(formFieldsets);
blockElements(filterOptions);
blockElements(filterfeatures);
