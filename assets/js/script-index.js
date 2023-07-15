
	    const carousel = document.querySelector(".carousel-album");

	    let isDragStart = false, prevPageX, prevScrollLeft;

	    const dragStart = (e) => {
	        isDragStart = true;
	        prevPageX = e.pageX;
	        prevScrollLeft = carousel.scrollLeft;
	    }

	    const dragging = (e) => {
	        if (!isDragStart) return;
	        e.preventDefault();
	        let posDiff = e.pageX - prevPageX;
	        carousel.scrollLeft = prevScrollLeft - posDiff;
	    }

	    const dragStop = () => {
	        isDragStart = false;
	    }

	    carousel.addEventListener("mousedown", dragStart);
	    carousel.addEventListener("mousemove", dragging);
	    carousel.addEventListener("mouseup", dragStop);

	    // PopUP Image
		const images = document.querySelectorAll('.carousel-album img');

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