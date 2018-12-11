---
layout: post
title: The Great DAW Neurosis
comments: true
date:   2016-08-04_11:00:37 
categories: music
tags: ['DAW', 'DAW Chart']
---

![Brain melting breakdown over tools](/assets/Neurosis/neurosis.jpg)

**UPDATE**: Please see the new [**DAW Feature Chart**](/DAW-Chart.html) for more up-to-date information and a way cooler chart.

If you've been following this blog then you'd know that I recently tried 2 DAWS as my 1-month thing. Trying [Cubase](http://www.steinberg.net/en/products/cubase/start.html) has been a harrowing experience that has made me rethink using [Digital Performer](http://www.motu.com/products/software/dp).

Since it was very difficult for me to decide, given how great of a product Cubase is, I went ahead and did a methodical test and rating of both DAWs. I analyzed my projects to figure out what features I used most frequently, mildly and rarely. I looked at features of various DAWs that I thought were nice and considered those as well.

I then created a number of tests and attempted them multiple times with varying circumstances in each DAW. I wrote down a rating, relative to each DAW's capability. Results were weighted and tallied.

Click through to read more about the tests, ratings and other commentary.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# What are you looking at?

<iframe src="https://docs.google.com/spreadsheets/d/1BVOmSHyQIJkIifYEC092mrdelToEJ_gs8p1BQnSM9NE/pubhtml?widget=true&amp;headers=false" height="1020" width="670"></iframe>

Please check the [actual sheet](https://docs.google.com/spreadsheets/d/1BVOmSHyQIJkIifYEC092mrdelToEJ_gs8p1BQnSM9NE/edit?usp=sharing) so you can see the notes for some cells!

I gathered a list of features that I found important, less important and 'just nice'. Then I spent a lot of time going through past projects and reasoned about how I used these features frequently. Tests were created, repeated, modified, repeated etc... I spent in total around *80 hours* doing this.

As I did the tests, I wrote down ratings. The ratings are all relative to each other. For instance, I originally rated Cubases group/buss creation a 10. After using Reaper and Logic's folders/stacks I realized they were superior and I knocked Cubase back to a 9.

Originally I was only comparing S1, Cubase and DP. While I was researching features and workflows I ended up coming across information about Logic. Eventually I started to run tests in Logic. Then Reaper. Then I decided to include my favorite DAW ever, [SAWStudio](http://sawstudio.com/products_sawstudio.htm). Live included just because I have it.

The ratings were done without summing and on independent pages. I had no clue what was 'winning' until the very end. In fact I was quite certain that Logic was going to be the _overwhelming_ winner based on ratings alone, with Cubase in second place. Turns out... no.

__*It is very important to know that these are my impressions*__. You may notice that there's basically no midi or virtual instrument considerations. If I did consider that, it'd be about 5% weighted and change nothing. If you feel that 'your DAW' was unfairly rated then please post a comment. I'm more than willing to re-asses something or discuss it with you.

# The categories and tests

The following categories are listed with how I tested them. I also may note specifically what I was looking for, or what would cause a low rating.

### Major

* Stability

    Quite simply, how often did the program crash.

* Manual

    How quickly and easily could I find things in the manual. This is affected by how organized the manual is, if it uses clear and repeated terminology and the formatting.

    I deducted points if the software requires any considerable amount of user configuration. The manual quickly becomes useless when the software that it refers to bears little resemblance to what it described therein.

* Editing Tools

    This is a tricky one. Every DAW has basic editing functionality covered. I was influenced heavily by zoom functionality while doing this, as that's tied to editing quite strongly. I rated this category based on how fast and how few contextual switches were necessary to complete the following tests.

    * Zoom in, split and micro-adjust the timing of a number of notes in a bass guitar track.
    * Create a selection between transients and apply a plugin.
    * Zoom in and phase align overheads and kick drum on a multitrack drum recording.
    * Trim the start/end of a region while zoomed in past the boundaries
    * Create the following selections on all tracks or a single track: between markers, between transients, between region boundaries, between precise time boundaries.
    * Shift a selection by hand, key command and by entering a value.
    * Moving a region to: the boundary of another region (shuffle editing), to the end, beginning, to transient of another track, to a specific time.
^

* Zoom Functionality

    Zooming is one of the most important things in a DAW to me. I _very_ frequently zoom in/out/around a project while editing or automating. I was very tempted to make this doubly weighted given how much I loathe a DAW with poor zoom functionality. The tests were...

    * Zoom deeply in to the playhead, then back out to 'full view'
    * Zoom to a selected area on a single track
    * Zoom to a selected area on a selection of tracks
    * Zooming out to a specific zoom level (without multiple steps)
    * Recall a zoom setting after moving around the project
    * Zoom history (and its existence)
    * Mousewheel zooming
    * Zoom to selection (tied to the ease of creating certain selections)
    * Zoom to region
    * Quickly attain a 'full project' view.
^

* Multitrack Editing

    To test this, I manually time-corrected an 18 track drum recording. The outcome was dependent on zooming features, project navigation and editing features.

    I also considered the ability of syncing automation parameters across tracks, ease of moving tracks in the project view and the ability to narrow the 'current view' down to a selection of tracks while maintaining groups.


* Multitrack Takes

    I used the cycle/loop recording function of the DAW to record some multitracked parts. In this case I used a 4-track guitar recording.

    I considered the ease of viewing tracks after recording, how takes were displayed, if the comping features coped with grouped comping, click-free take switching in realtime and how the DAW handled breaking out takes to tracks then back

* Large Project Features

    This is simply the ability to organize, hide and show groups of tracks. Some DAWs have the ability to select which tracks are hidden, visible and save presets for those. Some DAWs use folders for organization. Some DAWs have search, some don't.

    I was biased towards DAWs that had search and project visibility presets. Those 2 features are absolutely crucial for navigating a large project, especially when zoomed in deeply.

* Transport Mapping

    I often record alone and up to 15ft away from my DAW. My iPad is old and I don't have a smartphone. So I have various little devices that I've made over time to allow me to control the DAW transport from a distance. I've used key-commands, midi, OSC and even mouse-control.

    This was rated based on the ease of mapping an external device to transport controls, and the variety of sources of data you could use to control the transport.

* I/O Map & Rename

    I have lots of I/O. I have cables and physical routing all over the place. I don't like to have to trace cables, memorize where things are hooked up or fool around with missing devices.

    This category was rated based on how easy it is to visibly rename and map audio I/O. Bonus points for per-project and bonus points if the DAW copes well with missing I/O (like when using s/mux with adat).

* PDC

    Plug-in delay compensation. How well the DAW compensates for plugins that create latency. I considered the following factors with a large number of delay-inducing plugins present.

    * Playhead position visually 
    * Automation points lining up visually
    * Automation playing correctly
    * Aux send compensation
    * Audio being recorded and placed in the project correctly
    * Meter compensation
    * Time to begin playback

^
* Key Commands

    Key commands are exceptionally important to me. I _hate_ using the mouse. Here is what I looked at regarding key commands:

    * Number of common commands set by default
    * 'Sanity' of common commands (ctrl-alt-shift-d is NOT a sane shortcut for something you may use frequently)
    * Ease of browsing key commands
    * Ease of assigning key commands, bonus points if midi/osc can be done easily.
    * Ability to assign multiple key commands.
    * Command availability for all functions
    * Points docked if you have to install extensions or create macros for anything _remotely_ common.

### Minor

* Re-Record

    Re-record is the function that alows you to instantly stop a recording, undo it, delete the previous recording and start recording from where you started. 5 if it requires a macro, 10 if it's native.

* Multitrack Freewarp

    ![Warping](/assets/StudioEvaluatione/warp.gif)

    When you can do what you see in the graphic, in the project view, and it applies to all grouped tracks.

    DP does not have this, but it makes quantizing multitrack audio relatively easy.
    
    Reaper's implementation does not seem to be properly phase-aligned or... something? The results always sounded weird no matter what stretching algorithm I selected. It also too me nearly an hour to figure out how to do this reliably.

* Loop/Cycle Recording
    
    I recording dozens of guitar and bass tracks with loop recording. Bonus points awarded for a guitar-looper-pedal style looping. What I looked at when cycle recording:

    * Ease of setting loop points
    * Punch in/out being independent from loop points
    * Glitch free looping
    * Ease of comping after the fact
    * Ease of exploding to tracks, or absorbing to takes
    * The ability to edit takes natively, and still use comping features.
    * How multiple comps are handled
^
* Included Plugins

    Simple, my impression of the included plugins. Not the number of them, but rather the usefulness and quality in my experience.

* Mixer Channel Strip

    The integration of EQ, dynamics and others in to the mixer. I valued:

    * The ease of switching the style of effect
    * Access to parameters
    * Selection of effects
    * Quality of effects
^

* VCAs

    The existence of VCAs and if they work as expected. Minor rating differences applied for how VCAs could be organized in the mixer.

* Plugin Organization

    * User created plug-in folders
    * Mono/Stereo selection automatically
    * Different 'sets' of plugins
    * Preset management (very low importance)
^

* Fader/Meter Size

    Can the mixer faders be resized? Meters? Is the normal size appropriate?

* Group/Buss Creation

    * How easy is it to create a group routing for a selection of tracks. 
    * Can tracks feed multiple groups?
    * Can you adjust group location in the mixer automatically
    * Bonus points if group tracks allow editing on them that works on all included tracks.
^

* Track Templates

    I _really_ like the ability to quickly drop in a bunch of tracks with routing, sends, groups and folders all setup. I _do not_ like to have giant monolithic templates. I do have large projects frequently, but I like to 'build to suit' rather than starting out by wading through 100s of tracks.

^
* Automation Density

    * Record data from hardware controller and 'thin' the data, removing points.
    * Increase automation density
    * Built-in interpolated curve testing. Trying to create log/exp/linear curves, S shapes and if/how they can be interpolated.

^
* Snapshot Automation

    Snapshot automation is the ability to apply all current changed parameters of a channel, including plugin values, and applying those as automation states. I considered the ability to ramp between snapshots, not ramp, select ramp ranges and which parameters are used.
^
^
### Even more minor

* Hardware Inserts
    I have a decent selection of hardware that I like to use as inserts in my DAW projects. I rated this based on these criteria:

    * Accuracy of ping
    * Precision of routing
    * Ease of routing
    * I/O name/routing propagation (project i/o routings/names being shown in the hardware insert plugin)
    * Ping values updating based on changed interface/buffer settings.

^
* Macro Support

    By macros I mean multiple actions being mapped to a single action. I don't have many considerations for this. Simply the availability of the feature and how easy it is to find other people's macros.
* Routing

    The flexibility of routing. I tried the following things:

    * Route midi to a plugin
    * Route a plugin output to another track
    * Split audio in to multiple paths for processing
    * Route an audio track to another audio track
    * Sidechaining
^
* Modulation

    Generation and routing of control signals. Can a DAW generate a signal that modulates some other parameter. I'm just curious if it's even possible in the DAW. The capabilities of it were not a concern to me.

* Nrpn/Sysex

    Support for creating and recording NRPN and Sysex.
    
    Bonus points if you can use NRPN/Sysex as control signals for various plug-in/mixer controls.
^
* Metering

    I looked for the following metering features:

    * Lufs metering
    * K-system
    * RMS
    * Configurable meter sizes. Width and height
    * Options to change where meters are displayed by default
    * Inclusion of metering and logging plugins.
    * Smoothness of meter drawing
    * Smoothness of meter drawing under load

# Conclusion and notes.

Going in to this I was fairly certain that overall Cubase would be the winner, but as I worked on projects in Cubase I constantly found annoying things. I became somewhat engrossed with deciding whether or not it was worth switching to Cubase so I felt the need to organize my thoughts.

For the major requirements it's no surprise to me that SAWStudio came out on top. If RML would update a few things, I'd probably go right back to it in a heartbeat. It doesn't appear that any updates are coming anytime soon, and there's a lot of workarounds necessary to use modern plugins and certain modern workflows. It wouldn't take much for SAWStudio to be the best product for me once again, but these days... nope.

DP's second place in the major requirements was surprising to me. I suppose this is how I ended up using DP to begin with, as its overall always given me the most fluid experience when doing what I do.

For the minor requirements, DP performed somewhat poorly. The poor performance was largely due to poor mixer features like VCAs, meter/fader sizes and buss creation. I was _very_ surprised at how well I rated Logic. I grew quite fond of logic while doing any mixing tasks. Unfortunately, Logic became more and more unwieldy as the project size grew. I suspect this is partially user error, but Logic does so many things differently from other programs that I quickly grew frustrated trying to figure out a decent workflow.

You already probably know what I think about Studio One, so I won't cover that.

Reaper's rating is a surprise to me. If you asked me to rate Reaper compared to DP's rating, I'd put Reaper at a 20. This rating system put Reaper at 105.1. Reaper does fair _quite_ well when you isolate features and take time to figure out how things work for a specific specification. Trying to coalesce these features in to a workflow has always been problematic and full of ridiculous workarounds, extensions, command remapping and themes. It's also strange to me that if you learn to use Reaper, there's a very low chance that you could use Reaper on someone else's system. I don't find that appealing at all.

Live's rating is about right. For what I do these days, it's an _awful_ program. A lot of people do awesome stuff in Live. [My favorite artist of all time](http://www.davidbazan.com/) uses Live to record, and I highly respect that. Live has some unique features and amazing capabilities with [max for live](https://www.ableton.com/en/live/max-for-live/). It doesn't fit what I do right now though. There was a time where it was _the perfect_ software for what I was doing on the side with a band, and that's why I have it.

I will never use another Avid product, so Pro Tools was completely ignored. I suspect it would have scored very highly overall.

So with this information in hand it was very apparent to me that while Cubase has a bunch of neat little features, it falls short for the things that matter most to me. I'm certain I'd be happy with it for a while, and it'd eventually erode my feelings for it as I pursued my quest for navigational, editing and mixing efficiency. Cubase has a plethora of features that are _amazing_ for a songwriter or someone working with songwriters. I wouldn't even think twice if this fit what I do, and I'd whole-heartedly recommend it for anyone primarily working alone in a modern genre.

For now, I'm sticking with Digital Performer. When the 9.1 update is fixed, the rating will probably go up ~5 points total.

I __will__ be keeping up with Cubase, and probably using it frequently on and off. I can't wait to see what Cubase 9 brings.

# Support me!

If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

If you have any questions or comments, please comment below! I read every comment and respond to most.