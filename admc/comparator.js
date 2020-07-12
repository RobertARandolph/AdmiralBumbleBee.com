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

/*

Loop starts a timer, start_loop() is checked every millisecond. Aborts if not at the end. If at the end, resets all playback positions.

If cycle is on, also cycles.

*/

var AdmiralComparator = (function() {
  // This is the number of sections.
  var secs = 0;

  var master_timer;

  var master_progress;

  var master_cycle;

  var master_loop;
  /*
	 * So what is this doing?
	 * We have multiple sections that contain: audio_files, audio_buttons, playing_label, etc.. plus a section identifier
	 * So section 1 has audio_files1, playing_label1 etc..
	 */

  insert_audio = function(audio_files, path) {
    var container = document.createElement("DIV");
    container.className = "comparator_button_box";

    for (i = 0; i < audio_files.length; i++) {
      x = document.createElement("AUDIO");

      name_full = audio_files[i];
      name_array = audio_files[i].split(".");
      file_name = name_array[0];
      file_extension = name_array[1];

      x.src = path + "/" + name_full;
      x.name = file_name;
      x.className = "audio_files" + secs;
      x.loop = true;
      x.preload = true;

      if (i === 0) {
        x.muted = false;
        x.addEventListener("loadeddata", update_initial_stats);
      } else x.muted = true;

      // update button names when file is loaded
      (function() {
        var af = file_name;
        x.addEventListener(
          "loadeddata",
          function(e) {
            update_button(e, af);
          },
          false
        );
      })();

      container.appendChild(x);

      // add associated buttons
      btn = document.createElement("BUTTON");
      play_label = document.createElement("SPAN");

      btn.innerHTML = "Loading...";
      btn.name = file_name;
      btn.className = "comparator_button";
      btn.className += " audio_buttons" + secs;
      btn.onclick = play_button;
      btn.enabled = false;

      play_label.innerHTML = "▶";
      play_label.className = "inanimate_comparator";

      btn.appendChild(play_label);
      container.appendChild(btn);
    }

    return container;
  };

  create_button = function(name, id, func, state, val, cls) {
    var e = document.currentScript;

    btn = document.createElement("BUTTON");
    btn.innerHTML = name;
    btn.id = id;
    btn.onclick = func;
    btn.disabled = state;
    btn.className = cls;
    btn.disabled = state;
    if (state == true) btn.style.backgroundColor = "lightgrey";
    if (val) btn.loc = val;
    return btn;
    e.parentNode.insertBefore(btn, e);
  };

  create_label = function(id, cls, txt) {
    var label = document.createElement("span");
    label.id = id;
    label.innerHTML = txt;
    label.className = cls;

    return label;
  };

  create_progress_bar = function(id, comps, path) {
    // timing label
    var playing_label = document.createElement("span");
    playing_label.id = id + "_label" + secs;
    playing_label.innerHTML = "Current: 0:00.000 (00%) - Total: 00:00.000";
    playing_label.className = "playing_label";

    // progress bar
    var border = document.createElement("span");
    var bar = document.createElement("span");
    var loop_bar = document.createElement("span");

    border.id = "progress_border" + secs;
    bar.id = "progress_bar_bar" + secs;

    border.className = "progress_border";
    bar.className = "progress_bar_bar";

    loop_bar.id = "loop_bar" + secs;
    loop_bar.className = "loop_bar";

    // what a hack. We store the path in the border so when we change images we know what the path is later.
    //border.path = path;
    //border.style.backgroundImage = "url(" + path + "/Thumbnails/" + initial.split(".")[0] + ".png)";
    border.addEventListener("click", seek);
    border.addEventListener("mousemove", seek);

    // key
    var key_label = document.createElement("span");
    key_label.innerHTML = "Black: Low Frequency - Grey: High Frequency";
    key_label.className = "key_label";

    // stop button
    var stop_button = document.createElement("DIV");
    stop_button.className = "stop_button";
    stop_button.addEventListener("click", stop_button);
    stop_button.style.visibility = "hidden";

    // Create waveform divs for fast animated switching

    for (i = 0; i < comps.length; i++) {
      var comp_name = comps[i].split(".")[0];
      var wave_bar = document.createElement("DIV");
      wave_bar.classList.add("progress_wave_bar");
      wave_bar.id = "wave_bar" + comp_name + secs;
      wave_bar.style.backgroundImage =
        "url(" + encodeURI(path + "/Thumbnails/" + comp_name + ".png") + ")";

      // default to enabled
      wave_bar.enabled = true;
      wave_bar.style.opacity = 1;

      // disable everything that's not the start
      if (i != 0) {
        wave_bar.enabled = false;
        wave_bar.style.opacity = 0;
      }

      border.appendChild(wave_bar);
    }

    border.appendChild(bar);
    border.appendChild(loop_bar);
    border.appendChild(playing_label);
    border.appendChild(key_label);
    border.appendChild(stop_button);

    return border;
  };

  create_cycle_bar = function(id, starting_value) {
    var border = document.createElement("span");
    var bar = document.createElement("span");
    var container = document.createElement("DIV");

    container.className = "cycle_box";

    border.id = "cycle_border" + secs;
    bar.id = "cycle_bar" + secs;
    border.className = "cycle_border";
    bar.className = "cycle_bar";
    border.appendChild(bar);
    bar.cur = 0;
    border.total = 0;

    btn = document.createElement("BUTTON");
    btn.innerHTML = "Auto-cycle Disabled";
    btn.id = "timer" + secs;
    btn.onclick = start_cycle;
    btn.disabled = true;
    btn.style.backgroundColor = "lightgrey";
    btn.className = "cycle_button";

    var input = document.createElement("input");
    input.type = "text";
    input.id = "cycle_input" + secs;
    input.value = starting_value + "ms";
    input.className = "input_box";
    var label = document.createElement("label");
    label.innerHTML = " s-ms-%-loop";
    label.setAttribute("for", input.id);

    container.appendChild(btn);
    container.appendChild(input);
    container.appendChild(label);

    container.appendChild(border);

    return container;
  };

  create_loop = function(length) {
    var container = document.createElement("DIV");

    container.className = "loop_box";

    container.appendChild(
      create_button(
        "Set Start",
        "set_start" + secs,
        set_loop_start,
        false,
        0,
        "loop_button"
      )
    );
    container.appendChild(
      create_button(
        "Set End",
        "set_end" + secs,
        set_loop_end,
        false,
        0,
        "loop_button"
      )
    );

    var loop_button = create_button(
      "Loop",
      "loop_toggle" + secs,
      toggle_loop,
      false,
      0,
      "loop_button"
    );

    loop_button.enabled = false;
    loop_button.className += " loop_toggle_button";
    container.appendChild(loop_button);

    var label_box = document.createElement("DIV");
    label_box.className = "loop_label_box";

    start_label = create_label(
      "loop_start_label" + secs,
      "loop_label",
      "Start: 0:00.000"
    );
    start_label.loc = 0;
    label_box.appendChild(start_label);

    end_label = create_label(
      "loop_end_label" + secs,
      "loop_label",
      "End: 0:00.000"
    );
    end_label.loc = 0;
    label_box.appendChild(end_label);

    // default to full length file
    dur_label = create_label(
      "loop_dur_label" + secs,
      "loop_label",
      "Duration: 00:00.0000"
    );
    dur_label.loc = 0;
    // used to only set inital loop once
    dur_label.initialized = false;
    label_box.appendChild(dur_label);

    container.appendChild(label_box);

    return container;
  };

  create_jump_buttons = function(jumps) {
    var jump_box = document.createElement("DIV");

    jump_box.className = "jump_box";

    //	jump_label = document.createElement("SPAN");
    //	jump_label.innerHTML = "Jump to: ";
    //	jump_label.className = "jump_label";
    //	jump_box.appendChild(jump_label);

    for (i = 0; i < jumps.length; i++) {
      var jump_button = create_button(
        jumps[i][0],
        jumps[i][0] + secs,
        jump_to,
        false,
        jumps[i][1]
      );
      jump_button.className = "jump_button";
      jump_box.appendChild(jump_button);
    }

    return jump_box;
  };

  play_button = function(x) {
    var n = x.currentTarget.name;
    var index = get_index(x.currentTarget.className); //x.currentTarget.className.slice(-1); //current section index

    // No playback if loading!
    if (x.currentTarget.innerHTML == "Loading...") return false;

    // not playing if enabled == false, so play all in the current section
    if (x.currentTarget.enabled == false) {
      // play all files and unmute current
      var a_f = document.getElementsByClassName("audio_files" + index);

      var lb = document.getElementById("loop_toggle" + index);

      if (lb.enabled == true && a_f[0].paused) {
        var loop_start = document.getElementById("loop_start_label" + index);

        // set loop starts
        for (i = 0; i < a_f.length; i++) {
          a_f[i].currentTime = loop_start.loc;
        }
        update_progress(index);
        master_loop = setInterval(start_loop, 1, index);
      }
      for (i = 0; i < a_f.length; i++) {
        a_f[i].play();

        if (a_f[i].name != n) {
          a_f[i].muted = true;
        } else {
          a_f[i].muted = false;
        }
      }

      // visually disable all buttons, then update ours.
      stop_all_others(index);
      white_out();
      set_active_button(x.currentTarget);
      show_stop_buttons(true);
      toggle_cycle_button("Start Auto-cycle", false, index);
      border = document.getElementById("progress_border" + index);
      //border.style.backgroundImage = "url(" + border.path + "/Thumbnails/" + x.currentTarget.name + ".png)";
      update_waveform(index, x.currentTarget.name);

      start_progress(index);

      // stop all if enabled
    } else if (x.currentTarget.enabled == true) {
      set_inactive_button(x.currentTarget);
      stop_all();
    }
  };

  set_active_button = function(x) {
    x.enabled = true;
    x.classList.add("comparator_button_active");
    x.childNodes[1].className = "animated_comparator";
    x.childNodes[1].innerHTML = "■";
  };

  set_inactive_button = function(x) {
    x.enabled = false;
    x.classList.remove("comparator_button_active");
    x.childNodes[1].className = "inanimate_comparator";
    x.childNodes[1].innerHTML = "▶";
  };

  // make sure all buttons are disabled looking
  white_out = function() {
    for (i = 0; i <= secs; i++) {
      // pause _all_ of the players
      a_f2 = document.getElementsByClassName("audio_buttons" + i);
      for (j = 0; j < a_f2.length; j++) {
        a_f2[j].classList.remove("comparator_button_active");
        set_inactive_button(a_f2[j]);
      }
    }
  };

  stop_all_others = function(index) {
    for (i = 1; i <= secs; i++) {
      // pause all players that aren't of index
      a_f2 = document.getElementsByClassName("audio_files" + i);
      toggle_cycle_button("Auto-cycle Disabled", true, i);
      //document.getElementById("timer" + i).disabled = true;
      //document.getElementById("timer" + i).innerHTML = "Auto-cycle Disabled";

      clearInterval(master_timer);
      master_timer = null;

      // reset cycle bar
      reset_cycle_bar(index);
      document.getElementById("cycle_bar" + i).style.width = "0px";

      if (i != parseInt(index))
        for (j = 0; j < a_f2.length; j++) a_f2[j].pause();
    }
  };

  stop_all = function() {
    for (i = 1; i <= secs; i++) {
      // pause _all_ of the players
      a_f2 = document.getElementsByClassName("audio_files" + i);
      for (j = 0; j < a_f2.length; j++) a_f2[j].pause();

      // reset all cycle bars
      reset_cycle_bar(i);

      // disable all timer buttons
      toggle_cycle_button("Auto-cycle Disabled", true, i);
      //document.getElementById("timer" + i).disabled = true;
      //document.getElementById("timer" + i).innerHTML = "Auto-cycle Disabled";

      // reset cycle bars
      document.getElementById("cycle_bar" + i).style.width = "0px";
    }

    // reset timers!
    clearInterval(master_timer);
    master_timer = null;
    clearInterval(master_progress);
    master_progress = null;
    clearInterval(master_cycle);
    master_cycle = null;
    clearInterval(master_loop);
    master_loop = null;

    // disable stop buttons.
    show_stop_buttons(false);

    // reset all buttons to default state
    white_out();
  };

  stop_button = function(x) {
    console.log("stop pressed");
    stop_all();
  };

  show_stop_buttons = function(b) {
    btns = document.getElementsByClassName("stop_button");

    var val = b ? "visible" : "hidden";

    for (i = 0; i < btns.length; i++) {
      btns[i].style.visibility = val;
    }
  };

  update_loop_bar = function(index, name) {
    var loop_bar = document.getElementById("loop_bar" + index);

    // Must make sure we're referencing the correct file sometimes
    if (name) {
      var a_f_loop = document.getElementsByClassName("audio_files" + index);
      var a_f;

      for (var i = 0; i < a_f_loop.length; i++) {
        if (a_f_loop[i].name == name) {
          a_f = a_f_loop[i];
          break;
        }
      }
    } else {
      var a_f = document.getElementsByClassName("audio_files" + index)[0];
    }

    var bar = document.getElementById("progress_border" + index);

    var loop_start = document.getElementById("loop_start_label" + index).loc;
    var loop_dur = document.getElementById("loop_dur_label" + index).loc;

    var ct = a_f.currentTime ? a_f.currentTime : 0;
    var ad = a_f.duration;

    var start_pos = (loop_start / a_f.duration) * parseInt(bar.offsetWidth);
    var dur_pos = (loop_dur / a_f.duration) * parseInt(bar.offsetWidth);

    // subtract for borders and stay above 0
    dur_pos = dur_pos - 2 > 0 ? dur_pos - 2 : 0;

    loop_bar.style.left = start_pos - 1 + "px";
    loop_bar.style.width = dur_pos + "px";
  };

  set_loop_start = function(x) {
    var index = get_index(x.currentTarget.id); // x.currentTarget.id.slice(-1);

    var a_f = document.getElementsByClassName("audio_files" + index)[0];

    var start_label = document.getElementById("loop_start_label" + index);
    var end_label = document.getElementById("loop_end_label" + index);

    start_time = a_f.currentTime;

    // error if start > end
    if (a_f.currentTime > end_label.loc) {
      var start_button = document.getElementById("set_start" + index);
      start_button.classList.remove("loop_flash");
      // trigger reflow so we can re-flash the error
      // https://css-tricks.com/restart-css-animation/
      start_button.offsetWidth;
      start_button.classList.add("loop_flash");
      set_loop_duration(index);
      update_loop_bar(index);
      return;
    }

    var pretty_time = get_pretty_time(start_time);
    start_label.innerHTML = "Start: " + pretty_time;

    start_label.loc = start_time;

    set_loop_duration(index);
    update_loop_bar(index);
  };

  set_loop_end = function(x) {
    var index = get_index(x.currentTarget.id); //x.currentTarget.id.slice(-1);

    var a_f = document.getElementsByClassName("audio_files" + index)[0];

    var start_label = document.getElementById("loop_start_label" + index);
    var end_label = document.getElementById("loop_end_label" + index);

    // error if end is < start
    if (a_f.currentTime < start_label.loc) {
      var end_button = document.getElementById("set_end" + index);
      end_button.classList.remove("loop_flash");
      // trigger reflow so we can re-flash the error
      // https://css-tricks.com/restart-css-animation/
      end_button.offsetWidth;
      end_button.classList.add("loop_flash");
      set_loop_duration(index);
      update_loop_bar(index);
      return;
    }

    end_time = a_f.currentTime;

    var pretty_time = get_pretty_time(end_time);
    end_label.innerHTML = "End: " + pretty_time;

    end_label.loc = end_time;

    set_loop_duration(index);
    update_loop_bar(index);
  };

  set_loop_duration = function(index) {
    var start = document.getElementById("loop_start_label" + index).loc;
    var end = document.getElementById("loop_end_label" + index).loc;

    var label = document.getElementById("loop_dur_label" + index);

    var duration = end > start ? end - start : 0;

    // update if we're loop cycling
    var cycle_time = document.getElementById("cycle_input" + index).value;

    if (cycle_time == "loop" && master_timer != null) {
      start_cycle_bar(index, cycle_time, 0);
      master_timer = window.setInterval(cycle_playback, duration, index);
    }

    var pretty_time = get_pretty_time(duration);
    label.innerHTML = "Duration: " + pretty_time;

    label.loc = duration;
  };

  loop_initial = function(index, name) {
    var a_f_loop = document.getElementsByClassName("audio_files" + index);
    var a_f;

    var start_label = document.getElementById("loop_start_label" + index);
    var end_label = document.getElementById("loop_end_label" + index);
    var dur_label = document.getElementById("loop_dur_label" + index);

    // It's possible for not the first item to load. So we must find the loaded file and use that for our calculations

    for (var i = 0; i < a_f_loop.length; i++) {
      if (a_f_loop[i].name == name) {
        a_f = a_f_loop[i];
        break;
      }
    }

    var start_end = a_f.duration;

    start_time = 0.15;

    var pretty_time = get_pretty_time(start_time);
    start_label.innerHTML = "Start: " + pretty_time;

    start_label.loc = start_time;

    end_time = start_end - 0.1;

    var pretty_time = get_pretty_time(end_time);
    end_label.innerHTML = "End: " + pretty_time;

    end_label.loc = end_time - 0.1;

    // we're set, so never do this again for this section!

    dur_label.initialized = true;

    set_loop_duration(index);
    update_loop_bar(index, name); // pass the name so it can work based on the, possibly only, loaded file
  };

  start_loop = function(index) {
    var a_f = document.getElementsByClassName("audio_files" + index);

    var lb = document.getElementById("loop_toggle" + index);
    var le = document.getElementById("loop_end_label" + index);
    var ld = document.getElementById("loop_dur_label" + index);

    if (document.getElementById("loop_toggle" + index).enabled == false) return;

    if (a_f[0].currentTime < le.loc) return;

    var loop_start = document.getElementById("loop_start_label" + index);
    var loop_dur = document.getElementById("loop_dur_label" + index);

    tim = document.getElementById("timer" + index).innerHTML;
    cyc = document.getElementById("cycle_input" + index).value;

    // handle auto-cycling in loop mode
    if (tim == "Stop Auto-cycle" && cyc == "loop") {
      clearTimeout(master_timer);
      master_timer = null;
      reset_cycle_bar(index);
      start_cycle_bar(index, parseInt(ld.loc * 1000), 0);
      //master_timer = window.setTimeout(cycle_playback, parseInt(ld.loc * 1000) , index);
      var a_f = document.getElementsByClassName("audio_files" + index);
      var b_f = document.getElementsByClassName("audio_buttons" + index);

      for (i = 0; i < a_f.length; i++) {
        var mut = a_f[i].muted;

        if (mut === false) {
          a_f[i].muted = true;
          set_inactive_button(b_f[i]);

          var update_to = 0;
          if (i != a_f.length - 1) update_to = i + 1;

          a_f[update_to].muted = false;
          set_active_button(b_f[update_to]);

          border = document.getElementById("progress_border" + index);
          //border.style.backgroundImage = "url(" + border.path + "/Thumbnails/" + b_f[update_to].name + ".png)";
          update_waveform(index, b_f[update_to].name);
          break;
        }
      }
    }
    // set loop starts
    for (i = 0; i < a_f.length; i++) {
      a_f[i].currentTime = loop_start.loc;
    }
    update_progress(index);
  };

  toggle_loop = function(x) {
    var index = get_index(x.currentTarget.id); // x.currentTarget.id.slice(-1);

    var start_button = document.getElementById("set_start" + index);
    var end_button = document.getElementById("set_end" + index);
    var loop_button = document.getElementById("loop_toggle" + index);
    var a_f = document.getElementsByClassName("audio_files" + index);

    var lb = document.getElementById("loop_bar" + index);

    if (loop_button.enabled == false) {
      loop_button.classList.add("loop_button_active");
      loop_button.enabled = true;
      var loop_start = document.getElementById("loop_start_label" + index);

      // active loop_bar active style
      lb.classList.add("loop_bar_active");

      if (!a_f[0].paused) {
        // set loop starts
        for (i = 0; i < a_f.length; i++) {
          a_f[i].currentTime = loop_start.loc;
        }
        // only loop-start on if we're playing back
        if (
          document.getElementsByClassName("audio_files" + index).paused != true
        ) {
          update_progress(index);
          master_loop = setInterval(start_loop, 1, index);
        }
      }
    } else {
      clearInterval(master_loop);
      master_loop = null;

      loop_button.classList.remove("loop_button_active");
      loop_button.enabled = false;

      // deactivate loop_bar active style
      lb.classList.remove("loop_bar_active");

      // clear cycle in case it's happening, be aware of current playback to set to correct label
      if (a_f[0].paused)
        toggle_cycle_button("Auto-cycle Disabled", true, index);
      else toggle_cycle_button("Start Auto-cycle", false, index);

      reset_cycle_bar(index);

      clearTimeout(master_timer);
      master_timer = null;
    }
  };

  toggle_cycle_button = function(txt, disabled, index) {
    button = document.getElementById("timer" + index);
    cyc_input = document.getElementById("cycle_input" + index);

    if (disabled == true) {
      button.disabled = true;
      cyc_input.disabled = false;
      cyc_input.style.backgroundColor = "white";
      button.classList.remove("cycle_button_active");
    } else {
      button.disabled = false;
      cyc_input.disabled = true;
      cyc_input.style.backgroundColor = "lightgrey";
      button.classList.add("cycle_button_active");
    }
    button.innerHTML = txt;
  };

  start_cycle = function(x) {
    var index = get_index(x.currentTarget.id); //x.currentTarget.id.slice(-1);

    var cycle_time = convert_cycle_bar(
      document.getElementById("cycle_input" + index).value,
      index
    );

    if (
      master_timer !== null ||
      document.getElementById("timer" + index).innerHTML == "Stop Auto-cycle"
    ) {
      clearInterval(master_timer);
      master_timer = null;

      // reset cycle bar
      clearInterval(master_cycle);
      master_cycle = null;
      document.getElementById("cycle_bar" + index).style.width = "0px";

      toggle_cycle_button("Start Auto-cycle", false, index);

      //document.getElementById("timer" + index).innerHTML = "Start Auto-cycle";
      //document.getElementById("timer" + index).disabled = false;

      // Stopping cycle stops everything
      stop_all();
    } else {
      toggle_cycle_button("Stop Auto-cycle", false, index);
      //document.getElementById("timer" + index).disabled = false;
      //document.getElementById("timer" + index).innerHTML = "Stop Auto-cycle";

      // loop + enabled == false  = we use duration for the loop
      // loop + enabled == true = looper auto-cycles
      // else... just use the value.
      if (document.getElementById("cycle_input" + index).value == "loop") {
        var loop_button = document.getElementById("loop_toggle" + index);

        // if loop active, then use loop duration, otherwise let loop handle cycling
        if (loop_button.enabled == false) {
          cycle_time = parseInt(
            document.getElementById("loop_dur_label" + index).loc * 1000
          );
          start_cycle_bar(index, cycle_time, 0);
          master_timer = window.setInterval(cycle_playback, cycle_time, index);
        } else {
          loop_start = document.getElementById("loop_start_label" + index).loc;
          loop_dur = document.getElementById("loop_dur_label" + index).loc;
          cur_time = document.getElementsByClassName("audio_files" + index)[0]
            .currentTime;

          // start first progress bar
          p = (cur_time - loop_start) / loop_dur;
          start_cycle_bar(index, cycle_time, p);
          //master_timer = window.setTimeout(cycle_playback, cycle_time * p , index);
        }
      } else {
        start_cycle_bar(index, cycle_time, 0);
        master_timer = window.setInterval(cycle_playback, cycle_time, index);
      }
    }
  };

  // Allow usage of %
  convert_cycle_bar = function(cb, index) {
    if (cb.includes("%")) {
      p = parseInt(cb.replace(/%/g, "")) / 100;
      // convert to milliseconds
      return parseInt(
        document.getElementsByClassName("audio_files" + index)[0].duration *
          p *
          1000
      );
    } else if (cb.includes("ms")) {
      return parseInt(cb.replace(/ms/g, ""));
    } else if (cb.includes("s")) {
      return parseInt(cb.replace(/s/g, "") * 1000);
    } else if (cb == "loop") {
      l = document.getElementById("loop_dur_label" + index).loc;
      return parseInt(l * 1000);
    } else {
      return cb;
    }
  };

  reset_cycle_bar = function(index) {
    // reset cycle bar
    var bar = document.getElementById("cycle_bar" + index);
    var border = document.getElementById("cycle_border" + index);

    bar.cur = 0;
    border.total = 0;

    clearInterval(master_cycle);
    master_cycle = null;
    document.getElementById("cycle_bar" + index).style.width = "0px";
  };

  cycle_playback = function(index) {
    var a_f = document.getElementsByClassName("audio_files" + index);
    var b_f = document.getElementsByClassName("audio_buttons" + index);

    for (i = 0; i < a_f.length; i++) {
      var mut = a_f[i].muted;
      if (mut === false) {
        a_f[i].muted = true;
        set_inactive_button(b_f[i]);

        var update_to = 0;
        if (i != a_f.length - 1) update_to = i + 1;

        a_f[update_to].muted = false;
        set_active_button(b_f[update_to]);

        border = document.getElementById("progress_border" + index);
        //border.style.backgroundImage = "url(" + border.path + "/Thumbnails/" + b_f[update_to].name + ".png)";
        update_waveform(index, b_f[update_to].name);

        // loop takes care of loop cycle when it's enabled
        if (document.getElementById("cycle_input" + index).value == "loop") {
          if (document.getElementById("loop_toggle" + index).enabled == false) {
            // reset cycle bar
            reset_cycle_bar(index);
            start_cycle_bar(
              index,
              parseInt(
                document.getElementById("loop_dur_label" + index).loc * 1000
              ),
              0
            );
          }
        } else {
          reset_cycle_bar(index);
          start_cycle_bar(
            index,
            parseInt(
              convert_cycle_bar(
                document.getElementById("cycle_input" + index).value,
                index
              )
            ),
            0
          );
        }
        break;
      }
    }
  };

  start_cycle_bar = function(index, length, start_percent) {
    document.getElementById("cycle_bar" + index).style.width = "0px";
    var bar = document.getElementById("cycle_bar" + index);
    var border = document.getElementById("cycle_border" + index);

    bar.cur = length * start_percent;
    border.total = length;

    master_cycle = setInterval(
      cycle_bar_update,
      50,
      index,
      Math.floor(length / 50)
    );
  };

  cycle_bar_update = function(index, updates) {
    var bar = document.getElementById("cycle_bar" + index);
    var border = document.getElementById("cycle_border" + index);

    bar.cur += border.total / updates;
    currentP = bar.cur / border.total;

    currentP = currentP > 1 ? 1 : currentP;

    bar.style.width = currentP * 100 + "%";
  };

  start_progress = function(index) {
    clearInterval(master_progress);
    master_progress = null;
    master_progress = window.setInterval(update_progress, 50, index);
  };

  seek = function(x) {
    var index = get_index(x.currentTarget.id); //x.currentTarget.id.slice(-1);

    var button_state = 0;

    if (navigator.userAgent.includes("Firefox")) button_state = x.buttons;
    else button_state = x.which;

    if (button_state == 1) {
      // first check for stop button

      var stop_btns = document.getElementsByClassName("stop_button");

      for (i = 0; i < stop_btns.length; i++) {
        rect = stop_btns[i].getBoundingClientRect();
        if (
          stop_btns[i].style.visibility === "visible" &&
          (x.clientX > rect.left && x.clientX < rect.right) &&
          (x.clientY > rect.top && x.clientY < rect.bottom)
        ) {
          stop_all();
          return;
        }
      }
      // Percentage of the box's width where the mouse clicked
      var mouseP =
        (x.pageX - x.currentTarget.offsetLeft) / x.currentTarget.offsetWidth;

      a_f = document.getElementsByClassName("audio_files" + index);

      mouseP = mouseP < 0 ? 0 : mouseP;
      mouseP = mouseP > 100 ? 100 : mouseP;

      // all files assumed to have the same duration, so we just use the first file.
      seek_to(a_f[0].duration * mouseP, index);
    }
  };

  seek_to = function(x, index) {
    a_f = document.getElementsByClassName("audio_files" + index);

    var d = x;

    if (typeof x === "string") {
      if (x.includes(".")) {
        var minsec = x.split(":");
        var min = minsec[0];
        var sec = minsec[1].split(".")[0];
        var msec = x.split(".")[1];

        d = parseInt(min) * 60 + parseInt(sec) + parseInt(msec) / 1000;
      } else if (x.includes(":")) {
        var minsec = x.split(":");
        var min = minsec[0];
        var sec = minsec[1];

        d = parseInt(min) * 60 + parseInt(sec);
      } else if (x.includes("%")) {
        var p = parseInt(x.replace(/%/g, "")) / 100;
        d = a_f[0].duration * p;
      }
    }
    d = d > a_f[0].duration ? a_f[0].duration : d;

    for (i = 0; i < a_f.length; i++) {
      a_f[i].currentTime = d;
    }

    // update the bar, duh!
    update_progress(index);
  };

  update_progress = function(index) {
    var label = document.getElementById("progresser_label" + index);
    var a_f = document.getElementsByClassName("audio_files" + index)[0];
    var bar = document.getElementById("progress_bar_bar" + index);

    var ct = a_f.currentTime ? a_f.currentTime : 0;
    var ad = a_f.duration;

    // 2/3 digit seconds hack
    var lz = "00";
    var lz2 = "000";

    var labelP = (lz + (parseInt((ct / ad) * 100) + "%")).slice(-3);

    // current time in min:sec.ms
    var labelRmin = ~~(ct / 60); // divisor
    var labelRsec = lz + parseInt(ct % 60);
    var labelRms = lz2 + parseInt((ct % 1) * 1000);

    label.innerHTML =
      "Current: " +
      labelRmin +
      ":" +
      labelRsec.slice(-2) +
      "." +
      labelRms.slice(-3) +
      " (" +
      labelP +
      ") - Total: " +
      get_pretty_time(a_f.duration);
    bar.style.width = (a_f.currentTime / a_f.duration) * 100 + "%";
  };

  update_waveform = function(index, name) {
    var a_f = document.getElementsByClassName("audio_files" + index);
    //var w_f = document.getElementsByClassName("progress_wave_bar" + index);

    for (i = 0; i < a_f.length; i++) {
      w = document.getElementById("wave_bar" + a_f[i].name + index);
      mn = "wave_bar" + name + index;

      if (w.enabled == true && w.id == mn) break;

      if (w.enabled == true) {
        w.classList.remove("wave_bar_animate_out");
        w.classList.remove("wave_bar_animate_in");
        w.offsetWidth;
        w.classList.add("wave_bar_animate_out");
        w.enabled = false;
      }

      if (w.id == mn) {
        w.classList.remove("wave_bar_animate_out");
        w.classList.remove("wave_bar_animate_in");
        w.offsetWidth;
        w.classList.add("wave_bar_animate_in");
        w.enabled = true;
      }
    }
  };

  update_initial_stats = function(x) {
    var index = get_index(x.currentTarget.className); //x.currentTarget.className.slice(-1);
    var label = document.getElementById("progresser_label" + index);
    var a_f = document.getElementsByClassName("audio_files" + index)[0];

    label.innerHTML =
      "Current: 0:00.000 (00%) - Total: " + get_pretty_time(a_f.duration);
  };

  update_button = function(x, name) {
    var index = get_index(x.currentTarget.className); //x.currentTarget.className.slice(-1);
    var a_b = document.getElementsByClassName("audio_buttons" + index);

    // Set loop end here, must be done after audio files loaded.
    var dur_label = document.getElementById("loop_dur_label" + index);
    if (dur_label.initialized == false) loop_initial(index, name);

    for (i = 0; i < a_b.length; i++) {
      if (a_b[i].name == name) {
        d = a_b[i].childNodes[0];
        d.nodeValue = a_b[i].name;
        break;
      }
    }
  };

  jump_to = function(x) {
    var index = get_index(x.currentTarget.id); //x.currentTarget.id.slice(-1);

    seek_to(x.currentTarget.loc, index);
  };

  get_pretty_time = function(time) {
    var ad = time;

    var lz = "00";
    var lz2 = "000";

    // current duration in min:sec.ms
    var labelRdmin = ~~(ad / 60); // divisor
    var labelRdsec = lz + parseInt(ad % 60);
    var labelRdms = lz2 + parseInt((ad % 1) * 1000);

    return labelRdmin + ":" + labelRdsec.slice(-2) + "." + labelRdms.slice(-3);
  };

  get_index = function(n) {
    return n.replace(/(^\D+|^\d+?%)/g, "");
  };

  admc_new_section = function(tag, comps, path, title, jumps) {
    var e = tag;

    main_box = document.createElement("DIV");
    main_box.className = "comparator_section";

    sub_box = document.createElement("DIV");
    sub_box.className = "comparator_box";

    secs++;

    title_element = document.createElement("STRONG");
    title_element.innerHTML = title;
    title_element.className = "comparator_title";

    main_box.appendChild(title_element);

    sub_box.appendChild(insert_audio(comps, path));

    //linebreak = document.createElement("br");
    //e.parentNode.insertBefore(linebreak, e);

    sub_box.appendChild(create_progress_bar("progresser", comps, path));

    sub_box.appendChild(create_cycle_bar("cycler", 1000));

    sub_box.appendChild(create_loop());

    if (jumps.length > 0) {
      var jump_box = create_jump_buttons(jumps);
      sub_box.appendChild(jump_box);
    }

    main_box.appendChild(sub_box);

    //return main_box;
    e.parentNode.replaceChild(main_box, e);
  };

  return {
    parseADMC: function() {
      admcs = document.getElementsByTagName("admc");

      var name_array = [];
      var path;
      var jump_array = [];
      var title;
      var box_array = [];

      while (admcs.length > 0) {
        name_array = [];
        path;
        jump_array = [];
        title;
        box_array = [];

        var comps = admcs[0].getElementsByTagName("file");
        var title = admcs[0].getAttribute("title");

        for (j = 0; j < comps.length; j++)
          name_array.push(comps[j].getAttribute("name"));

        path = admcs[0].getAttribute("path");

        // parse jumps
        var jumps = admcs[0].getElementsByTagName("jump");

        for (j = 0; j < jumps.length; j++) {
          var jump_tuple = [];
          jump_tuple.push(jumps[j].getAttribute("name"));
          jump_tuple.push(jumps[j].getAttribute("time"));
          jump_array.push(jump_tuple);
        }

        admc_new_section(admcs[0], name_array, path, title, jump_array);
        //admcs = document.getElementsByTagName("admc");
      }

      // remove all evidence of this atrocity!
      admcs = document.getElementsByTagName("admc");

      for (i = 0; i < admcs.length; i++) {
        admcs[i].parentNode.removeChild(admcs[i]);
      }
    }
  };
})();

window.addEventListener("DOMContentLoaded", AdmiralComparator.parseADMC);
