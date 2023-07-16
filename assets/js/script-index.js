const images = document.querySelectorAll('.image img');

images.forEach(image => {
image.addEventListener('click', () => {
  const popup = document.querySelector('.popup-album');
  popup.style.display = 'flex';

  const popupImage = popup.querySelector('img');
  popupImage.src = image.src;
});
});

const closeButton = document.querySelector('.popup-album i');
closeButton.addEventListener('click', () => {
const popup = document.querySelector('.popup-album');
popup.style.display = 'none';
});