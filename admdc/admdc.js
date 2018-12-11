/*
 Copyright (c) 2017, Robert Randolph
 
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are not permitted unless an exception is explicitely granted otherwise.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// Don't look at me! I'm hideous!

// IMPORTANT
// all audio files names on the page MUST BE UNIQUE
// audio files must be > 250ms long
// IMPORTANT

var AdmiralChart = (function () {

	var main_sections_array = {};
	
	/*
	 * main_sections_array ("section":section_categories)
	 * 		|____ section_categories ("name":categories_daws)
	 * 					|____ categories_daws ("daw":daw_attr)
	 * 								|____ daw_attr("rating":number, "link":number")
	 */								

	get_rating = function (data) {
		if (data.hasOwnProperty("rating"))
			var attr = data["rating"];
		else
			return 0;

		var number = 0;

		if (attr === "unrated") 
			number = 0
		else
			number = parseInt(attr);

		return number;
	}

	get_link = function (data) {
		var link = data["link"];

		// return null if there's nothing.
		if (!link)
			return link;

		return "#" + link.toLowerCase().replace(/ /g, "-");
	}

	admdc_update_ratings = function () {
		var sections = document.getElementsByClassName("dc_section");

		var weighted_complete_totals = {};
		var unweighted_complete_totals = {};

		for (i = 0; i < sections.length; i++) {
			var categories = sections[i].getElementsByClassName("cat_box");
			var section_name = sections[i].getAttribute("name");
			var category = main_sections_array[section_name];
			var daw_array = sections[i].getAttribute("daws").split(",");

			section_weight_name = "section_weight" + "_" + section_name.toLowerCase().replace(/ /g, "_");

			var weight = document.getElementById(section_weight_name).value;

			for (j = 0; j < daw_array.length; j++) {
				var total_rating = 0;
				for (var cat in category) {
					rating = get_rating(category[cat][daw_array[j]]) //category[cat][daw_array[j]];
					//if (rating === "unrated")
					//	rating = 0;
					total_rating += parseInt(rating);
				}
				// weighted section totals
				var weighted_total = parseFloat((total_rating * weight / 100).toFixed(1));
				var total_name = "total_" + section_name.toLowerCase().replace(/ /g, "_") + "_" + daw_array[j].toLowerCase().replace(/ /g, "_") + "_weighted";
				var total_box = document.getElementById(total_name);
				total_box.innerHTML = weighted_total;

				// unweighted section totals
				total_name = "total_" + section_name.toLowerCase().replace(/ /g, "_") + "_" + daw_array[j].toLowerCase().replace(/ /g, "_") + "_unweighted";
				var total_box = document.getElementById(total_name);
				total_box.innerHTML = total_rating;

				// Update completed totals
				var weighted_complete_name = "total_complete_" + daw_array[j].toLowerCase().replace(/ /g, "_") + "_weighted";
				var unweighted_complete_name = "total_complete_" + daw_array[j].toLowerCase().replace(/ /g, "_") + "_unweighted";

				var weighted_complete_box = document.getElementById(weighted_complete_name);
				var unweighted_complete_box = document.getElementById(unweighted_complete_name);

				// Add up totals, || 0 treats initial NaN as 0 for the start.
				weighted_complete_totals[daw_array[j]] = (weighted_complete_totals[daw_array[j]] || 0) + weighted_total;
				unweighted_complete_totals[daw_array[j]] = (unweighted_complete_totals[daw_array[j]] || 0 ) + total_rating;

				weighted_complete_box.innerHTML = parseFloat(weighted_complete_totals[daw_array[j]].toFixed(1));
				unweighted_complete_box.innerHTML = unweighted_complete_totals[daw_array[j]];
			}
		}
		
	}

	admdc_create_total = function (e, daws) {
		var complete_totals = document.createElement("table");
		complete_totals.className = "complete_totals";
		complete_totals.setAttribute("daws", daws);

		// Defined DAWs for the section
		daw_array = daws.split(",");

		// Section and Name Row
		var tr = complete_totals.insertRow();
		td = tr.insertCell();
		td.colSpan = daw_array.length + 1;
		td.className = "complete_totals_title";
		td.innerHTML = "Combined Totals";

		var tr = complete_totals.insertRow();

		tr.insertCell();

		// Section Weighting cell
		for (j = 0; j < daw_array.length; j++) {
			var td = tr.insertCell();
			td.className = "daw_name_box";
			td.innerHTML = daw_array[j];
		}

		// Create Weighted Totals row
		var tr = complete_totals.insertRow();
		td = tr.insertCell();
		td.className = "total_name";
		td.innerHTML = "Weighted Totals";

		// Totals Cells
		for (j = 0; j < daw_array.length; j++) {
			// Weighted Total
			var td = tr.insertCell();
			td.className = "daw_total_box";
			total_box = document.createElement("div")
			total_box.id = "total_complete_" + daw_array[j].toLowerCase().replace(/ /g, "_") + "_weighted";
			total_box.innerHTML = 100;
			td.appendChild(total_box);
		}

		// Create unweighted Totals row
		var tr = complete_totals.insertRow();
		td = tr.insertCell();
		td.className = "total_name";
		td.innerHTML = "True Totals";

		for (j = 0; j < daw_array.length; j++) {
			// unweighted Total
			var td = tr.insertCell();
			td.className = "daw_total_box";
			total_box = document.createElement("div")
			total_box.id = "total_complete_" + daw_array[j].toLowerCase().replace(/ /g, "_") + "_unweighted";
			total_box.innerHTML = 100;
			td.appendChild(total_box);
		}

		return complete_totals;
	}

	admdc_new_section = function (e, category_array, daws) {

		var section_name = e.getAttribute("section");
		var section_link = e.getAttribute("link");
		var section_weight = e.getAttribute("Weight");

		// stuff to add to sections_array
		var section_categories = {};

		// Defined DAWs for the section
		daw_array = daws.split(",");

		var dc_section = document.createElement("table");
		dc_section.className = "dc_section";
		dc_section.setAttribute("name", section_name);
		dc_section.setAttribute("daws", daws);

		// Name Row
		var tr = dc_section.insertRow();
		td = tr.insertCell();
		td.colSpan = daw_array.length + 1;
		td.className = "section_title";
		td.innerHTML = section_name.link(section_link + "#" + section_name.toLowerCase().replace(/ /g,"-"));

		// Section and Name Row
		var tr = dc_section.insertRow();

		// Section Weighting cell
		var td = tr.insertCell();
		td.className = "section_weight";
		td.innerHTML = "Weight %: "
		var input = document.createElement('input'); 
		input.id = "section_weight" + "_" + section_name.toLowerCase().replace(/ /g, "_");
		input.className = "input_weight";
		input.value = parseInt(section_weight);
		input.type = "number";
		input.max = "300";
		input.addEventListener('input', this.admdc_update_ratings);
		td.appendChild(input);

		for (j = 0; j < daw_array.length; j++) {
			var td = tr.insertCell();
			td.className = "daw_name_box";
			td.innerHTML = daw_array[j];
		}

		// Create Category and rating row
		for (i = 0; i < category_array.length; i++) {
			var tr = dc_section.insertRow();
			var cat_name = category_array[i].getAttribute("name");
			section_categories[cat_name] = {};

			// Category name cell
			var td = tr.insertCell();
			td.className = "cat_box";
			td.innerHTML = cat_name.link(section_link + "#" + cat_name.toLowerCase().replace(/ /g, "-"));

			var attr_daw_array = category_array[i].getElementsByTagName("daw");

			var daw_attrs = {};

			// build an associative array of daw_name:daw_attr for the current category
			for (j = 0; j < attr_daw_array.length; j++) {
				var daw_name = attr_daw_array[j].getAttribute("name");
				var daw_attr = {"rating":0, "link":""};
				daw_attr["rating"] = attr_daw_array[j].getAttribute("rating");
				daw_attr["link"] = attr_daw_array[j].getAttribute("link");
				daw_attrs[daw_name] = daw_attr;
			}

			//Rating Cell
			for (j = 0; j < daw_array.length; j++) {
				var td = tr.insertCell();

				var daw_rat_link = {"rating":0, "link":0};

				td.className = "daw_rating_box";

				// Check to see if the DAW was given ratings, otherwise fall back on the default
				if (daw_attrs.hasOwnProperty(daw_array[j]))
					daw_rat_link = daw_attrs[daw_array[j]];
				
				// Add the link if it exists
				var dat_link = get_link(daw_rat_link);
				if (!dat_link)
					td.innerHTML = get_rating(daw_rat_link);
				else
					td.innerHTML = String(get_rating(daw_rat_link)).link(dat_link);

				var daw_name = daw_array[j];

				// add categories to this section.
				section_categories[cat_name][daw_name] = daw_rat_link;
			}
		}

		// Create Weighted Totals row
		var tr = dc_section.insertRow();
		td = tr.insertCell();
		td.className = "total_name";
		td.innerHTML = "Weighted Totals";

		// Totals Cells
		for (j = 0; j < daw_array.length; j++) {
			// Weighted Total
			var td = tr.insertCell();
			td.className = "daw_total_box";
			total_box = document.createElement("div")
			total_box.id = "total_" + section_name.toLowerCase().replace(/ /g, "_") + "_" + daw_array[j].toLowerCase().replace(/ /g, "_") + "_weighted";
			total_box.innerHTML = 100;
			td.appendChild(total_box);
		}

		// Create unweighted Totals row
		var tr = dc_section.insertRow();
		td = tr.insertCell();
		td.className = "total_name";
		td.innerHTML = "True Totals";

		for (j = 0; j < daw_array.length; j++) {
			// unweighted Total
			var td = tr.insertCell();
			td.className = "daw_total_box";
			total_box = document.createElement("div")
			total_box.id = "total_" + section_name.toLowerCase().replace(/ /g, "_") + "_" + daw_array[j].toLowerCase().replace(/ /g, "_") + "_unweighted";
			total_box.innerHTML = 100;
			td.appendChild(total_box);
		}

		// Setup main_sections_array
		main_sections_array[section_name] = section_categories;

		return dc_section;

	}

	return {

		parseADMDC: function () {
			admdcs = document.getElementsByTagName("admdc");

			category_array = [];
			category_dict = [];
			daw_array = [];
			attr_array = [];

			chart_box =	document.createElement("div");
			chart_box.className = "chart_box";

			while (admdcs.length > 0) {
				var chart = admdcs[0];

				var category_array = chart.getElementsByTagName("category");

				new_section = admdc_new_section(chart, category_array, chart.getAttribute("daws"));

				chart.parentNode.insertBefore(new_section, chart.nextSibling);

				if (admdcs.length == 1) {
					var totals = admdc_create_total(chart_box, chart.getAttribute("daws"));
					new_section.parentNode.insertBefore(totals, new_section.nextSibling);
				}

				chart.parentNode.removeChild(chart);

				admdcs = document.getElementsByTagName("admdc");
			}


			admdc_update_ratings();
		}
	};
})();

window.addEventListener("DOMContentLoaded", AdmiralChart.parseADMDC);
