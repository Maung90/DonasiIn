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

document.addEventListener('DOMContentLoaded', function() {
  const navbarLinks = document.querySelectorAll('.link-item');
  
  function setActiveLink() {
    const currentHash = window.location.hash;
    
    navbarLinks.forEach(link => {
      link.classList.remove('active');
      
      if (currentHash === '' && link.getAttribute('href') === '#') {
        link.classList.add('active');
      } else if (link.getAttribute('href') === currentHash) {
        link.classList.add('active');
      }
    });
  }
  
  setActiveLink();
  
  window.addEventListener('hashchange', setActiveLink);
});
