---
layout: ['post', 'reader']
title: Digital Performer's Chunks Will Blow Your Mind
comments: true
date: 2019-11-23_10:42:01 
categories: music
tags: ['Digital Performer', 'Tutorial', 'DAW'] 
image: /assets/DPChunks/Thumbnails/Chunks.png
description: An exploration and tutorial about Digital Performer's Chunks feature
---

{::nomarkdown}
<a href="/assets/DPChunks/Chunks.png">
<img src="/assets/DPChunks/Thumbnails/Chunks.png" alt="Chunks">
</a>
<div class="image-caption">Chunks (Click for larger image)</div>
{:/nomarkdown}

[Digital Performer's](https://motu.com/products/software/dp/) chunks feature is a unique bright gleaming light in the world of copycat DAW workflows.

If you're familiar with [FL Studio's song workflow]({% post_url 2018-07-15-30-days-with-FLStudio-20-Workflow %}) , [REAPER's subprojects](post_url https://www.soundonsound.com/techniques/reaper-subprojects) or [Ableton]({% post_url 2019-05-01-Live-with-Live %})/Bitwig's Session view workflow then you're _almost_ there.

Come with me as I show you what's there, and you can decide for yourself how awesome it is.

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# What is a Chunk

{::nomarkdown}
<a href="/assets/DPChunks/Chunks.png">
<img src="/assets/DPChunks/Thumbnails/Chunks.png" alt="Chunks">
</a>
<div class="image-caption">Chunks (Click for larger image)</div>
{:/nomarkdown}

A chunk in Digital Performer is one of 3 things:

* A Sequence
* A V-Rack
* A Song

A project contains any number of chunks. All 3 of these things can interact with each other at some level, so let's break them down into sections.

# Sequence

{::nomarkdown}
<img src="/assets/DPChunks/Sequence.png" alt="A simple sequence of a band recording">
<div class="image-caption">A simple sequence of a band recording</div>
{:/nomarkdown}

A sequence is what you might think of as a 'project' in another DAW. It consists of your:

* Tracks
    * Routing to/from tracks
* MIDI Data on tracks
* Sound files
* Soundbites (regions/items/whatever)
    * And their positions in time

Basically everything that you'd make music with. The idea of a project in Logic, Cubase, Pro Tools, Samplitude etc... correlates to a sequence in Digital Performer.

A project in DP can contain a vast number of sequences. You can copy data to/from sequences within a project easily (or extract to another sequence), or copy sequences to/from other projects easily.

This shouldn't be particularly exciting. DP lets you make music, big whoop...

# V-Rack™

{::nomarkdown}
<img src="/assets/DPChunks/V-Racks.png" alt="V-Racks">
<div class="image-caption">V-Racks</div>
{:/nomarkdown}

Now it's getting exciting. A V-Rack allows you to have tracks that exist _outside_ of a sequence, thereby allowing multiple sequences to utilize those V-Rack tracks.

There are 3 types of V-Racks:

* Aux Track
* Instrument Track
* Master Fader

Perhaps you want to keep all of your songs in the same project, but have one master fader that applies to all of them? Maybe you have shared instruments between projects and want to keep the same sound/settings when youswitch to another project? Maybe have the same reverb or effects available?

Maybe you want to work on your track in parts. Drums in one sequence, Horns in another sequence, Synths in yet another, but you want each of these sequences to use the same master fader, share some effects paths and possible access the same instruments.

V-Racks utilize DP's audio bussing system. You send audio to a bus, not to a track. Tracks can use busses as inputs. The V-Rack utilizes this system the same as anything else. The layer of indirection provided by busses allows you to quickly choose what a V-Rack aux takes audio from, or to easily choose what tracks are sending to. 

But then how do you put those sequences together?

# Songs

{::nomarkdown}
<img src="/assets/DPChunks/SongAutoSize.png" alt="Song Auto Sizing">
<div class="image-caption">Song Auto Sizing</div>
{:/nomarkdown}

Songs are the solution to all of your woes.

Songs allow you to order sequences _and other songs_ for playback. They are sequencable despite varying time signatures and the song window has its own master conductor track for tempo changes.

It's a sequencer for your sequences, and a sequencer for other songs.

If that were all, then it'd be incredibly useful, but there's some rabbits in the hat:

* Songs can be merged into a sequence - You can create a sequence of sequences/songs, then turn that into a sequence itself.
* The timeline is column based, _not time based_ - The timeline automatically changes its resolution based on what's already in the song. If you're working with a bunch of 1-bar parts then you don't need to mess with your zoom resolution anymore than if you're working with 3 minute sequences. If you need to 'insert a column' for spacing then that's done accurately and precisely with a single command. The column based setup also allows for seamless mixing of time signatures.
* Sequences can be record-enabled from the song window - A sequence can be set as active/record-enabled directly from the song window. This allows you to quickly record parts from the song window without switching contexts. Massive workflow enhancement for orchestral-type production. I use it for doing dialogue/sfx and it's amazing for that as well.
* Markers - The song window has its own markers. That's already a workflow enhancer, but if you want to extract the markers from the chunks in your song then you can "Merge Markers" to extract all of the song's chunk's markers to the song itself.
* `Merge tracks with identical names` - I'll leave this to your imagination. Either you won't care at all, or this will make you leap out of your chair with excitement.

Another interesting aspect of Songs is that, as you can see in the image above, it's autosizing. A sequence/song is displayed as a block. If you insert a block of a smaller length, then any longer blocks are sized to display proportionally longer.

The autosizing can be both a huge pain and a blessing. It does make it somewhat difficult to understand what's happening in a piece temporally, but it also allows DP to accurately display things with wildly different temporal characteristics.

## Auto/Manual End

{::nomarkdown}
<img src="/assets/DPChunks/AutoManual.png" alt="Auto Manual">
<div class="image-caption">Auto Manual</div>
{:/nomarkdown}

Since the length of a sequence is so important in the song window, you can allow DP to set the end time automatically. It will do this based on the last event in the chunk.

Setting start time though.... `Set Chunk Start Time` _should_ set the start time of the chunk, which it does in terms of timecode/transport. However, it does not change where the chunk starts in the sequence.

So if you have a chunk that you want to start playback at measure 2, there does not appear to be a way to do this.

# Triggering Chunks

{::nomarkdown}
<img src="/assets/DPChunks/Trigger.png" alt="Triggering ~~people~~ chunks">
<div class="image-caption">Triggering ~~people~~ chunks</div>
{:/nomarkdown}

The ability to triggers chunks is one of the reasons why DP is huge in the [backline](https://en.wikipedia.org/wiki/Backline_(stage)) world of live music.

There's 5 basic ways to trigger chunks:

* MIDI song select - [MIDI Song Select](https://www.midi.org/articles-old/about-midi-part-3-midi-messages) can be assigned to a chunk and used to trigger a chunk via MIDI input.
* Chain - Chunks can be queued to play in order. Does not yield seamless transitions between chunks.
* Cue - Prepares the next chunk for playback. Does not yield seamless transitions between chunks.
* Play - Start playback directly of a chunk.
* Prev/Next - Start previous or next chunk for playback.

These facilities allow for having backing tracks/sections to be easily setup for live use. Combined with v-racks, this is a powerful setup for live backing.

# Chunk Tricks

{::nomarkdown}
<img src="/assets/DPChunks/Tricks.png" alt="Tricks of the Chunk">
<div class="image-caption">Some Tricks of the Chunk</div>
{:/nomarkdown}

Digital Performer provides a few cool features for working with chunks:

* Copy Selection to New Sequence - Takes the selection and moves it to a new sequence. Great for splitting out parts to their own sequence.
* Move Selected Tracks to V-Rack - Auxes, Instruments and Master Faders can be pulled from a sequence and put in their own V-Rack so they can be accessed from any chunk.
* All chunks have notes/comments
* V-Racks have their own mixer(s)
* Auxes always active - All chunk's auxes are always active. Interesting feature that you can utilize in creative ways.
* Merge Markers - Extra markers from chunks in a song to the song's marker list.
* Copy all tracks - Creates a new sequence consisting of all of the tracks of the selected chunks in the song window.
* Record MIDI into Song - A song can have MIDI information recorded into it. This is intended for show control and non-musical purposes.
* Conductor Track - Songs can have their own tempo maps, which are independent of the contained chunk's tempo.
    * Copy Conductor Tracks - Tempo information can be extracted from a chunk to the song's conductor track (tempo map).
* [Clippings!]({% post_url 2016-12-14-Cool-Features-in-Digital-Performer...-Part-5 %}#clippings) - DP has a powerful per-project and global clipping window that allows you to store a wide variety of things. Tracks, soundbites, projects, chunks, images, midi, audio... whatever. Clippings windows make moving things between chunks fairly easy. It also means you have an always-available place to drop things for later organization as you're working.

# Warts

* Song window has no playhead - Having a playhead would be incredibly confusing due to the auto-sizing, but it's not there regardless. You must use the transport to set time and see time.
* Dragging chunks in song window has poor visual feedback.
* You can record into chunks, but only MIDI - This means that if you want to record some audio while listening to the entire song, then you're in trouble. The only solution I know of is to `Merge chunks to sequence`, record in that sequence, then copy your newly recorded audio to the appropriate sequuence.
* Song timeline autosizing - The song window's timeline auto sizing is rather uncomfortable at first. It becomes tolerable after a while, and I can see it as being necessary, but it's pretty weird to start out.
* Recording - Trying to compose music using chunks is largely a frustration unless you're ok working on parts in isolation. This is easy to get around by working in a master chunk and copying things to individual chunks as you go.

# Conclusion

DP's Chunks system is pretty unique. There's some other similar concepts in popular modern products, _nearly_ all of which post-date DP's chunks. There's of course some prior-art in any of the variety of non-linear sequences out there. DP offers the modular-like sequence workflow with most modern amenities that you'd expect from a DAW in 2019.

It's interesting if you work with recorded music, fun of you're into electronic music, de-cluttering if you do orchestral and indispensible if you do live work.

# Meta

This post took 12 hours to research, write and edit.






