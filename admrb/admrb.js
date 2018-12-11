var AdmiralRatingBar = (function () {

	var id = 0;

	admrb_newbar = function (tag, rating, align) {
		main_bar = document.createElement("DIV");
		main_box = document.createElement("DIV");
		main_label = document.createElement("DIV");

		//main_box.innerHTML = rating;



		// 1-5 we go from red to yellow, 6-10 we go from yellow to green
		// I'm _sure_ this math could be simpler, but my brain no do worky
		if (rating < 51)
			color_bar = "rgb( 255, " + Math.floor((rating / 50) * 255) + ", 0)";
		else
			color_bar = "rgb( " + Math.floor(255 - ((rating - 50) / 50) * 255) + ", 255, 0 )";

		gradient = "to right, " + color_bar + ", " + color_bar + ", " + (parseInt(rating)) + "%, white " + (parseInt(rating) + 3 ) + "%";

		main_bar.classList.add("admrb_main_bar");
		main_bar.style.backgroundImage = "linear-gradient( " + gradient + ")";

		main_label.innerHTML = rating + "%";

		main_box.classList.add("admrb_main_box");
		main_label.classList.add("admrb_label");

		if (align == "right") {
			main_box.style.display = "block";
			main_box.style.float = "right";
		} else if (align == "left") {
			main_box.style.display = "inline-block";
			main_box.style.textAlign = "left";	
		}

		for (i = 0; i < 10; i++) {
			number_box = document.createElement("span");
			number_box.classList.add("admrb_number");
			number_box.innerHTML = i;
			main_bar.appendChild(number_box);
		}

		main_box.appendChild(main_bar);
		main_box.appendChild(main_label);

		tag.parentNode.replaceChild(main_box, tag);
	}

	return {
		parseADMRB: function () {
			var admrb = document.getElementsByTagName("admrb");

			while (admrb.length > 0) {

				var rating = admrb[0].getAttribute("rating");

				var align = admrb[0].getAttribute("align");

				admrb_newbar(admrb[0], rating, align);

				//admrb = document.getElementsByTagName("admrb");
			}

			for (i = 0; i < admrb.length; i++) {
				admrb[i].parentNode.removeChild(admrb[i]);
			}
		},
	};
})();

window.addEventListener("DOMContentLoaded", AdmiralRatingBar.parseADMRB);