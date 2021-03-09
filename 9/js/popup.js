const templateSuccessPopup = document.querySelector('#success').content.querySelector('.success');
const templateErrorPopup = document.querySelector('#error').content.querySelector('.error');
const page = document.querySelector('main');
const successPopup = templateSuccessPopup.cloneNode(true);
const errorPopup = templateErrorPopup.cloneNode(true);
const closePopupButton = errorPopup.querySelector('.error__button')

//Создаю попап
const showPopup = (popup) => {
  page.append(popup);
}

//Удаляю попапы
const deleteSuccessPopup = () => {
  successPopup.classList.add('hidden');
}

const onPopupClick = (popup) => {
  popup.addEventListener('click', () => {
    deleteSuccessPopup();
  });
};

onPopupClick(successPopup)

const onClosePopupButtonClick = (button, popup) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.remove();
  });
};

onClosePopupButtonClick(closePopupButton, errorPopup);

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    errorPopup.remove();
  }
});

export {
  showPopup,
  successPopup,
  errorPopup
}
