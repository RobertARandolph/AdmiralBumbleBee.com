---
# frontmatter added to parse liquid tags
---

var admt = (function () {

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
        // This is intentionally backwards. If we're using the 'main' theme, we want the button to say 'Dark' to switch to.
        show_name = ((theme_name === "main") ? "Dark" : "Light");

        var button = document.getElementById("theme_button");
        
        if (button)
            button.innerHTML = show_name + " theme";
    }

    var change_theme = function (theme_name) {
        document.getElementById("mainstyle").href = "{{ '/css/" + theme_name + ".css' | prepend: site.baseurl }}";
        set_cookie("theme", theme_name, 1000);

        update_nav(theme_name);

        // Update the sidebar iFrame themes as well if possible. This should eventually be an array of items to update

        // This gives a 'object is null' error on page load because the stupid iframe isn't loaded. I'm not dealing with that shit. Let it error.
        document.getElementById("sidebar1").contentWindow.document.getElementById("mainstyle").href = "{{ '/css/" + theme_name + ".css' | prepend: site.baseurl }}";
        document.getElementById("sidebar2").contentWindow.document.getElementById("mainstyle").href = "{{ '/css/" + theme_name + ".css' | prepend: site.baseurl }}";
    }

    return {
        write_css: function () {
            var saved_theme = get_cookie("theme");

            if (!saved_theme) {
                saved_theme = "main";
                set_cookie("theme", "main", 1000)
            } else if (saved_theme != "main") {
                document.getElementById("mainstyle").href = "{{ '/css/" + saved_theme + ".css' | prepend: site.baseurl }}";
            }

            update_nav(saved_theme);
        },

        switch_theme: function () {
            var main_theme = get_cookie("theme");

            if (main_theme === "dark") {
                change_theme("main");
            } else if (main_theme === "main") {
                change_theme("dark");
            }
        }
    };
})();

window.addEventListener("DOMContentLoaded", admt.write_css);
