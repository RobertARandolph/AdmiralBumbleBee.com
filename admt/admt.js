---
# frontmatter added to parse liquid tags
---

var admt = (function () {

    var themes = [{ "name": 'yellow', "color": "#e8e3a0" },
    { "name": 'blue', "color": "#967bc1"},
    { "name": 'red', "color": "#d3a1a1"},
    { "name": 'green', "color": "#326827" },
    { "name": 'dark', "color": "#4a4a4a" },
    { "name": 'white', "color": "#c2c2c2" }];
    var default_theme = "{{ site.main_theme }}";

    // cookie functions shamelessly stolen from https://www.w3schools.com/js/js_cookies.asp
    // I have no shame.

    var get_cookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    var set_cookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    var update_nav = function (theme_name) {
        show_name = theme_name.charAt(0).toUpperCase() + theme_name.slice(1);

        var button = document.getElementById("theme_button");

        // clear current theme marker
        for (var i = 0; i < themes.length; i++) {
            document.getElementsByName("theme_" + themes[i].name)[0].classList.remove("current-theme");
        }

        document.getElementsByName("theme_" + theme_name)[0].classList.add("current-theme");

        // Change theme name...
        // if (button)
        //     button.innerHTML = show_name.toLowerCase();

        var cb = document.getElementsByName("theme_" + theme_name)[0];
        var indicator = document.getElementById("theme-indicator")

        cb.appendChild(indicator)
    }

    var change_theme = function (theme_name) {
        document.getElementById("mainstyle").href = "{{ '/css/" + theme_name + ".css' | prepend: site.baseurl }}";
        set_cookie("theme", theme_name, 1000);

        update_nav(theme_name);

        // Update the sidebar iFrame themes as well if possible. This should eventually be an array of items to update

        // This gives a 'object is null' error on page load because the stupid iframe isn't loaded. I'm not dealing with that shit. Let it error.
        // document.getElementById("sidebar1").contentWindow.document.getElementById("mainstyle").href = "{{ '/css/" + theme_name + ".css' | prepend: site.baseurl }}";
        // document.getElementById("sidebar2").contentWindow.document.getElementById("mainstyle").href = "{{ '/css/" + theme_name + ".css' | prepend: site.baseurl }}";
    }

    var fill_boxes = function () {
        var color_container = document.getElementById("theme-color-boxes");
        for (var i = 0; i < themes.length; i++) {
            var box = document.createElement("span");
            box.classList.add("theme-color-box");
            box.setAttribute("name", "theme_" + themes[i].name);
            box.style.backgroundColor = themes[i].color;
            box.style.cursor = "pointer";
            box.addEventListener("click", switch_to_theme);
            color_container.appendChild(box);
        }

        var indicator = document.createElement("span");
        indicator.id = "theme-indicator";
        indicator.innerText = "▲"

        color_container.childNodes[0].appendChild(indicator)
        
        set_main_box(themes.length, color_container);
    }

    var switch_to_theme = function (e) {
        change_theme(e.target.getAttribute("name").substr(6)); // remove "theme_" from name
    }

    var set_main_box = function (i, e) {
        e.style.width = i * 20 + "px"
    }

    return {
        write_css: function () {

            var saved_theme = get_cookie("theme");

            if (saved_theme == "main") {
                saved_theme = "yellow" // main is yellow now.
                set_cookie("theme", saved_theme, 1000)
            }

            if (!saved_theme) {
                saved_theme = default_theme;
                set_cookie("theme", default_theme, 1000)
            } else if (saved_theme != default_theme) {
                document.getElementById("mainstyle").href = "{{ '/css/" + saved_theme + ".css' | prepend: site.baseurl }}";
            }
            fill_boxes();
            update_nav(saved_theme);
        },

        switch_theme: function () {
            var main_theme = get_cookie("theme");

            if (main_theme == "main") {
                main_theme = "yellow" // main is yellow now.
                set_cookie("theme", main_theme, 1000)
            }

            var current_index = themes.findIndex((x) => x.name == main_theme);

            if (current_index == themes.length - 1) {
                change_theme(themes[0].name);
            } else {
                change_theme(themes[current_index + 1].name);
            }

            // if (main_theme === "dark") {
            //     change_theme("main");
            // } else if (main_theme === "main") {
            //     change_theme("dark");
            //}
        }
    };
})();

window.addEventListener("load", admt.write_css);
