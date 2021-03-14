---
title: String Harmonic Chart
comments: true
categories: music
tags: ['Harmonics', 'String Harmonics']
description: 
layout: post
---

{% include harmonics.html %}

**IT ONLY WORKS ON MOBILE IN LANDSCAPE**

**Last Updated** - {{ page.last_modified_at | date: '%Y %B %d' }}

# Contents
{:.no_toc}
* TOC
{:toc}

# What is this

This is a chart of natural harmonics on a string with tuning information.

If you have a stringed instrument then lightly press down at half the length of the string (12th fret, 12th position). Don't engage the string with the fret/board. Actuate the string. That's a natural harmonic.

There are other types of string harmonics, which I might add a calculator for here later... or not. I made this for myself :) If I need a calculater for myself, then I'll make it.

## I can't play...

The more divided the string, the more precise you must be relative to the node's central location and the more sensitive the string actuation point is.

If you can't play the 3rd node on the 10th harmonic (right between the first nodes of the 4th and 5th harmonics), don't worry. 

Ideally, the loudest sound will come from the most precise and accurate muting of the node (try your finger nail) then plucking exactly between two nodes. You can get a 'purer' (fewer harmonics) sound by muting two nodes simultaneously and plucking between them.

# Reading the Chart

The chart has 4 important pieces of information:

* Fretboard - This is your standard 24-fret instrument fretboard with markers at 5th, 7th, 9th, 12th (double markers), 17th, 19th, 21st and 24th (double makers) frets. It's [equal temperament](#fret-distance)
* Arrow - This is the the location of all of the nodes (places you can mute the string to bring out the harmonic) for that harmonic.
* Text Box
    * Top Row - Number of cents from the fundamental (open note) of the string. 100c == 1 Semitone. 1200c == 1 Octave.
    * Bottom Row - Information relative to equal temperament and relative to the fundamental of the string.
        * The form is: (# of octaves)+(interval) +/- offset from equal temperament.
            * M2 - Major Second, 200c
            * M3 - Major Third, 400c
            * P4 - Perfect Fourth, 500c
            * d5 - Diminished 5th, 600c
            * P5 - Perfect Fifth, 700c
            * m7 - Minor Seven, 1,000c
            * oct - Octave, 1,200c

# Formulas

## Harmonic Frequency

The frequency of a harmonic is simple: `f * n+1` where n is the harmonic. This corresponds to a division of the string of `1/n+1`.

The first harmonic of 100hz is `100 * 1+1 = 200`, and this a string division of `1 / (1 + 1) = 1/2`.

## Cent Difference

Given two notes in hz, what is the number of cents difference?

* Javascript: `1200 * (Math.log(f2/f1) / Math.log(2))`
* Clojure: `(* 1200 (/ (Math/log (/ f2 f1)) (Math/log 2)))`

## Fret Distance

Distance of frets is calculated via:

~~~ javascript

scale = 34;
number_of_frets = 24;

for (let i = 0; i < number_of_frets; i++) {
        d = scale - (scale / (Math.pow(2, (i / 12))));
    console.log(`Fret ${i}: ${d} from nut`)
}
~~~

~~~ clojure
(defn fret->distance-from-nut
 [scale fret]
 {:fret fret
  :distance-from-nut (- scale 
                        (/ scale (Math/pow 2
                                  (/ fret 12))))})

(defn fret-distances
 [scale]
  (map #(fret->distance-from-nut scale %) 
       (range)))

(take 24 (fret-distances 34))
;; ({:fret 0, :distance-from-nut 0.0}
;;  {:fret 1, :distance-from-nut 1.908273368822421}
;;  {:fret 2, :distance-from-nut 3.709443583228463}
;;  {:fret 3, :distance-from-nut 5.409521881373706}
;;  {:fret 4, :distance-from-nut 7.01418211654061}
;;  {:fret 5, :distance-from-nut 8.528779693096414}
;;  {:fret 6, :distance-from-nut 9.958369439657385}
;;  {:fret 7, :distance-from-nut 11.307722479109415}
;;  {:fret 8, :distance-from-nut 12.581342151787158}
;;  {:fret 9, :distance-from-nut 13.78347904495374}
;;  {:fret 10, :distance-from-nut 14.918145178740659}
;;  {:fret 11, :distance-from-nut 15.98912739589198}
;;  {:fret 12, :distance-from-nut 17.0}
;;  {:fret 13, :distance-from-nut 17.954136684411207}
;;  {:fret 14, :distance-from-nut 18.854721791614235}
;;  {:fret 15, :distance-from-nut 19.704760940686853}
;;  {:fret 16, :distance-from-nut 20.507091058270305}
;;  {:fret 17, :distance-from-nut 21.26438984654821}
;;  {:fret 18, :distance-from-nut 21.979184719828694}
;;  {:fret 19, :distance-from-nut 22.653861239554708}
;;  {:fret 20, :distance-from-nut 23.29067107589358}
;;  {:fret 21, :distance-from-nut 23.89173952247687}
;;  {:fret 22, :distance-from-nut 24.45907258937033}
;;  {:fret 23, :distance-from-nut 24.994563697945992})
~~~

## Nearest Interval

To find the nearest interval: 

* Find the distance in cents from the base frequency (open string) and the harmonic frequency. ([cent distance](#cent-distance))
* Subtract a multiple of 1200 from the harmonic where the remainder is positive.
    * Remember that multiple as 'oct'.
* From that value, subtract a multiple of 100 until the remainder is positive.
    * Remember that multiple as 'semitone'
* If the remainder <50, the result is: octaves = oct. semitones = semitone. cents = remainder.
* If the remainder >49, the result is: octaves = oct. semitones = (semitone + 1). cents = (remainder - 100).

Write your own code :)

# Support Me!

This post took 6 hours to put together. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or donating!</a>
