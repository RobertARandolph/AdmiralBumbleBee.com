---
layout: static-post
title: My REAPER settings, and why.
comments: true
categories: music
tags: ['Reaper', 'Reaper Tips']
description: My REAPER settings, and why I chose them.
---

**Last Updated** - {{ page.last_modified_at | date: '%Y %B %d' }}

# Contents
{:.no_toc}
* TOC
{:toc}

# Settings

The format is:

1. Header is a location.
2. Plain text is a rationale.
3. **BOLD** is a value.
4. `Code` is a setting

It looks like this:

## Location

* Rationale for the setting
  * **VALUE** - `setting`

### Sub-location

* Rationale for the setting
  * **VALUE** - `setting`
  * **VALUE** - `setting`

# Settings

## `File->Preferences->General->Undo Settings`

* Disk space and memory are cheap. Ideas are not. I setup my REAPER undo so that I have maximum chance of recovering from failures.
  * **2048** `Maximum undo memory use:`
* Selection Undo. The ability to undo selections is a major part of reproducible editing sequences, not because of the sequence but because of mistakes that might happen during the sequence. Most users will probably find these settings irritating, but I treat selection operations as part of the commands that operation on these selections, therefore I prefer them undoable.
  * `Include Selection:`
    * **ON** `item`
    * **ON** `track`
    * **ON** `envelope point`
    * **ON** `time`
    * **ON** `cursor position`
* What happens if I somehow reach the point where no more of the undo stack can be saved? Should I value the oldest states, or the most recent states? I use undo as a rewind button, not a history button. I want a linear sequence of state that extends from my recent action to as far as _possible_. 100 steps ago is meaningless if I cant reach back 1 step.
  * **ON** `When approaching full undo memory, keep newest undo states`
* I believe offline history is integral to any software with an undo stack. I do not want to close my software (intentional or not) and re-open it without my undo stack in place. My ideas are fluid and persist across instantiations of the application, so my ability to rewind in history should follow suit.
  * **ON** `Save undo history with project files (in RPP-UNDO file)`
* Necessary for undo-history to be useful. I assume this is a debugging function?
  * **ON** `Allow load of undo history`
5. Undo trees are a difficult topic for me. This is a feature which allows you to store multiple undo paths: I do thing A2, undo twice, do thing B1. In linear undo stacks, it's not possible to get back to A2 because you rewound and rewrote history. Tree-like undo stacks retain this history.
    * I turned on "Store multiple redo paths..." for years because I feared that losing history would be disasterous in some fabricated scenario that I never encountered. Despite recognizing that I never used it to heroic effect, the amount of ram used by this feature is minimal when I use REAPER (despite the warning in the dialog!). Ram is cheap, so I store multiple redo paths.
      * **ON** `Store multiple redo paths when possible (can use a lot of RAM)`

## `File->Preferences->General->Startup Settings`

{::nomarkdown}
<video autoplay loop muted class="gifvid">
<source src="/assets/Reaper/30/SplashScreen.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<div class="video-caption">Splash Screen</div>
{:/nomarkdown}

* I spend more time sketching these days than anything. An idea pops into my head, and I want to record it quickly and save it for later evaluation when I can be a bit more "objective". Having a new project of my default template gives me the fastest entry point to the most common task I have in mind when I start REAPER.
  * **NEW PROJECT** `Open project(s) on startup:`
* I don't need to be reminded of new versions, and I especially don't want another dialog to click _nearly everytime I start REAPER_! REAPER's update speed is tremendous, and outside of this series, I update only when there's a feature I care for. Having this setting on puts a dialog between me and startup nearly everytime I open the program.
  * **OFF** `Automatically check for new versions of REAPER on startup`
* I don't know. I turn this off because I don't open media from finder.
  * **OFF** `Create new project tab when opening media from explorer/finder`
* Turning the splash screen **OFF** speeds up REAPER's start up fairly significantly for me.
  * **OFF** `Show splash screen on startup.`
  
## `File->Preferences->General->Paths`

`~` in a path means "User directory" on macOS and Linux.

* I set this to my `~/Music/Reaper` directory so that all REAPER based projects end up in the same place. I generally remember which projects are in which DAW, so this is easier for me.
  * **~/Music/Reaper** `Default path to save new projects:`
* Left empty so that all assets are stored with the project. This makes the project portable.
  * **EMPTY** `Default render path (if left empty the current project directory, if any, will be used):`
* I like to sketch things out in an empty project sometimes, so I set this to `~/Music/Reaper/Sketches`. If not set, then everything goes into `~/Documents/Reaper Media`
  * **~/Music/Reaper/Sketches** `Default recording path, when project is unsaved and no recording path is configured:`
* I **HATE** reapeaks. I would be quite happy if there was an "always compute peaks and never, ever, in any circumstance, create reapeak files". I put them in `~/Music/Reaper/Garbage`
  * **ON** **~/Music/Reaper/Garbage** - `Store all peak caches (.reapacks) in alternate path:`
* No idea what this does, and I don't care right now.
  * **EMPTY** Use alternate peak cache path for the following paths (multiple paths separated by semicolons):

## `File->Preferences->Project`

* **/Users/robertrandolph/Music/Reaper/Default.RPP** `When creating new projects, use the following project file as a template:`
* **New Project** `Preferences->General->Startup Settings->Open project(s) on startup:`

## `File->Preferences->Project->Media Item Defaults`

* I've had more issues tracking down fades that I didn't put in place, than problems I've had solved by automatic fades. I prefer to add fades myself so I know exactly what's happening.
  * `Project->Media Item Defaults`
    * **OFF** `Create automatic fade-in/faed-out for new items, length:`
    
  
## `File->Preferences->Audio->Buffering`

* I have a fast computer, I dislike latency of any sort, even at the expense of performance. That includes live-monitoring latency and latency of controls. This settings seem to give me the most responsive REAPER experience.
  * **ON** `Auto-detect the number of needed audio processing threads.`
  * **Highest** `Thread priority`
  * **Automatic** `Behavior`
  * I use the Takes system extensively. This means switching between takes frequently audition which part is ideal. There's a lag to this that seems to be affected by the following setting. It also affects the time after moving the cursor that you hear audio, so I set it as low as I feel comfortable with
    * **10ms** `Buffering->Media buffer size:`
  * Time between hearing a take-fx change and hearing it is affected by this setting. I set this low as reasonable.
    * **5ms** `Media buffer size when per-take FX UI open`
* I use [UA Apollo and UAD plugins](https://www.uaudio.com) which do not work with anticipative processing very well.
    * `FX processing/multiprocessing settings`
      * **OFF** `Anticipative FX Processing`
      * **OFF** `Allow live FX multiprocessing`
  
## `File->Preferences->Audio->Recording`

* I want to see pretty things when I'm recording, crank up the drawing rate.
  * **30hz** `Show preview of recording items while recording, update frequency:` 
* I use this format because it makes it easier to sort by track location, then track time.
  * **$tracknumber-$track-$month$day$year_$hour12-$minute$ampm** `Filename format for recorded files`

## `File->Preferences->Audio->Loop Recording`

As of this writing, this dialog appears to use "Full" and "Complete" to mean the same thing, even though you can change the meaning of "Complete" to <100%. I think that most users will view the word "Full" as always meaning 100%. This is confusing.

* `Preferences->Audio->Loop Recording`

* I loop record frequently, and the default settings are silly. Almost every other DAW discards takes if not completed, since most users don't want slivers of guitar noise while they reach for the stop button. Neither do I.
    * **ON** `In loop recording, discard incomplete first or last takes if at least one full loop was recorded`
    * **100%** `Threshold for complete take:`
* I find that I end up with a lot of accidental "full length MIDI items" when recording if I have this on. I don't use MIDI overub/replace.
    * **OFF** `MIDI overdub/replace recording always creates selection-length media item`
* I prefer safety when recording as well. REAPER defaults to writing files _after_ the entire looping process is finished. This makes recovery from a crash or mistake difficult (or impossible)
    * `When recording and looped, add recorded media to project:`
      * **ON** `At each loop (creates new files, good for recording multiple audio layers on the fly etc)`

## `File->Preferences->Appearance`

* I have a difficult time seeing the selection bars, so I use these settings to make it more obvious:
  * **Solid edge on time selection highlight** 
  * **Solid edge on loop selection**
  * **4** `Play Cursor Width`
  * **1x** `Pixels between items on adjacent track`

## `File->Preferences->Appearance-Media`

* For some reason, buttons do not appear unless these are checked!?
  * **ON** `Locked`
  * **ON** `Not muted`
  * **ON** `No FX`
  * **ON** `No active envelopes`
  * **ON** `No notes`

## `File->Preferences->Editing Behaviour`

* I move time selection around while editing, but I am often looping an adjacent or overlapping section of audiok. Loop and Selection can't be linked for me.
  * **OFF** `Link loop points to time selection`

## `File->Preferences->Editing Behaviour->Mouse`

* I am a "scroller". I use my mousewheel to scroll in every other application, but REAPER defaults to mousewheel controlling faders. When scrolling horizontally in the mixer, it's possible to accidentally mousewheel a fader or some other parameter. I don't want that to ever change the mix, only scroll.
  * **OFF** `Ignore mousewheel on all faders`
  * **OFF** `Ignore mousewheel on track panel faders`
  * **OFF** `Ignore mousewheel on transport edit fields`
* I like to aim where I am zooming, then scroll to zoom there.
  * **Mouse Cursor** `Horizontal zoom center`
    
# `TCP Right Click Menu`

* I've decided to try "mixing from the arranger" for a while. These settings depend on my Default Screenset

* Master track is necessary for general work.
  * **ON** `Right Click Empty TCP Area->Show Master`
* I don't need to see levels of sends, and I don't use multichannel audio.
  * **ON** `SWS/NF: Disable multichannel metering (all tracks)` (Action List)
  
# `Right Click Transport`

* I just like the look of this better :)
  * **ON** `Right Click Transport->Center transport controls`

# `Mixer Right Click Menu`

Settings for the right click mixer menu. Easiest place to see them is right clicking on the tab for the Mixer.

* I don't want to see the master in the mixer, I can select it in the TCP
  * **OFF** `Master Track -> Show in Mixer`
* Folders are already shown in the TCP, I don't need to see indicators in the mixer now.
  * **OFF**  `Show folders`
* I want to see all tracks.
  * **ON**  `Show normal top level tracks`
  * **ON**  `Show tracks that are in folders`
  * **ON**  `Show tracks that have receives`
* I have no way of easily scrolling in the Mixer, and rely on selecting tracks in the Arranger now, so I need these views linked.
  * **ON** `Scroll view when tracks activated`
* This doesn't matter, but I have it on.
  * **ON** `Auto-arrange tracks in Mixer`
* This doesn't matter, so I just don't care.
  * **OFF** `Group folders to the left`
* This doesn't matter, but I have it off for when I want to use the mixer normally.
  * **OFF** `Group tracks that have receives to left`
* This doesn't matter, but I want to make sure that I don't mistakenly click it and cause problems.
  * **OFF** `Clickable icon for folder tracks to show/hide children`
* I want a single channel shown to the left.
  * **OFF** `Show multiple rows of tracks when size permits`
  * **N/A** `Show maximum rows even when tracks would fit in less rows`
* I want to see FX, duh?
  * **ON** `Show FX inserts when size permits`
  * **ON** `Show sends when size permits`
* I _do_ want to see FX parameters now that I have a lot of extra space! I don't know how I'll use these, but I know that I will not use them if I don't see them.
  * **ON** `Show FX parameters when size permits`
  * **ON** `Group FX parameters with their inserts`
* I don't understand how this works when it's turned on. It seems to just make sends disappear.
  * **OFF** `Group sends with (before/after) FX Inserts`
* I don't use track icons, so I turn them off.
  * **OFF** `Show track icons in Mixer`
  * **ON** `Show icon for last track in folder`
* The entire premise here is that I have the mixer docked to the left, so... do that.
  * **ON** `Dock Mixer in Docker`
    * Docked to LEFT for "Editor" Screenset.
    
# FX Browser Settings

* `FX Browser window->Right Click empty area`

* I don't like having FX windows all in a single box. With the Mixer on the left, I'll be selecting specific FX and not using the FX chain window much.
  * **ON** `Preferences->Plugins->Auto float new fx windows`
* I only use VST and JSFX.
  * `FX Window right click->Show in left-pane list`
    * **ON** VST, VST3, JS, Instruments, Cockos, FX Chains.
* I like to start fresh when selecting FX, it's fairly rare that I want the same search/settings when starting over.
  * **OFF** `FX Window right click->Auto-clear search field on close`
  * **OFF** `FX Window right click->Auto-clear folder view on close`
    

# `File->Project Settings`

## `Project Settings`

These settings apply per project and are only applicable when using a template, on the current project or when `Save as default project settings` is used.

* Max that all of my devices support
  * *48000* `Project Sample Rate`
* My preferred starting tempo.
  * **100* `Project BPM`
* I have a fast computer, let's near max all the resampling parameters.
  * **HQ (512pt Sinc)** PlaybackResample Mode
  * **HQ (512pt Sinc)** Render Resample Mode
* Almost all of my stretch marker uses is on drums, so prefer transient aware stretch markers:
  * **Transient-optimized** `Stretch marker mode:`

## `Media`

* Files should _always_ be with their project!
  * **Copy media to project path** `On import of media to project`
  
## `Advanced`
  
* I prefer the slight 'bonus width' from a light pan law, and the cleaner center channel that comes from passing mono signals down to stereo.
  * **-3.0** `Advanced->Pan law:`
* I like my projects to give me some leeway at the start of the project for things to happen, and the downbeat to not be on bar 3 or 4.
  * **-4** `Project start measure`
* This is a controversial one, but the first two DAWs I used let overlapping clips make sound, and I became used to that. I'm so used to it that it _still_ catches me off-guard in DAWs that do not allow it. REAPER allows it, and I think it's a much easier way to work while recording.
  * **Items always mix** `Item mix Behaviour:`

# Menu Based Settings

## `Options->Layouts`

* **200%_A** `Mixer Panel`
* **200%_C** `Track Panel`

## `Actions->Show action list`

* I don't need to see levels of sends, and I don't use multichannel audio.
  * **ON** `SWS/NF: Disable multichannel metering (all tracks)` 
  * I just like the look of this better :
    * **ON** `Right Click Transport->Center transport controls`
* I like to use REAPER's free item positioning. This allows overlapping items to be segregrated into  lanes. I find that this "Tracks in a track list" setup much easier to edit in.
  * `Options: Show overlapping media items in lanes (when room)` 
* I don't like the explicit group selection method where you can still select a single track when there's a group. If I have a group made, then I always want it working as a group until I turn it off.
  * `Options: Selecting one grouped item selects group` 
* It's 2020 still, continuous scrolling is still the way to go.
  * `View: Continuous scrolling during playback` 
* Reaper's Spectrogram view mode is awesome. I find that it lets me recognize what's in an item much better than a simple peak file. It still draws normal "peaks" but with colour to indicate the dominant frequency component at that time. These are the settings that I find to be the most distinctive.
  * `View: Show peaks display settings` 
    * **Spectral Peaks** `Display Mode`
    * **2.9** `Noise Threshold`
    * Slide `Red` to **80hz**
    * **Scale Peaks by Square Root** ``.. menu``
    * **Rectify Peaks** ``.. menu``
* Takes in lanes is disgusting. It shows you a mess that you never really need to see. My workflow is to act like there's an onion to peel, not a tetris game I need to reverse.
  * **OFF** `Options: Show all takes in lanes (when room)` 

# Hotkey Design

## VIM

These settings are applied in the Action List. `File->Actions->Show action list` or press `Shift-/`

I use [the best version of Vim](https://github.com/emacs-evil/evil) when working on anything textual. This means that I'm used to the keys that it provides, and I'm used to modal editing.

REAPER doesn't have proper modal editing (yet, though I recall a script or two that was close). However I will still use some basic VIM hotkey concepts in my hotkey layout.

You will find _some_ of these in the REAPER listings with a REAPER command, but here are the VIM meanings for them. (Note, capitalization matters!)

* **h** - cursor left
* **l** - cursor right
* **j** - cursor down
* **k** - cursor up
* **i** - insert
* **a** - append
* **I** - insert at beginning of line
* **A** - append at end of line
* **w** - beginning of word, moving forward
* **b** - beginning of word, moving backward
* **e** - end of word
* **^** - cursor to first non-blank character
* **$** - cursor to end of line
* **r** - replace character
* **u** - undo
* **control-r** - redo
* **v** - start visual selection mode
* **V** - start visual selection mode, marking lines
* **d** - delete selected text
* **Control-d** - scroll down half a screen
* **Control-u** - scroll up half a screen
* **o** - insert line and begin inserting text
* **O** - insert line above and begin inserting text
* **u** - selected text to lowercase
* **U** - selected text to uppercase
* **c** - change...
* **y** - yank (copy)
* **x** - kill (cut)
* **p** - put (paste)
* **/** - search forward
* **?** - search backward
* **>** - shift text right
* **<** - shift text left
* **=** - format text
* **t** - to character
* **T** - to character backwards
* **f** - onto character
* **F** - onto character backwards
* **s** - sentence
* **w** - word
* **p** - paragraph
* **b** - block
* **t** - tag
* **!** - run selection through external program and replace contents
* **'** - jump to mark
* **zo** - open fold (only using 'z' for folding)

These are not all VIM commands, nor are they even the ones that I use the most. They are familiar to me and may crossover into a REAPER hotkey context, so I've listed them here. You can look up VIM cheatsheets or browse [the Vim documentation](http://vimdoc.sourceforge.net/htmldoc/help.html) to learn more. (I actually learned a few things, not listed here, while double checking some content here!)

I don't use QWERTY or similar, I primarily type on a [colemak layout](https://en.wikipedia.org/wiki/Colemak) keyboard. I use the default VIM layout and not some funky Colemak layout. Staying with the defaults allows me to switch between my bespoke Emacs+Evil setup and using Vim or Vim-Mode on any other editor.

Many of these could be substituted with arrow keys, home/end, pgup/dn, etc...

VIM-like commands are marked with a ✓.

Where vim-like selection is inappropriate, I will instead use the first letter of the command-type or a letter that's a substantial part of the sound of the word.

* **v**elocity
* pi**t**ch

## Modifiers

These may not correlate directly to commands below. Simply an example of the concept.

* **Shift** - Selection modification
    * Select something
    * Deselect something
    * Link things
    * Lock/Unlock things
    * **ALTERNATIVE** - Shift may be used to imply key-shift in the context of a VIM-like command, i.e. `Shift-p` = `P`.
* **Control** Changing scope of things
    * Change something in its own context
    * Change the size of something
    * Increase or Decrease something
* **Option** Ignoring things or deleting things [^1]
    * Use a variation of a function
    * Access another layer of function
    * Bi-lateral distinction (left/right? in/out? up/down? previous/next?)
      * Default command is left/in/up/previous, adding option is right/out/down/next.
        * Alternatively, utilizing Left-Option and Right-Option to distinguish? REAPER doesn't do this though.
    * Ignore a dimension of freedom (enforce a constraint)
    * Ignore a constraint
* **Command** Creating or resetting (not deleting!) things
    * Duplicate something
    * Reset a value to default )
    * Move something
    * Create something
* **Combine Modifiers** Use multiple together
    * Combine functions

These mostly fall in line with how my preferred OS (macOS) works, and these are what I'll be using.

[^1]: I will also be using option instead of `command-...` when it is taken by a well-known OS shortcut, such as `command-s` for save.
  
# Hotkeys

## Scripts

* **F12** `Script: neutronic_Quick Adder 2.lua`

## Playhead/Edit cursor movement

* ✓ **h** `View: Move cursor left to grid division`
* ✓ **l** `View: Move cursor left to grid division`
* ✓ **a** `Move edit cursor to start of current measure`
* ✓ **e** `Move edit cursor forward one measure`
* ✓ **shift-a** `Transport: Go to start of project`
* ✓ **shift-e** `Transport: Go to end of project`
* ✓ **option-l** `Item navigation: Move cursor right to nearest item edge`
* ✓ **option-h** `Item navigation: Move cursor left to nearest item edge`
* **tab** `Item navigation: Move cursor to next transient in items`
* **shift-tab** `Item navigation: Move cursor to previous transient in items`

## Play State

* **command-r** `Transport: Toggle repeat`

## Grid

* **NUM1** `Grid: Set to 1`
* **NUM2** `Grid: Set to 1/2`
* **NUM4** `Grid: Set to 1/4`
* **NUM5** `Grid: Set to 1/6 (1/4 triplet)`
* **NUM8** `Grid: Set to 1/8`
* **NUM9** `Grid: Set to 1/12 (1/8 triplet)`
* **NUM6** `Grid: Set to 1/16`
* **NUM7** `Grid: Set to 1/24 (1/16 triplet)`
* **NUM3** `Grid: Set to 1/32`

## [CUA](https://en.wikipedia.org/wiki/IBM_Common_User_Access) (ironically)

* ✓ **x** `Edit: Cut`
* ✓ **y** `Edit: Copy items/tracks/envelope points (depending on focus) ignoring time selection`
* ✓ **p** `Edit: Paste`
* ✓ **shift-y** `Edit: Copy items/tracks/envelope points (depending on focus) within time selection, if any (smart copy)`
* ✓ **shift-x** `Edit: Cut items/tracks/envelope points (depending on focus) within time selection, if any (smart cut)`
* ✓ **command-p** `Item: Insert time on tracks and paste items`

## Change Focus

* **F1** `SWS/BR: Focus arrange`
* **F2** `SWS/BR: Focus tracks`
* **option-F1** `SWS/SN: Focus MIDI editor`
* **option-F2** `FocusTrackManager.lua`- [see script]({% post_url 2020-12-05-Reaper-Day-14 %}#search-focus-script)

## Project State

* ✓ **u** `Edit: Undo`
* ✓ **control-r** `Edit: Redo`

## Zoom

* **z** - `View: Zoom time selection`
* **command-z** `View: Restore previous zoom level`
* **control-z** `SWS: Horizontal zoom to selected items`
* **+** `View: Zoom in horizontal`
* **-** `View: Zoom out horizontal`
* **command-control-z** - Zoom to full project custom action:
  * `Track: Select all tracks`
  * `Item: Select all items in track`
  * `SWS: Vertical zoom to selected tracks`
  * `SWS: Horizontal zoom to selected items`
  * `Track: Unselect all tracks`
  * `Item: Unselect all items`
* **option-+** `View: Increase selected track heights`
* **option--** `View: Decrease selected track heights`
* **NONE** `View: Scroll horizontally (MIDI CC relative/mousewheel)`
* **shift-mousewheel** `View: Scroll horizontally reversed (MIDI CC relative/mousewheel)`

## FX

* **F11** `View: Show FX browser window`
* **control-F11** `Track: View FX chain for current/last touched track`
* **control-option-F11 `Track: View FX chain for master track`
* **Control-1** `Track: Open/close UI for FX #1 on last touched track`

## Metronome

* **q** `Options: Enable metronome`
* **option-q** `Options: Disable metronome`

## Selection

### Time Selection

* **i** `Time selection: Set start point`
* **o** `Time selection: Set end point`
* **shift-i** `Time selection: Set time selection to items`
* **option-i** `Time selection: Remove time selection`

### Markers

* **command-'** `Markers: Insert and/or edit marker at current position`
* **1** `Markers: Go to marker 01` 1-10
* ✓ **'** `Markers: Go to next marker/project end`
* ✓ **option-'** `Markers: Go to previous marker/project start`
* ✓ *command-'** `Markers: Renumber all markers in timeline order`
* ✓ **control-'** `Markers: Remove all markers from time selection`

### Item Selection

* ✓ **shift-v** `Item: Select all items in track`
* ✓ **control-shift-v** `Item: Select all items on selected tracks in current time selection`
* ✓ **v** - `Item navigation: Select and move to next item`
* ✓ **option-v** - `Item navigation: Select and move to previous item`
* **cmd-option-enter** - `Xenakios/SWS: Select items under edit cursor on selected tracks`

### Track Selection

* ✓ **option-j** `Track: Go to next track`
* ✓ **option-k** `Track: Go to previous track`
* ✓ **option-shift-j** `Xenakios/SWS: Select next tracks, keeping current selection`
* ✓ **option-shift-k** `Xenakios/SWS: Select previous tracks, keeping current selection`

## Item Editing

* **/** `Item: Split items at edit cursor (no change selection)`
* **unused** `Xenakios/SWS: Split items at transients`
  * Substitute **option-s** `Item: Dynamic split items...`
    * `Command-S` is used universally for "Save", so I'm deviating slightly here. 
* ✓ **[** `Item edit: Trim left edge of item to edit cursor` 
* ✓ **]** `Item edit: Trim right edge of item to edit cursor`
* ✓ **option-[** `Item edit: Move left edge of item to edit cursor` 
* ✓ **option-]** `Item edit: Move right edge of item to edit cursor`
* ✓ **k** `Item: Nudge items volume +1dB`
* ✓ **j** `Item: Nudge items volume -1dB`

### Moving Items

* **command-b** `SWS: Move selected item(s) left edge to edit cursor`
* **command-e** `SWS: Move selected item(s) right edge to edit cursor`
* **c** `Item edit: Move contents of item to edit cursor`
* **command-↓** `Item navigation: Select and move to item in next track`
* **command-↑** `Item navigation: Select and move to item in previous track`


# Crossfades and fades

* **command-f** `Item: Fade items in to cursor`
* **command-shift-f** `Item: Fade items out from cursor`
* **f** `Item: Cycle through fade-in shapes`
* **shift-f** `Item: Cycle through fade-out shapes`
* **option-f** `Item: Remove fade in`
* **option-shift-f** `Item: Remove fade out`
* **command-x** `Item: Crossfade any overlapping items`
* **shift-command-x** `Item: Cycle through crossfade shapes`

### Automation

* **shift-4** `Envelope: Insert 4 envelope points at time selection`
* **option-a** `Envelope: Add/edit envelope point value at cursor`
* **option-a** Delete automation in time selection custom action
  * `Envelope: Select points in time selection`
  * `Envelope: Delete all selected points in time selection`

### Pitch editing

* **w** `Item: Add stretch marker at cursor`

### Takes

* **t** `Take: Switch items to next take`
* **option-t** `Take: Switch items to previous take`
* **control-t** `Take: Delete active take from items`
* **command-t** `Take: Crop to active take in items`

## Track Management

* **r** `Track: Toggle record arm for selected tracks`
* **s** `Track: Toggle solo for selected tracks`
* **m** `Track: Toggle mute for selected tracks`

## Screensets

* **F3** `Screenset: Load window set #01`
* **F4** `Script: RecordScreenset.lua`
* **F5** `Screenset: Load window set #03`
* **F6** `Screenset: Load window set #04`
* **shift-F3** `Screenset: Save window set #01`
* **shift-F4** `Screenset: Save window set #02`
* **shift-F5** `Screenset: Save window set #03`
* **shift-F6** `Screenset: Save window set #04`

## Recording

* **\`** - `Transport: Record`
* **option-\`** - Undo recording custom action
  * `Transport: Stop (DELETE all recorded media)`
  * `Transport: Record`

# MIDI Context

I want to start this off by complaining. It's irritating that the MIDI Editor context has different names for actions that _do the exact same thing_, but in the MIDI editor.

Ugh.

## Playhead/Edit cursor movement

* ✓ **h** `Navigate: Move edit cursor right by grid`
* ✓ **l** `Navigate: Move edit cursor left by grid`
* ✓ **a** `Navigate: Move edit cursor to start of measure`
* ✓ **e** `Navigate: Move edit cursor to start of next measure`

## Grid

* **NUM1** `Grid: Set to 1`
* **NUM2** `Grid: Set to 1/2`
* **NUM4** `Grid: Set to 1/4`
* **NUM5** `Grid: Set to 1/6 (1/4 triplet)`
* **NUM8** `Grid: Set to 1/8`
* **NUM9** `Grid: Set to 1/12 (1/8 triplet)`
* **NUM6** `Grid: Set to 1/16`
* **NUM7** `Grid: Set to 1/24 (16 triplet)`
* **NUM3** `Grid: Set to 1/32`

## CUA

* **x** `Edit: Cut`
* **y** `Edit: Copy`
* **p** `Edit: Paste`

## Note Editing

### Note Creation

* **NUMenter** `Edit: Insert note at edit cursor`
* **a** `Edit: Insert note at nearest A`
* **control-b** `Edit: Insert note at nearest A#/Bb`
* **b** `Edit: Insert note at nearest B`
* **c** `Edit: Insert note at nearest C`
* **control-d** `Edit: Insert note at nearest C#/Db`
* **d** `Edit: Insert note at nearest D`
* **control-e** `Edit: Insert note at nearest D#/Eb`
* **e** `Edit: Insert note at nearest E`
* **f** `Edit: Insert note at nearest F`
* **option-g** `Edit: Insert note at nearest F#/Gb`
* **g** `Edit: Insert note at nearest G`
* **control-a** `Edit: Insert note at nearest G#/Ab`

### Note Movement

* ✓ **command-j** `Edit: Move notes down one semitone ignoring scale/key`
* ✓ **command-k** `Edit: Move notes up one semitone ignoring scale/key`
* ✓ **command-control-j** `Edit: Move notes down one octave`
* ✓ **command-control-k** `Edit: Move notes up one octave`

### Note Velocity

* ✓ **option-k** `Edit: Note velocity +01`
* ✓ **option-j** `Edit: Note velocity -01`
* ✓ **control-option-k** `Edit: Note velocity +10`
* ✓ **control-option-j** `Edit: Note velocity -10`

### Split

* **/** `Edit: Split notes`
* **d** `Item: Dynamic split items...`

### Length

* **[** `Edit: Trim left edge of note to edit cursor`
* **]** `Edit: Trim right edge of note to edit cursor`
* **option-2** `Edit: Set note length to 1/2`
  * Other divisions etc... follow grids + option
  
## Pitch Cursor

* ✓ **k** `Edit: Increase pitch cursor one semitone`
* ✓ **j** `Edit: Increase pitch cursor one octave`
* ✓ **ctrl-k** `Edit: Decrease pitch cursor one semitone`
* ✓ **ctrl-j** `Edit: Decrease pitch cursor one octave`

* **shift-a** `Edit: Move pitch sursor to nearest A`
* **shift-control-b** `Edit: Move pitch sursor to nearest A#/Bb`
* **shift-b** `Edit: Move pitch sursor to nearest B`
* **shift-c** `Edit: Move pitch sursor to nearest C`
* **shift-control-d** `Edit: Move pitch sursor to nearest C#/Db`
* **shift-d** `Edit: Move pitch sursor to nearest D`
* **shift-control-e** `Edit: Move pitch sursor to nearest D#/Eb`
* **shift-e** `Edit: Move pitch sursor to nearest E`
* **shift-f** `Edit: Move pitch sursor to nearest F`
* **shift-control-g** `Edit: Move pitch sursor to nearest F#/gb`
* **shift-g** `Edit: Move pitch sursor to nearest G`
* **shift-control-a** `Edit: Move pitch sursor to nearest G#/Ab`

## Selection

* ✓ **shift-v** `Edit: Select all notes at pitch cursor`
* ✓ **control-shift-v** `Edit: Select all notes in time selection`

## Zoom

* **+** `View: Zoom in horizontally`
* **-** `View: Zoom out horizontally`
* **h** `View: Zoom in vertically`
* **option-h** `View: Zoom out vertically`
* **control-z** `View: Zoom to selected notes/CC`

## Scroll

* ✓ **control-u** `View: Scroll view up`
* ✓ **control-d** `View: Scroll view down`
* ✓ **control-option-u** `View: Scroll view right`
* ✓ **control-option-d** `View: Scroll view left`

## Step Input

* **m** `Options: MIDI inputs as step input mode`

## Edit Cursor Movement

Use time division for hotkey, +1 for triplets.

* **1** `Grid: Set to 1`
* **2** `Grid: Set to 1/2`
* **4** `Grid: Set to 1/4`
* **5** `Grid: Set to 1/6 (1/4 triplet)`
* **8** `Grid: Set to 1/8`
* **9** `Grid: Set to 1/12 (1/8 triplet)`
* **6** `Grid: Set to 1/16`
* **7** `Grid: Set to 1/24 (1/16 triplet)`
* **3** `Grid: Set to 1/32`

## Focus

These are used so often that I'll be utilizing the Function keys, with `Command-F2` for track search (since `F2` is select track control panel).

`F7` for MIDI Editor selection since `F6` is MIDI editor (some relationship,)

* **F1** `SWS/BR: Focus arrange`
* **F2** `SWS/BR: Focus tracks`
* **F3** `SWS/SN: Focus MIDI editor`
* **F7** `FocusTrackManager.lua` - [see script](#search-focus-script)

# Temporal movement

I'm using [vim](https://www.vim.org) hotkeys.

* ✓ **h** `View: Move cursor left to grid division`
* ✓ **l** `View: Move cursor left to grid division`
* ✓ **a** `Move edit cursor to start of current measure`
* ✓ **command-l** `Item navigation: Move cursor right to nearest item edge`
* ✓ **command-h** `Item navigation: Move cursor left to nearest item edge`

These are deviations based on common OS hotkeys

* **tab** `Item navigation: Move cursor to next transient in items`
* **shift-tab** `Item navigation: Move cursor to previous transient in items`

# Track Selection

I'm using [vim](https://www.vim.org) hotkeys.

* ✓ **Shift-V** `SWS: Select children of selected folder track(s)`
* ✓ **option-j** `Track: Go to next track`
* ✓ **option-k** `Track: Go to previous track`
* ✓ **shift-option-j** `Xenakios/SWS: Select next tracks, keeping current selection`
* ✓ **shift-option-k** `Xenakios/SWS: Select previous tracks, keeping current selection`

# Time Selection

* **i** `Time selection: Set start point`
* **o** `Time selection: Set end point`
* **command-i** `Time selection: Set time selection to items`
* **command-escape** `Time selection: Remove time selection`

# Item Movement

I'm using [vim](https://www.vim.org)-like hotkeys.

* ✓ **option-h** `Item edit: Move left edge of item to edit cursor`
* ✓ **option-l** `Item edit: Move right edge of item to edit cursor`
* ✓ **command-option-h** `Item edit: Move items/envelope points left by grid size`
* ✓ **command-option-l** `Item edit: Move items/envelope points right by grid size`
* **???** `Item edit: Move contents of item to edit cursor`
* **command-↓** `Item navigation: Select and move to item in next track`
* **command-↑** `Item navigation: Select and move to item in previous track`

# Item Editing

I'm using [vim](https://www.vim.org)-like hotkeys, plus `s` for "split" and `d` for "dynamic split"

* **s** `Item: Split items at edit cursor (no change selection)`
* **unused** `Xenakios/SWS: Split items at transients`
  * Substitute **option-s** `Item: Dynamic split items...`
* ✓ **b** `Item edit: Move left edge of item to edit cursor` 
* ✓ **e** `Item edit: Move right edge of item to edit cursor`
* ✓ **k** `Item: Nudge items volume +1dB`
* ✓ **j** `Item: Nudge items volume -1dB`

# Crossfades and fades

* **f** `Item: Fade items in to cursor`
* **command-f** `Item: Fade items out to cursor`
* **option-f** `Item: Cycle through fade-in shapes`
* **command-option-f** `Item: Cycle through fade-out shapes`
* **control-f** `Item: Remove fade in`
* **control-command-f** `Item: Remove fade out`
* **x** `Item: Crossfade any overlapping items`
* **option-x** `Item: Cycle through crossfade shapes`
  
# Automation

* **option-a** `Envelope: Insert 4 envelope points at time selection`
* **a** `Envelope: Add/edit envelope point value at cursor`
* **control-a** Delete automation in time selection.
  * `Envelope: Select points in time selection` then
  * `Envelope: Delete all selected points`

# Pitch and Stretching

* **s** `Item: Add stretch marker at cursor`

# Markers (not regions!)

These are **NUMBER PAD** keys. I have a secondary number pad to the left of my main keyboard, so it is easy for me to hit modifier+numberpad with my left hand.

* **'** `Markers: Add/move marker 1 to play/edit cursor`
* **NUM1** `Markers: Go to marker 01` 1-10
* **command-NUM1** `Markers: Go to marker 01` 11-20
* **command-'** `Markers: Go to next marker/project end`
* **command-option-'** `Markers: Go to previous marker/project start`
* **control-option-command-'** `Markers: Renumber all markers in timeline order`
* **control-'** `Markers: Remove all markers from time selection`

# Other

* **l** `Item properties: Lock`
* **u** `Item properties: Unlock`
* **option-l** `Track: Lock track controls`
* **option-u** `Track: Unlock track controls`

# Mouse Modifiers

Located in `Preferences->Mouse Modifiers`.

## Mouse: Media item - left click

* Clicking something to select it is a core concept of cursor usage, but I use `Control` for changing size/time.
  * **Control** - Select item and move edit cursor ignoring snap
  * **Shift+Cmd** - None
  
## Mouse: Media item - left drag

* I use Control for ignoring snap.
  * **Ctrl** - Move item ignoring snap and time selection
* I use Command for creating new things, and control for ignoring snap
  * **Cmd** - Copy item
  * **Cmd+Ctrl** - Copy item, ignoring snap
* I use Shift for ignoring item boundaries and Control for ignoring snap
  * **Shift** - Move item contents
  * **Shift+Ctrl** - Move item contents ignoring snap
  
## Mouse: Media item edge - left drag

* I use Control for ignoring snap.
  * **Ctrl** - Move edge ignoring snap (relative edge edit)
  * **Shift** - None
* I use Control for ignoring snap, and option for ignoring grouping.
  * **Opt** - Move edge ignoring snap and selection grouping
  * **Opt+Control** - Move edge ignoring snap and selection grouping
* I use Control for ignoring snap, option for ignoring groups, and I think command is the most logical for stretching an item.
  * **Cmd** - Stretch item
  * **Cmd+Ctrl** - Stretch item Ignoring snap
  * **Cmd+Opt** - Stretch item ignoring selection-grouping
  * **Cmd+Opt+Ctrl** - Stretch item ignoring snap and selection-grouping
  
## Mouse: Media item stretch marker - left drag

* I use Control for ignoring snap.
  * **Ctrl** - Move stretch marker ignoring snap
* I use Control for ignoring snap, and option for ignoring grouping.
  * **Opt** - Move stretch marker ignoring selection/grouping
  * **Opt+Ctrl** - Move stretch marker ignoring snap and selection/grouping
* I use Control for ignoring snap, option for ignoring groups, and I think command is the most logical for moving pairs
  * **Cmd** - Move stretch marker pair
  * **Cmd+Ctrl** - Move stretch marker pair Ignoring snap
  * **Cmd+Opt** - Move stretch marker pair ignoring selection-grouping
  * **Cmd+Opt+Ctrl** - Move stretch marker pair ignoring snap and selection-grouping
* I was unaware of the "Move contents under stretch marker" capability until I read this, and wow! How useful is that. It moves the contents between any adjacent stretch markers, allowing you to more precisely line up your stretch marker. Since this is acting on an implicit selection (and it's my only key left!), I'll use shift for this. As usual, control for ignoring snap, option for ignoring selection/groups.
  * **Shift** - Move contents under stretch marker
  * **Shift+Ctrl** - None, this command is always ignoring snap.
  * **Shift+Opt** - Move contents under stretch marker ignoring selection-grouping
  * **Shift+Cmd** - Move contents under stretch marker pair
  
## Mouse: Envelope point - left drag

* I use Control for ignoring snap and fine movement.
  * **Default action** - Move envelope point
  * **Ctrl** - Move Envelope point ignoring snap
  * **Shift** - Move envelope point on one axis only
  * **Shift+Ctrl** - Move envelope point on one axis only ignoring snap
* Command for drawing envelope points.
  * **Cmd** Freehand draw envelope ignoring snap

* Everything else empty.

## Mouse: Envelope point - double click

* I use Option for deleting things.
  * **Ctrl** - Action: `SWS/BR: Delete envelope point at mouse cursor` - Doesn't work??
* Opening the editor is likely the most common use.
  * **Default action** - Open envelope point editor
* Command to reset value.
  * **Cmd** - Reset point to default value
  
## Mouse: Envelope segment - left drag

* Move envelope segment by default.
  * **Default action** - Move envelope segment
* I use Control for fine movement.
  * **Ctrl** - Move envelope segment (fine)
* Option for ignoring things.
  * **Opt** - Move envelope segment ignoring time selection.
* Command for creating values.
  * **Cmd** - Insert envelope point
* Command for creating values, control for fine movement.
  * **Cmd+Ctrl** - Insert envelope point ignoring snap

* Everything else empty.

## Mouse: Envelope segment - double click

* Command to reset.
  * **Cmd** - Reset envelope segment curvature
  
* Everything else empty.

## Mouse: Automation item - left drag

* I use Control for ignoring snap
  * **Ctrl** - Move automation item ignoring snap
  * **Cmd+Ctrl** - Copy automation item ignoring snap
* Shift for ignoring region boundaries (implicit selection)
  * **Shift** - Move automation item contents
* I almost always want to pool items if I'm automation items. For non-pooling, I use normal copy/paste shortcuts. Command for cloning, control for ignoring snap.
  * **Cmd** - Copy and pool automation item
  * **Cmd+Ctrl** - Copy and pool automation item ignoring snap

* Everything else empty.

## Mouse: Track - left click

* All I want left click in an empty track selection to do is to deselect items and move cursor. I use hotkeys for time selection stuff. Control to ignore snap.
  * **Default action** - Deselect all items and move edit cursor
  * **Ctrl** - Deselect all items and move edit cursor ignoring snap.

* Everything else empty.

## Mouse: Track - left drag

* I rather that left-click selects things like in basically every other product (REAPER doesn't do th is by default!?!?)! Control for ignoring snap, shift for adding to selection.
  * **Default action** - Marquee select items
  * **Ctrl** - Marquee select items ignoring snap
  * **Shift** - Marquee add to item selection
* Command for creating new things, and I always prefer pooling items when using the mouse. Keyboard for non-pooled copy/paste. Control for ignoring snap.
  * **Cmd** - Draw a copy of the selected media item, pooling MIDI source data
  * **Cmd+Ctrl** - Draw a copy of the selected media item, pooling MIDI source data
  
* Everything else empty.

## Mouse: Ruler - left click

* Control for ignoring snap.
  * **Ctrl** - Move edit cursor ignoring snap.
* Option for deleting things.
  * **Opt** - Clear loop points
* Shift for changing selections, control for ignoring snap.
  * **Shift** - Extend Loop points
  * **Shift+Ctrl** - Extend Loop points ignoring snap

* Everything else empty.

## Mouse: Ruler - left click

* I link time selection and loop, so I don't need separate control. Control for ignoring snap.
  * **Default action** - Edit loop point
  * **Ctrl** - Edit loop point ignoring snap
* Shift for changing selections, control for ignoring snap.
  * **Shift** - Move loop points
  * **Shift+Ctrl** - Move loop points ignoring snap

* Everything else empty.

## Mouse: Ruler - left click

* Command for creating things, so I use this for assigning (implicitly new) loop points to the region. I will almost always use a hotkey for this.
  * **Default action** - None
  * **Cmd** - Set loop points to region
* Shift for time selections.
  * **Shift** - Set time selection to region

* Everything else empty.

## Mouse: Project region - left drag

* Move region without copying by default, control for ignoring snap.
  * **Default action** - Move project region but not contents
  * **Ctrl** - Move project region but not contents ignoring snap
* Shift for moving contents, control for ignoring snap.
  * **Shift** - Move contents of project region
  * **Shift+Ctrl** - Move contents of project region ignoring snap
* Command for creating new things, control for ignoring snap.
  * **Cmd** - Copy contents of project region
  * **Cmd+Ctrl** - Copy contents of project region ignoring snap
  
I don't see a reason to copy a region without its contents.

* Everything else empty.

## Mouse: Project marker/region edge - left drag

* Control for ignoring snap.
  * **Default action** - Move project marker/region edge
  * **Ctrl** - Move project marker/region edge ignoring snap

* Everything else empty.

## Mouse: Project tempo-time signature marker

* Control to ignore snap.
  * **Default action** - Move project tempo/time signature marker
  * **Ctrl** - Move project tempo/time signature marker ignoring snap
* Command for changing values.
  * **Cmd** - Move project tempo/time signature marker, adjusting previous tempo

* Everything else empty.

## Mouse: Arrange View - right drag

* I rarely use mouse for creating time selections, but use right-drag as a backup. Control to ignore snap.
  * **Default Action** - Marquee select time
  * **Ctrl** - Marque select time ignoring snap
* The thing I use the mouse the most for is drawing a selection to zoom. This is REAPER's marquee zoom. I leave right-drag as select, even though I rarely use it. Since I'm moving the contents of the arranger visually, I use shift.
  * **Shift** - Marquee zoom

* Everything else empty.

## Mouse: Arrange view middle click

* Everything empty.

## Mouse: Arrange view middle drag

* I use the middle-click "Pan Canvas" type action in graphics programs, so I copy this to REAPER.
  * **Default action** - Hand scroll

* Everything else empty.

## Mouse: Edit cursor handle

* Everything empty.

# User Scripts

## Search Focus Script

``` C
function GetTrackManager()
    local _, list = reaper.JS_Window_ListFind('Track Manager', true)
    for adr in "[^,]+" do
        local hwnd = reaper.JS_Window_HandleFromAddress(adr)
        -- check if window also has a child (ID of 'show all' button)
        if reaper.JS_Window_FindChildByID(hwnd, 0x422) then return hwnd end 
    end
end
  
local tm = GetTrackManager()
    if not tm then
    reaper.Main_OnCommand(40906, 0) -- View: Show track manager window
    tm = GetTrackManager()
end

if tm then
    local filter = reaper.JS_Window_FindChildByID(tm, 0x3EF)
    if filter then reaper.JS_Window_SetFocus(filter) end
end
```

REAPER has no default way to focus the Track Manager (track search). So here's a script [based on one from the forums](https://forum.cockos.com/showpost.php?p=2311079&postcount=13) that will find and focus the track manager's filter box.

That means installing [yet another script](https://forum.cockos.com/showthread.php?t=212174) (library). I installed this using the awesome [Reapack](https://reapack.com)

## Record Screenset

I need to close the MIDI editor, but the "Close Window" command works on what's focused. How can I send that command to _just_ the MIDI Editor window?

First thing is to go to `help->ReaScript documentation` and search around until I found "MIDIEditor_LastFocused_OnCommand"[^bird]. That function allows me to send a command to the last focused MIDI Editor, and since I only have one...

* Open the Actions List (`Shift-/`).
* Search for "screenset"
* Right click on "Screenset: Load window set #02"
  * Select "Copy selection action command ID"
  * Save that somewhere.
* Set the "section" in the upper right to "MIDI"
* Search for "close MIDI editor"
* Right click on "File: Close window"
  * Select "Copy selectiond action command ID"
  * Save that somewhere.
* Click "New Action"
* Click "New ReaScript"
* Give it a name, like "LoadRecordScreenset"

In the ReaScript we want to switch to Screenset #2 and then close the MIDI editor. That looks like this:

~~~ lua
reaper.Main_OnCommand(40455, 0)
reaper.MIDIEditor_LastFocused_OnCommand(2, false)
~~~

`reaper.` precedes the functions so that REAPER understands we're calling its functions and not something of our own making. The `0` in the first commands says that we're sending no other information, and `false` tells it that we're not a "listviewcommand".

* Hit `ctrl-s` (Windows/Linux) or `cmd-s` (macOS).
* Close the script editor.
* Open the Actions List (`Shift-/`).
* Find your "LoadRecordScreenset" or whatever you called it.
* Assign it the hotkey that your screenset was previously using, `F4` for me.

Now when I open my "Record" screenset, the MIDI Editor window will always close.

Fin. [^almost]

[^bird]: In reality, someone on my [Discord chat server](https://discord.gg/34cFzVn) reminded me of this function. Thank you! Go there and ping @BirdBird. Do it a lot, he loves when you ping.
[^almost]: My Mixer and Editing screensets have the same issue, but luckily I'm using the bottom docker there, so the MIDI editor tab simply ends up hidden as an inactive tab.

# Installed Scripts via [ReaPack](https://reapack.com)

* [Quick Adder 2](https://forum.cockos.com/showthread.php?t=232928)

# Visual Changes

## Theme Adjuster

Theme Adjuster is pulled up via `Action List->Options: Show theme adjuster`.

### Mixer Control Panel

These are my settings for Layout A.

Notably:

* I want a "Console-like" view.
  * **NONE** `Folder Indent`
  * **NONE** `Add border`
* I use the FX sidebare for my currently selected track for TCP Mixing. This gives me a large channel strip to use with all FX and Sends.
  * **ON** `Extend with Sidebar` for everything.
* **OFF** `Do Meter Expansion` for everything.
* I would turn this off except that it removes mixer level labels too!
  * **ON** `Element Labels` for everything.
* Uh, no.
  * **OFF** `Narrow Form` for everything.
  
I would use narrow form on "not-selected" and "extend with sidebar" on selected, but selecting a track in the Mixer is _frustrating_. There's a number of places you can click on a track that don't select the track (suck as the meters or a control!)

### TCP Adjustments

These are my settings for Layout C.

* I like to see clear folder indentation in my TCP because this is where I do most organization/routing
  * **1** `Folder Indent`
  * This setting keeps all meters the same size. "Aligned" changes the meter sizes for child folders. Meter size is important for making judgements at a glance.
    * **Folder Indent** `Align Controls`

* The following settings simply match my visual preferences
  * **110** `Name Size`
  * **KNOB** `Volume Size`
  * **60** `Input Size`
  * **160** `Meter Size`
  * **Meter Location** `Left`
  * **OFF `Sends List`
* I just want to see all my controls.
  * `If track not Armed`
    * **CLEAR** ALL.
  * `If track not selected`
    * **CLEAR** ALL.
  * `If mixer is visible`
    * **CLEAR** ALL.

