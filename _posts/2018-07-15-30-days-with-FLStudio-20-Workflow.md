---
layout: ['post', 'reader']
title: "30 days with FLStudio 20 - Part 9: Workflow"
comments: true
date:   2018-07-15_09:37:27 
categories: music
tags: ['FLStudio', 'DAW']
image: /assets/FLStudio/PatternFlow.png
description: Discussing the FLStudio Workflow
series: FLStudio
---

{::nomarkdown}
<img src="/assets/FLStudio/PatternFlow.png" alt="Pattern Flow">
<div class="image-caption">Pattern Flow</div>
{:/nomarkdown}

This is something I rarely discuss, but since FLStudio is so different from other DAWs I want to talk about the topic of workflow.

Make sure you've read the other 8 posts in this so far, since that information will be necessary to fully understand this discussion.

Prepare for a wall of text, since there's no need for many images here!

**Other posts in this series**:

{% assign fls = site.posts | where: "series", "FLStudio" | sort: 'date' %}
<ul>
{% for my_page in fls %} 
    {% if page.url != my_page.url  %}
        <li><a class="page-link" href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title | split: '-' | last }}</a></li>
    {% endif %}
{% endfor %}
</ul>

<!--more-->



# Contents
{:.no_toc}
* TOC
{:toc}

# Step Sequencer

{::nomarkdown}
<img src="/assets/FLStudio/StepSequencer.png" alt="Step Sequencer">
<div class="image-caption">Step Sequencer</div>
{:/nomarkdown}

This is where a lot of people start. It's a fairly simple step sequencer that's built in to the channel rack. The image above is showing the "Graph Editor" which gives you a drop down of various properties of each step (note, velocity, pan etc...)

What you see here is your current pattern, unfortunately it also shows you _every single channel in your project_! So **every** single MIDI, Audio and Automation Clip is going to be here. Each pattern has access to every single channel, so you could feasibly just add all your MIDI/Audio/Automation here and write the song in one long pattern if you wanted.

Very few people work that way though...

# Playlist

The normal workflow is to add some asset to the project (Audio/MIDI/Automation) then open the editor for that type of asset and create what you want.

That part is held in a pattern. Even though the pattern has _all_ channels available, only one channel would generally be programmed.

Now you add that pattern to your playlist. It plays only what you programmed in that pattern.

So the idea here is that you treat each pattern like its own channel by only using that one channel in the pattern.

This can get _quite_ confusing... So let me try and clarify a bit.

# Playlist Workflow

{::nomarkdown}
<a href="/assets/FLStudio/PatternFlow.png">
<img src="/assets/FLStudio/Thumbnails/PatternFlow.png" alt="Patterns">
</a>
<div class="image-caption">Patterns</div>
{:/nomarkdown}

The image above is what you have. Each pattern contains _every_ channel. You choose what happens in each pattern. You can do things to every channel if you want, or have each pattern correspond to a performance of a single channel.

In the example above I have a single MIDI clip that is 'doing things' in each pattern. Then I've placed them in the 'Playlist' wherever I want.

Remember, each channel is assigned to the mixer _directly_. The playlist doesn't affect what mixer track things go to.

In the [Audio post]({% post_url 2018-06-20-30-days-with-FLStudio-20-Audio %}) I covered how audio clips are treated specially. They can be just used 'normally' in the playlist, even though they still need to be assigned to the Mixer channel you want. Automation Clips are similar.

Automation clips are particularly special because they allow you to encapsulate automation and use it wherever you want. There's no 'envelope' that you need to fool with trying to get setup right.

# The Great Confusion

If you haven't thought about it by now, let me clue you in on something: This gets really confusing.

It's possible to have "Clips" that trigger dozens of channels, or perhaps only the channel you want plus something else accidentally. That clip can now be on playlist track one, but it's actually routed to Mixer Track 7... and for some reason Mixer Track 19 is making noise too?!

There _are_ some functions to make this a bit easier. You can automatically assign channels to mixer tracks. You can create 'Channel Groups' to only see the channels a pattern should be using. You can colour things fairly nicely.

Despite all of the functions FLStudio has, the problem remains that there's 4 potential visual disconnects. Channel->Clip, Playlist->Mixer, Clip->Mixer and Channel->Playlist. You can never know what one of these things is connect to without thorough labeling or hitting play, then doing your best detective work.

You can also imagine how this eats up channels and mixer tracks. It doesn't appear to be uncommon in use (mine, demo projects or videos I've watched online) to have 50+ channels that you need to navigate, label, colour and recall. That isn't much in a 'normal' DAW, but you also need to mentally track where that clip links to the mixer, and where it is in the playlist (it can be anywhere, at any time!)

It doesn't help that the search function is rather dumb. No fuzzy searching or smart searching. You can't type 'dlyv' to find 'delay vocals'. And if you type 'delay' you'll get every track and effect with 'delay'. That'd be great to have improved, as the current methods of navigating the project rely _heavily_ on your own ability to group, label and colour things. This organization needs to happen in 3 different places too.

Now throw in the new ability to have multiple playlist arrangements, which need not have any similarity to each other. One arrangement may have the bass on track 5, another on track 10. They both go to the same mixer channel though!

In a 'normal' DAW, I can mentally map out what's happening in a 250+ track project in about 15-20 minutes and navigate it confidently. In FLStudio it takes me just as long to figure out a 50 track project, and even then I frequently forget what's going on when things get 'creative'.

Then again... you only have 125 mixer tracks in FLStudio and 500 Channels. For larger projects you have no choice to 'get creative' with it.

We also can't forget [the frustration of working with audio]({% post_url 2018-06-20-30-days-with-FLStudio-20-Audio %}). I suspect very few FLStudio users deal with that though.

# The Great Freedom

Are you scared yet? You should be, because freedom of choice awaits you, and that is a scary situation.

In other 'normal' DAWs, if you have a vocal linethat you want to momentarily have a neat effect, you require at least 2 tracks. One for the normal vox, and one for the effected vox.

FLStudio doesn't trap you in to the '15 tracks for vocals' conundrum that happens in nearly every other DAW. You can assign every vocal take to the same mixer track for easy mixing (or maybe 2-3). Then you can organize the vocal clips in the play list so they visually make sense with the music. No need for the playlist to follow the mixer or for the clips to go to different mixer channels.

That 125 mixer channel limit is looking a bit less awful isn't it?

When you need to visually reorganize your clips so your automation clips are next to the clip they are affecting, you can do that. The playlist track doesn't correspond to anything, so you are free to use it for visually organizing automation.

What if you have a massive project and down on Playlist track 80 there's a drum break, but you want to have a vocal track pop, normally on playlist track 1, in for a second? In other DAWs, you'd need to create a second track, but in FL you can just put your vox on Playlist Track 81 so they can be seen together. The vocals still go to their normal mixer track.

There's a great deal of freedom to handle issues that would require silly workarounds in other DAWs.

# The Great Frustration

Just go ahead and browse some videos on Youtube, or head to a FLStudio forum/chat. Look at people's projects.

They are _rarely_ organized. Watching videos often have moments of "Uh, where is, uh...". Creating songs is a balance between having to label/colour/group 3 different sections of the project for a single part, or doing nothing and hoping you don't have to find it later.

Removing plugins requires clicking a small icon then navigating a large menu a layer deep to find `(delete)`. No post-fx slots though. Similar for adding inputs/outputs.

Creating mixer groups is a weird modifier dance and a menu option.

Routing Channels often means some fooling in the mixer to find the mixer track (you want to keep it organized, remember?). There is a "Assign to Free Mixer Track", but that assumes you want your tracks ordered in the way you add them, which is rarely the case. Do you really want your mixer to be "Drums, Bass, Lead, Bass, Vox, Drums, Vox, Lead, Effects, Automation, Automation, Lead, Drums" because that's the order you came up with ideas? I'd hope you want it to be more organized than that!

Let's not forget as well [what a pain it is to deal with events]({% post_url 2018-06-27-30-days-with-FLStudio-20-Piano-Roll-Advanced %}#midi-cc). FLStudio really wants you to use automation events, but there's many times where they simply aren't appropriate and you're punished for wanting that. (Please improve the MIDI CC workflow IL!) It's difficult to access and the editor itself is many generations behind what you can do with the automation clip editing.

There's no way to search your channel list, mixer or playlist. You _can_ find patterns, but you're left to your own devices to trace that out.

Going through the demo projects, and various projects I found online, I can see these things in action. I've rarely found people taking advantage of what FLStudio's workflow offers. Most people treat it like a 'normal' style DAW, except with 3x the work to get things setup.

It seems like FL really needs some way to create a channel, pattern, assign to a _specific_ mixer track and insert to the playlist... all this with matching colours and names. Despite the freedom you get otherwise, it'd greatly improve the organization and workflow.

Let's not forget the 'Make Unique' hell. If you want to have audio clips that have different edits, you have to `Make Unique` and you end up with yet another channel. The concept of just editing it on the same track doesn't exist. If you edit something in Newtone or Edison then you also end up with a duplicate channel which you may or may not want.

# Conclusion

It's not as bad as I make it sound, but it does become frustrating at times. As projects grow, the complexity increases much faster than with other DAW products. You pay for that with flexibility, but I'm not sure if it's an even trade.

Given how many projects I've seen with zero colouring, mis-matching playlist/channel/mixer naming and totally non-linear layouts... I'd argue that the tradeoff isn't there.

However I _do_ enjoy using it sometimes. It allows you to solve problems that plague other DAWs where you end up with a 300 track project that's really only 10 things playing at a given time. Lots of dupes for effects, small effects that really should be on the same track, and organization of sections.

The concepts of media(channel), position(playlist) and output(track) are so intertwined that I feel there's more benefit from combining them in to a single concept like 'normal' DAWs than separating them. There's tradeoffs either way, but the tradeoffs in FL seem to exceed the benefits.

I don't think it's fair to categorize the general workflow as 'bad', since it's clearly produced a number of great tracks and helps support the livelihoods of many, many musicians. I do think it's important to recognize the tradeoffs, and I hope that the Image-Line time takes some time to improve these things.

That all said... you can make music in FLStudio and never realize the tradeoffs you're making and only see the upsides. Lots of people do that.

# Support Me!

This post took 4 hours to research, screenshot, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>






