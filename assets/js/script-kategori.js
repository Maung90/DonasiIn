
// console.log(window.innerWidth)
window.addEventListener('resize',()=>{

	if (window.innerWidth > 500) {
		document.querySelector('.navbar-custom').style.display = 'flex';
		document.querySelector('.navbar-custom').style.transform = 'translateX(0)';
	}else{
		document.querySelector('.navbar-custom').style.display = 'none';
	document.querySelector('.navbar-custom').style.transform = 'translateX(100%)';
	}
});

document.getElementById('btn-open').addEventListener('click',()=>{
	document.querySelector('.navbar-custom').style.display = 'flex';
	var timeOpen = setTimeout(()=>{
		document.querySelector('.navbar-custom').style.transition = '0.5s';
		document.querySelector('.navbar-custom').style.transform = 'translateX(0)';
	},50);
	// clearTimeout(timeOpen);
});

document.getElementById('btn-close').addEventListener('click',()=>{
	document.querySelector('.navbar-custom').style.transition = '0.5s';
	document.querySelector('.navbar-custom').style.transform = 'translateX(100%)';
	var timeClose = setTimeout(()=>{
		document.querySelector('.navbar-custom').style.display = 'none';
	},450);

	clearTimeout(timeClose);
});


let details = document.getElementById('accor');

details.addEventListener('click',()=>{
	if (details.getAttribute("open") != null ) { 
		document.getElementById('arrow').classList.remove('fa-caret-up')
		document.getElementById('arrow').classList.add('fa-caret-down')
	}else{
		document.getElementById('arrow').classList.add('fa-caret-up')
		document.getElementById('arrow').classList.remove('fa-caret-down')
	}
});








		/* Click Checkbox kesehatan */
function clickKesehatan(){
	var checkbox = document.getElementById('kesehatan');
	var card = document.querySelectorAll('#card-kesehatan');
	if (checkbox.checked == true) {
		for (let i = 0; i < card.length; i++) {
			clearTimeout();
			card[i].style.display="block";
			setTimeout(()=>{
				card[i].style.transition = '0.4s';
				card[i].style.transform = 'translateY(-5vh)';
				card[i].style.opacity = '0.3';

				card[i].style.transition = '0.3s';
				card[i].style.transform = 'translateY(-3vh)';
				card[i].style.opacity = '0.6';

				card[i].style.transition = '0.2s';
				card[i].style.transform = 'translateY(0)';
				card[i].style.opacity = '1';
			},100)
		}
	}
	else{
		for (let i = 0; i < card.length; i++) {
			clearTimeout();
			card[i].style.transition = '0.4s';
			card[i].style.transform = 'translateY(-1vh)';
			card[i].style.opacity = '0.5';

			card[i].style.transition = '0.3s';
			card[i].style.transform = 'translateY(-2vh)';
			card[i].style.opacity = '0.3';

			card[i].style.transition = '0.2s';
			card[i].style.transform = 'translateY(-3vh)';
			card[i].style.opacity = '0.1';

			setTimeout(()=>{
				card[i].style.display="none";
			},100)
		}
	}
}

		/* Click Checkbox bencana */
function clickBencana(){
	var checkbox = document.getElementById('bencana');
	var card = document.querySelectorAll('#card-bencana');

	if (checkbox.checked == true) {
		for (let i = 0; i < card.length; i++) {
			clearTimeout();
			card[i].style.display="block";
			setTimeout(()=>{
				card[i].style.transition = '0.4s';
				card[i].style.transform = 'translateY(-5vh)';
				card[i].style.opacity = '0.3';

				card[i].style.transition = '0.3s';
				card[i].style.transform = 'translateY(-3vh)';
				card[i].style.opacity = '0.6';

				card[i].style.transition = '0.2s';
				card[i].style.transform = 'translateY(0)';
				card[i].style.opacity = '1';
			},100)
		}
	}
	else{
		for (let i = 0; i < card.length; i++) {
			clearTimeout();
			card[i].style.transition = '0.4s';
			card[i].style.transform = 'translateY(-1vh)';
			card[i].style.opacity = '0.5';

			card[i].style.transition = '0.3s';
			card[i].style.transform = 'translateY(-2vh)';
			card[i].style.opacity = '0.3';

			card[i].style.transition = '0.2s';
			card[i].style.transform = 'translateY(-3vh)';
			card[i].style.opacity = '0.1';

			setTimeout(()=>{
				card[i].style.display="none";
			},100)
		}
	}
}

		/* Click Checkbox hewan */
function clickHewan(){
	var checkbox = document.getElementById('hewan');
	var card = document.querySelectorAll('#card-hewan');

	if (checkbox.checked == true) {
		for (let i = 0; i < card.length; i++) {
			clearTimeout();
			card[i].style.display="block";
			setTimeout(()=>{
				card[i].style.transition = '0.4s';
				card[i].style.transform = 'translateY(-5vh)';
				card[i].style.opacity = '0.3';

				card[i].style.transition = '0.3s';
				card[i].style.transform = 'translateY(-3vh)';
				card[i].style.opacity = '0.6';

				card[i].style.transition = '0.2s';
				card[i].style.transform = 'translateY(0)';
				card[i].style.opacity = '1';
			},100)
		}
	}
	else{
		for (let i = 0; i < card.length; i++) {
			clearTimeout();
			card[i].style.transition = '0.4s';
			card[i].style.transform = 'translateY(-1vh)';
			card[i].style.opacity = '0.5';

			card[i].style.transition = '0.3s';
			card[i].style.transform = 'translateY(-2vh)';
			card[i].style.opacity = '0.3';

			card[i].style.transition = '0.2s';
			card[i].style.transform = 'translateY(-3vh)';
			card[i].style.opacity = '0.1';

			setTimeout(()=>{
				card[i].style.display="none";
			},100)
		}
	}
}

		/* Click Checkbox sosial */
function clickSosial(){
	var checkbox = document.getElementById('sosial');
	var card = document.querySelectorAll('#card-sosial');

	if (checkbox.checked == true) {
		for (let i = 0; i < card.length; i++) {
			clearTimeout();
			card[i].style.display="block";
			setTimeout(()=>{
				card[i].style.transition = '0.4s';
				card[i].style.transform = 'translateY(-5vh)';
				card[i].style.opacity = '0.3';

				card[i].style.transition = '0.3s';
				card[i].style.transform = 'translateY(-3vh)';
				card[i].style.opacity = '0.6';

				card[i].style.transition = '0.2s';
				card[i].style.transform = 'translateY(0)';
				card[i].style.opacity = '1';
			},100)
		}
	}
	else{
		for (let i = 0; i < card.length; i++) {
			clearTimeout();
			card[i].style.transition = '0.4s';
			card[i].style.transform = 'translateY(-1vh)';
			card[i].style.opacity = '0.5';

			card[i].style.transition = '0.3s';
			card[i].style.transform = 'translateY(-2vh)';
			card[i].style.opacity = '0.3';

			card[i].style.transition = '0.2s';
			card[i].style.transform = 'translateY(-3vh)';
			card[i].style.opacity = '0.1';

			setTimeout(()=>{
				card[i].style.display="none";
			},100)
		}
	}
}
