
		/* Click Checkbox kesehatan */
		function clickKesehatan(){
			var checkbox = document.getElementById('kesehatan');
			var card = document.querySelectorAll('#card-kesehatan');
			if (checkbox.checked == true) {
				for (let i = 0; i < card.length; i++) {
					card[i].style.display="block";
				}
			}
			else{
				for (let i = 0; i < card.length; i++) {
					card[i].style.display="none";
				}
			}
		}

		/* Click Checkbox bencana */
		function clickBencana(){
			var checkbox = document.getElementById('bencana');
			var card = document.querySelectorAll('#card-bencana');

			if (checkbox.checked == true) {
				for (let i = 0; i < card.length; i++) {
					card[i].style.display="block";
				}
			}
			else{
				for (let i = 0; i < card.length; i++) {
					card[i].style.display="none";
				}
			}
		}

		/* Click Checkbox hewan */
		function clickHewan(){
			var checkbox = document.getElementById('hewan');
			var card = document.querySelectorAll('#card-hewan');

			if (checkbox.checked == true) {
				for (let i = 0; i < card.length; i++) {
					card[i].style.display="block";
				}
			}
			else{
				for (let i = 0; i < card.length; i++) {
					card[i].style.display="none";
				}
			}
		}

		/* Click Checkbox sosial */
		function clickSosial(){
			var checkbox = document.getElementById('sosial');
			var card = document.querySelectorAll('#card-sosial');

			if (checkbox.checked == true) {
				for (let i = 0; i < card.length; i++) {
					card[i].style.display="block";
				}
			}
			else{
				for (let i = 0; i < card.length; i++) {
					card[i].style.display="none";
				}
			}
		}
	