---
layout: ['post', 'reader']
title: My Reaper Settings
comments: true
date:   2017-04-13_20:03:00 
categories: music
tags: ['DAW', 'Reaper', 'Reaper Configuration']
---

**THIS IS IN FLUX**

See [this article for more information]({% post_url 2020-11-19-Starting-over-with-Reaper %}).

I will retain old settings in an archived location that I will denote here when appropriate.

{::nomarkdown}
  <img src="/assets/Reaper/Settings.png" alt="Changes, Changes">
  <div class="image-caption">Customization</div>
{:/nomarkdown}

I decided to split out my Reaper settings in to its own blog post. I will be keeping this up to date everytime I change something.

I will also be adding my Radial Menu, Contextual Toolbars and anything else I see fit here. It will be labeled with the last update as well.

**THIS IS IN FLUX**

**Last Updated** - {{ page.last_modified_at | date: '%Y %B %d' }}

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# Action changes

I've changed a small number of shortcuts and mouse modifiers. How did do I know what I did though?

1. I have my main installation as a [portable install](#portable-install). 
2. I have a second REAPER64.app renamed to "Reaper Default.app" in my /Applications/ folder.
3. Open both versions of Reaper. The /Applications/ install will have all default settings and my portable installe which has all my custom settings.
4. In both programs, run the help->Key bindings and mouse modifiers (shift-F1) command
5. The default web browsers opens. Save each of these files with unique names.
6. Open terminal.app and run "diff file1 file2".

You can use any diff tool that you like. I use [Visual Studio Code](https://code.visualstudio.com), since this is where I write my blog posts as well.

The following setup is what I've determined to be fairly permanent. I'll have the item followed by an explanation if any.

## Key actions

* shift-1 - SWS: Vertical zoom to selected tracks
* Cmd-Opt-, - Options: MIDI editor mouse modifier preferences...
* cmd-Opt-. - ReaPack: Browse packages...
* Ctrl-C - [Script: ToggleMetronomeTrack.lua]({% post_url 2017-07-22-A-Real-metronome-Click-track-in-Reaper-with-toolbar-button %})
    * Changed because I use ReaConsole frequently.
* C - SWS: Open console
    * AMAZING [command-line-like script](http://www.sws-extension.org/reaconsole.php). 
* F4 - Screenset: Load window set #01
* F5 - Screenset: Load window set #02
* F6 - Screenset: Load window set #03
* Q - Item: Quantize item positions to grid...
* Shift-Q -Script: HeDa_Loudness Graph VIP.lua
    * My HeDa scripts open with Q commands.
* A - Script: Lokasenna_Radial Menu.lua
    * This is the easiest key for me to hit that is unassigned by default.
* Opt-. - View: Restore next zoom level
* Opt-, - View: Restore previous zoom level
* ESC - Time selection: Remove time selection
    * Default removes loop points, I rarely want to remove loop points
* Cmd-ESC - Time selection: Remove time selection and loop points
    * Sometimes I _do_ want to remove loop points though.
* F1 - SWS/BR: Move active floating window to mouse cursor (horizontal: middle, vertical: middle)
    * This is a **HUGE** improvement to dealing with floating windows.
* Shift-Mousewheel - View: Scroll horizontally reversed (MIDI CC relative/mousewheel)
    * I dislike the "normal" scroll direction. Scrolling down should show me "new" information, and this does that.

## Mouse Modifiers

Here's the mouse

* Mouse: Media item
    * Shift - Select item and move edit cursor ignoring snap

* Mouse: Arrange view right drag
    * Cmd - Marquee zoom
        * Probably my most used modifier.
    * Shift-Cmd - No action
        * I don't want to have a +shift action that doesn't change snapping behaviour.
    * Opt - Marquee select items and time
    * Shift-Opt - Marque select items and time ignoring snap
    * Cmd-Opt - Marquee add to item selection
    * Ctrl - Select time
        * This seems more intuitive to me
    * Ctrl-Shift - Select time ignoring snap

* Mouse: Arrange view middle click
    * Default action - [Custom: Select item and move cursor (Snap)](#select-item-and-move-cursor-snap)
    * Shift - [Custom: Select item and move cursor (Snap)](#select-item-and-move-cursor-no-snapping)

* Mouse: Arrange view middle drag
    * Default action - Hand scroll

* Mouse: Envelope Segment left drag
    * Ctrl - Move Envelope Segment

* Mouse: MIDI Editor
    * Default action - Marquee select notes/CC and time
    * Shift - Marquee select notes/CC and time ignoring snap
    * Opt - Marque select notes/CC
    * Shift-Opt - Marquee add to notes/CC Selection
    * Ctrl - Select Time
    * Shift-Ctrl - Select time ignoring snap
    
* Mouse: MIDI Piano Roll
    * Shift- (Just) Insert Note


# Custom actions

## Heda Track Inspector

* Q - Custom: HeDa_Track_Inspector VIP under cursor
    * Track: Select track under mouse
    * ScriptI HeDa_Track Inspector VIP_Floating.lua
 
This allows me to hover over a track, press Q, and have the HeDa_Track_Inspector VIP pop-up for that track.
 
## Zoom to full project

* Opt-` - Custom: Zoom All Project
    * Track: Select all tracks
    * Item: Select all items in track
    * SWS: Vertical zoom to selected tracks
    * SWS: Horizontal zoom to selected items
    * Track: Unselect all tracks
    * Item: Unselect all items

Reaper's "View: Zoom out project" does not do this. The idea is to zoom to show all items and tracks if possible. I find this much more useful for resetting the view after a deep zoom-dive.

## Open and center FX chain

* F - Open and Center FX Chain for Selected Track
    * SWS/S&M: Show FX chain for selected tracks (selected FX)
    * SWS/BR: Move active floating window to mouse cursor (horizontal: middle, vertical: middle)

I almost never want to open just an FX, and I much prefer that the FX Chain window appear centered over my mouse so that I do not have to move around for it.

## Clear Mix

* No assignment - Clear Mix
    * Track: Select all tracks
    * SWS: Select master track
    * SWS/S&M: Clear FX chain for selected tracks
    * SWS/S&M: Remove sends from selected tracks
    * SWS/S&M: Remove receives from selected tracks
    * Xenakios/SWS: Reset volume and pan of selected tracks
    * SWS/S&M: Remove all envelopes for selected tracks
    * SWS: Select tracks with flipped phase
    * Track: Invert track phase
    * Track: Unselect all tracks


I use "Clear Mix" to reset a mix when using SWS Snapshots. It is not assigned a shortcut so I don't accidentally hit it. It is added to the mixer context menu though.

## Startup

This is the action that I use for [SWS project startup actions](#sws-startup-actions).

* No assignment - Startup
    * Screenset: Load window set #01
    * Script: MonitorMetronomeTrack.lua
    * Script: Script: HeDa_Track Inspector VIP.lua
    * Script: mpl_InteractiveToolbar.lua

## Mixer Switch

* F5 - Custom: Switch to Mixer and Scroll
  * Screenset: Load window set #02
  * Script: Lokasenna_Scroll mixer to first selected track.lua
  
## Stop in Place (Thanks to REAPERBlog.net for this)

* Return, Numpad Enter - Custom: Stop in Place
  * View: Move edit cursor to play cursor
  * Transport: Stop (save all recorded media)
  * Transport: Set playrate to 1.0
  

## Select item and move cursor (Snap)

* Middle Mouse - Mouse modifiers Arrange view
  * Item: Select item under mouse cursor
  * View: Move edit cursor to mouse cursor

## Select item and move cursor (no snapping)

* Shift-Middle Mouse - Mouse modifiers Arrange view
  * Item: Select item under mouse cursor
  * View: Move edit cursor to mouse cursor (no snapping)


# Menu Changes

* Mixer Context
    * Clear Mix (Near bottom)


# Action Changes

*  **OFF** Project tabs: Play stopped background projects with active project

# Configuration changes

## Here are the general configuration changes that I've made in Reaper Preferences.

* General
    * Maximum undo memory use: 1024
    * **ON** Save undo history with project files (in RPP-UNDO file)
    * **ON**  Store multiple redo paths when possible (can use a lot of RAM)
    * Open project(s) on startup: Prompt

* General->Paths
    * **ON** - Store all peak caches (.reapeaks) in alternate path
        * /Users/robertrandolph/Music/ReaPeaks

* Project
    * When creating new projects, use the following project file as a template: /Users/robertrandolph/Music/Reaper Blank/Blank/Blank.RPP
    * **ON** Keep multiple versions
    * **ON** Keep undo histories
    * **ON** Save to timestamped file in project directory

* Project->Track/Send Defaults
    * **ON** Record Config - Monitor Input

* Project->Media Item Defaults
    * **OFF** Create automatic fade-in/faed-out for new items, length:

* Audio->Buffering
	* Media buffer size: 10ms - this greatly reduces latency when switching takes and moving the playhead.
	* Media buffer size when per-take FX UI open: 10ms - reduces latency when adjusting per-take FX.
    * **OFF** Anticipative FX processing - following settings are irrelevant.
        * Render-ahead: 50ms
            * This is done to reduce the display response time on FX. Higher values make the display delayed.
    * Advanced Disk I/O options
        *  **ON** Allow memory mapping of peak-files

* Audio->Playback
    * **ON** Scroll view to edit cursor on stop
        * This was a huge one for me. If you're zoomed in with automatic scrolling on, this is how you have it return to your last edit position on stop.
    * **OFF** Stop/repeat playback at end of project

* Audio->Recording
    * Show preview of recording items while recording, update frequency: 10hz (new)
    * Filename format for recorded files: $tracknumber-$track-$month$day$year_$hour12-$minute$ampm
    * **ON** Show primary recording path in menu bar

* Audio->Loop Recording
    * **ON** In loop recording, discard incomplete first or last takes if at least one full loop was recorded. Threshold for complete take: 90%

* Appearance
    * Solid edge on time selection highlight
    * Solid edge on loop selection
    * Pixels between items on adjacent tracks: 1

* Appearance->Media
    * **ALL** Media Item buttons with "Item Properties"
    * Item volume control: Knob

* Appearance->Peaks/Waveforms
    * Tint media item background to:
        * **ON** Track color
        * **ON** Item color
        * **ON** Take color

* Appearance->Track Control Panels
    * **ON** Tint track panel backgrounds
    * Meter update frequency (Hz): 60
    * Meter minimum value (dB): -90
    * Meter decay (dB/sec): 60
    * Pan fader unit display: -90dB .. +90dB

* Editing Behaviour
    * **OFF** Link loop points to time selection
    * Vertical zoom center: Last selected track

* Editing Behaviour->Mouse
    * **OFF** Ignore mousewheel on all faders

* Editing Behaviour->Midi Editor
    * **OFF** Close editor when the active item is deleted in the arrane view - This allows screensets to open the midi editor even when there's no active midi item.

* Media
    * **ON** Copy imported media to project media directory
    * **ON** Put new peak files in peaks/ subfolder relative to media

* Media->Video/REX/Misc
    * **ON** Disable high-resolution peaks for video items

* Plug-ins
    * Only show FX matching filter string: NOT "AUi:" NOT "AU:"

# Changes made in the Reaper menus or elsewhere

* Options
  * **OFF** - Show takes in lanes (when room)
  * **ON** - Item grouping enabled
  * Peaks Display mode
	* **ON** - Show Spectral Peaks
        * Peaks Display Settings
            * Opacity - Max
            * Nose Threshold - 2.9
            * Colours = Red centered on ~80hz
            * Display Gain - 0.0dB
    * **ON**  - Scale peaks by square root (half of range is 12db rather than 6db)

* Default Project Settings
    * Project BPM - 100.000
    * Render Resample - HGP (512pt Sinc)
    * Path to save media files - audio/

* **ON** Right-click item group toolbar (or toggle action list): Selecting one grouped item selects group

* **ON** Options: Show overlapping media items in lanes

* **ON** Options: Continuous Scrolling

* **ON** Options->Envelope Points: Add edge points when ripple editing or inserting time

### Midi Editor

* Contents
    * One MIDI editor per: **Project**
    * Behaviour for "open items in built-in MIDI Editor"
      * **ON** Open all selected MIDI items
      * **OFF** void setting MIDI items from other tracks editable
    * Options when using one MIDI editor per project
      * **ON** Active MIDI item follows selection changes in arrange view
      * **ON** Media item selection is linked to visibility
      * **ON** Media item selection is linked to editability
* Options
    * Drawing or selecting a note sets the new note length
    

### Project Bay
    * Options
        * **ON** Mirror selection in bay and project
        * **ON** Zoom/scroll to selected media items when mirroring selection

### Spectral Peaks settings

{::nomarkdown}
  <img src="/assets/Reaper/Settings/SpectralPeaks.png" alt="Spectral Peaks Settings">
  <div class="image-caption">Spectral Peaks Settings</div>
{:/nomarkdown}

# Installed Scripts

## Third Party

* [Heda Scripts Manager](https://reaper.hector-corcin.com)
    * Track Inspector VIP
    * Regions&Markers from items
    * Track Templates VIP
    * Notes Reader VIP
    * Loudness Graph VIP
    * Remove Bypassed FX
    * Auto Record Mode
* [SWS](http://www.sws-extension.org)
* [ReaPack](https://reapack.com)
    * Scripts
        * ls_Envelope LFO generator and shaper
        * Radial Menu
        * X-Raym_Group selected items according to their order in selection per track
        * X-Raym_Reset item snap offset
        * me2beats_Create folder from selected tracks (+rename folder) 2 - Allows non-contiguous track selection and entry in to folder!
        * mpl_Sort plugins by vendor - Create folders for all your plug-ins, by vendor.
        * Envelope-based Compressor v2 - A compressor that creates a volume envelope instead of directly applying gain to audio passing through a plug-in.
        * mpl_Quantize Tool.lua - Amazing quantize tool to allow you to quantize anything to almost anything.
        * Quantize Tool
        * Script: js_Envelope LFO generator and shaper.lua
        * [Radial menu](http://forum.cockos.com/showthread.php?t=186637)
        * [Sexan](https://github.com/GoranKovac/ReaScripts) - Create VCA Master from selection
        * [Sexan](https://github.com/GoranKovac/ReaScripts) - Remove Selected VCA Master And Its Slaves With All Flags
		* [Track-Item Name Manipulation v2 UNDO](https://forum.cockos.com/showthread.php?t=194414) - track and item name fixing, with [LUA pattern support](https://www.lua.org/pil/20.2.html)
		* [ReaLearn](https://www.helgoboss.org/projects/realearn/)
		* [TrackFX Routing Matrix](https://stash.reaper.fm/v/28892/TrackFXs_Routing_Matrix_DS_KW.lua) - Huge improvement to track routing.
        * Lokasenna_Scroll mixer to first selected track.lua
        * cfillion_Interactive ReaScript.lua
        * mpl_InteractiveToolbar.lua - I've replaced my transport with this, it's an amazing script.
    * Effects
        * 5.1 Master Limiter
        * Bass Professor Mark II
        * Bassprofessor
        * HBC-2
        * HBC-5
        * Leet Delay 2
        * QuadraCom
        * SEGX2 Gate
        * Skope2
        * SLAX
        * Stero2SurroundRotator
        * Surround Pan 2
        * Transpire
        * TriLeveler2
        * VOLA2
		* Stereo Alignment Delay (by Geraint Luff)
        * [ReEQ](https://forum.cockos.com/showthread.php?t=213501)

## ReaPack Repositories

These are the repositories that I have setup in ReaPack

* ReaPack - https://github.com/cfillion/reapack/raw/master/index.xml
* ReaTeam Scripts - https://github.com/ReaTeam/ReaScripts/raw/master/index.xml
* EUGEN27771-ReaScripts - https://github.com/EUGEN27771/ReaScripts/raw/master/index.xml
* Fernsehmüll Scripts - https://github.com/fernsehmuell/reaper_scripts/raw/master/index.xml
* Geraint's JSFX - https://geraintluff.github.io/jsfx/index.xml
* kawa Scripts - https://bitbucket.org/kawaCat/reascript-m2bpack/raw/master/index.xml
* mrlimbic scripts - https://github.com/mrlimbic/reascripts/raw/master/index.xml
* nofish ReaScripts - https://github.com/nofishonfriday/ReaScripts/raw/master/index.xml
* Przemoc's ReaScripts - https://github.com/przemoc/REAPER-ReaScripts/raw/master/index.xml
* X-Raym MIDI Makey Makey - https://github.com/X-Raym/MIDI-Makey-Makey/raw/master/index.xml
* luckyxxl Scripts - https://raw.githubusercontent.com/luckyxxl/reaper-scripts/master/index.xml
* RCJacH Scripts - https://raw.githubusercontent.com/RCJacH/ReaScripts/master/index.xml
* ReaTeam JSFX - https://github.com/ReaTeam/JSFX/raw/master/index.xml
* Sexan_Scripts - https://github.com/GoranKovac/ReaScripts/raw/master/index.xml
* Tack Scripts - https://github.com/jtackaberry/reascripts/raw/master/index.xml
* SonicAnomaly JSFX - https://github.com/Sonic-Anomaly/Sonic-Anomaly-JSFX/raw/master/index.xml
* RobU Scripts - https://github.com/RobU23/ReaScripts/raw/master/index.xml
* MPL Scripts - https://github.com/MichaelPilyavskiy/ReaScripts/raw/master/index.xml
* X-Raym Scripts - https://github.com/X-Raym/REAPER-ReaScripts/raw/master/index.xml
* ReaTeam Themes - https://github.com/ReaTeam/Themes/raw/master/index.xml
* ReaTeam LangPacks - https://github.com/ReaTeam/LangPacks/raw/master/index.xml
* me2beats Scripts - https://github.com/me2beats/reapack/raw/master/index.xml
* chtammik_Reaper_Scripts - https://github.com/chtammik/chtammik_Reaper_Scripts/raw/master/index.xml
* Claudiohbsantos Scripts - https://github.com/Claudiohbsantos/Claudiohbsantos-Scripts/raw/master/index.xml

Regex to parse the repo list: `(remote\d*)=(.*?)\|(.*?)\|.*` with `* $2 - $3` as the substitution.

## Personal

### Toggle Metronome

I have a script that toggles the mute start of the first track in the project. For me this is a click track. So I can assign this action to a toolbar button or [radial menu](#radial-menu-settings) and turn on/off the click.

This script updates the toggle state of the click so you can see if it's on/off even when the track is not visible.

Also covered in [this blog post]({% post_url 2017-07-22-A-Real-metronome-Click-track-in-Reaper-with-toolbar-button %})

~~~ lua
reaper.Undo_BeginBlock()
  is_new_value, filename, sec, cmd, mode, resolution, val = reaper.get_action_context()
  state = reaper.GetToggleCommandStateEx( sec, cmd )
  
  -- must set track first or the defered script gets in the way!
  track = reaper.GetTrack(0, 0)
  reaper.SetMediaTrackInfo_Value(track, 'B_MUTE', state) -- opposite of the command state
        
  reaper.SetToggleCommandState( sec, cmd, (1 - state)) -- Toggle
  reaper.RefreshToolbar2( sec, cmd )
reaper.Undo_EndBlock("Toggle Metronome Mute", -1)
~~~

### Monitor Metronome

The previous script only updates the click track when you use the action. It does not update the toolbar button when the mute on the track itself is clicked. This script monitors the track and makes sure that the toolbar and track mute-state are always in sync no matter how you change the mute on the track!

If you use this, make sure that the "NamedCommandLookup" function is referring to the command ID of your [toggle metronome](#toggle-metronome) script or it will not work.

Also covered in [this blog post]({% post_url 2017-07-22-A-Real-metronome-Click-track-in-Reaper-with-toolbar-button %})

~~~ lua
function main()
  
  track = reaper.GetTrack(0, 0)
  mute_state = reaper.GetMediaTrackInfo_Value(track, 'B_MUTE', new_state)
  cmd = reaper.NamedCommandLookup("_RS35338bf5bacea555636e5b284fd2bf346e254914")
  reaper.SetToggleCommandState( 0, cmd, ((mute_state == 1) and 0 or 1))

  reaper.defer( main )
  
end

-- RUN
main()
~~~

### Keytracking

I have 3 JSFX that allow me to use midi note values to modulate things in Reaper.

They are listed in these posts: [Keytracking in General]({% post_url 2017-08-06-Keytrack-any-parameter-in-Reaper-with-this-script %}) and [Keytracking specifically for EQs/Filters]({% post_url 2017-08-06-Realtime-pitch-tracked-EQ-bands-in-ReaEQ %})

**This is a particularly cool and useful thing to use when mixing!**

# Current other settings

## Mixer

{::nomarkdown}
  <img src="/assets/Reaper/CurrentMixerSettings.png" alt="Current mixer settings">
  <div class="image-caption">Current settings of the mixer</div>
{:/nomarkdown}

## Track Control Panel

* **On** - Show Master Track

## SWS Startup actions

* [Startup](#startup)

# Toolbar update

{::nomarkdown}
  <img src="/assets/Reaper/CurrentToolbar.png" alt="Toolbar">
  <div class="image-caption">My toolbar... so far</div>
{:/nomarkdown}

Currently my toolbar resides simply in the main toolbar area.

I am working on using [Radial Menus](#radial-menu-settings) to replace my previously huge toolbar.

# Current Theme and Layout

{::nomarkdown}
  <img src="/assets/Reaper/CurrentTheme.png" alt="Current theme and layout">
  <div class="image-caption">What Reaper looks like to me</div>
{:/nomarkdown}

I am currently using the latest [Default 5.0 Nitpicky Edition](http://forum.cockos.com/showthread.php?t=165040). Simply the change to the monitor buttons alone is fantastic to me.

* Theme Development: Show theme tweak/configuration window
    * **ON** - Theme has interlaced VU Meters
    * VU meter top - RGH(255, 0 , 0)
        * This puts the red 'hot' color right at about -12dbFS, which is what I prefer to work with.
    * VU meter middle - RGB(0, 255, 0)
        * I don't like the yellow showing up so early.

* ~Theme modification: [See this post for more information](http://forum.cockos.com/showpost.php?p=1832485&postcount=183)~ Theme was updated as an improvement on this idea.

# Radial Menu settings

{::nomarkdown}
  <img src="/assets/Reaper/RadialMenu.png" alt="Radial Menu">
  <div class="image-caption">Radial Menu settings</div>
{:/nomarkdown}

I have my settings file located [HERE](/assets/Reaper/Settings/RadialSettings.txt).

# Click Settings

I use a "click source" item for a metronome. More thoroughly covered in [this blog post]({% post_url 2017-07-22-A-Real-metronome-Click-track-in-Reaper-with-toolbar-button %})

Here are the settings:

* Primary beat volume: 0.00db
* Secondary beat volume: -6.04db
* Frequency of primary beat: 2000hz
* Frequency of secondary beat: 1200hz
* Beat click length: 40ms
* shape: Sine - soft start

I have the following effects on that track to further increase the audibility of the click in dense mixes:

* JS: Transient Controller
    * Attack (%) - 100%
    * Sustain (%) - -28.0
    * Output (dB) - 0.0
* JS: Soft Clipper/Limiter
    * Boost (dB) - 0.0
    * Output Brickwall (dB) - -0.1

# Support me!

This post takes a good bit of time to keep up to date, and often when I'm trying to be creative. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>



