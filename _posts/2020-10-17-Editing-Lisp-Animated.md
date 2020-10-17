---
layout: ['post', 'reader']
title: Editing Lisp Animated
comments: true
date:   2020-10-17_09:37:22 
categories: programming
tags: ['Programming', 'Tutorial']
image:
description:
header:
header-caption:
---

I was out mowing my lawn this week (which is a monumental task for me, but I'm stubborn), and I started to daydream about how I'd put together a program to determine the best path to take for the least operator (me) movement.

Naturally the first thing I started thinking about is what the data would look like that represents a map of my property, the obstacles and the types of obstacles (with metadata). As I was thinking about this I realized that maybe everyone doesn't think about data the same way I do. That would mean that not everyone thinks about [editing data](https://en.wikipedia.org/wiki/Homoiconicity) the same way I do.

I don't really think about code very often. I think about shapes and colors. The image above is the text for a simple [Clojure](https://clojure.org) function, and how I "see" it.

I am not going to get _too_ far into this text->image transformation, but I am going to talk about editing and navigating code.

I get a bit hand-wavy when describing concepts to make this consumable by beginners. I blur terminology a bit. If you're a smug lisp weenie, then you probably should move on.

<!--more-->

# Contents
{:.no_toc}
* TOC
{:toc}

# TO THE IMAMGES!!

I don't need to know about Lisp or your incoherent ramblings. [**TAKE ME TO THE VISUALIZATIONS!**](#visualizations)

# Lisp

``` Lisp
(defun hello ()
 (format t "Hello, World!"))
```

If you're not familiar with the lisp category (class? whatever) of programming languages, there it is. The parenthesis move to a different place, but it's effectively the same thing you would get in a C-like language:

``` javascript
function hello() {
    format(t, "Hello, World");
}
```

What `format` is, if it exists in your language, what `t` is, and why you desperately wish [your language](https://clojure.github.io/clojure/doc/clojure/pprint/CommonLispFormat.html) had [Common Lisp's format function](http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm) are all irrelevant.

The point here is that Lisp is pretty simple, and if you're having trouble understanding it, move a paren around.

## Lisp-2, not that kind

For the purpose of this article I'm going to say that Lisp has 3 distinct parts of its syntax:

* An **Atom** - a single "thing" that isn't _literally_ a collection. `do thing` is 2 atoms: `do` and `thing`. `do-thing` is one atom: `do-thing`.  What a "thing" is depends on the Lisp, but you can generally assume that an atom is anything that isn't a data structure.
* Collections of atoms - Specifically _lists_ and _strings_ in your average lisp. `(do thing)` is a list of the atoms `do` and `thing`. `"Do Thing"` is a string of "D",  "o",  " ",  "T",  "h" etc...
    * I will be giving examples with [Clojure](https://clojure.org), which has a few other types of collections: `[]` for vectors (what you may think of as 'arrays'), `{}` for maps (associative structures, or dictionaries), and `#{}` for sets. These imply semantics of the data structure, but for this article you can think of them as 'a sexp of atoms'.
* S-Expressions or **sexps** - either of those above.

That's it. `(do thing)` is a sexp that contains the sexps `do` and `thing`.

## Not-Lisp

In the context of editing and navigating code, we can think in these exact same terms... except that what separates atoms often includes other symbols.

The major difference is that _which_ editing commands you use will vary greatly depending on your language. Let's take "Splice" as an example.

With lisp, this takes `(function1 █(function2) arg)` (where `█` is the cursor) and removes the nearest surrounded parens, thus turning our code into `(function1 function2 arg)`. Both of these are potentially valid code. 

* `(function1 █(function2) arg)` - _calls_ function2 and passes the result as an argument to function1.
* `(function1 █function2 arg)` - passes _the function_ named function2 to function1.

Let's try the same in javascript.

* `function1(function2(█), arg)`->`function1(function2█, arg)` - Hey, that works!

Let's add an argument to function2:

* Lisp `(function1 (function2 █arg1) arg2)`->`(function1 function2 █arg1 arg2)` - This might make sense.
* Javascript `function1(function2(█arg1), arg2)`->`function1(function2█arg1, arg2)` - This does _not_ make sense. The command would need to know to remove the `()` and add a comma. There _are_ refactoring tools that will do this, but not [paredit](#paredit).

I use [Paredit](#paredit) with every language I work in. It's uniquely suited to lisps, but I believe you'll find that many of the commands bring unique value to each language syntax.

# Visualization #1

I wrote at the top of this article that I don't think of lisp in terms of text, but shapes and colors. The following code:

``` Clojure
(defn print-and-say-hello [name]
  (print "Saying hello to " name)
  (str "Hello " name))
```

Looks like this to me:

{::nomarkdown}
    <video autoplay loop muted class="gifvid">
        <source src="/assets/Paredit/Example.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="video-caption">Example (Video)</div>
{:/nomarkdown}

* Atoms are filled boxes with no borders.
* Data structures are bordered boxes with no fill.
* Some things I keep track of what they are.
    * The box representing "Name" is kept track of with a unique representation.
* Some things are 'generic' to me.
    * I don't care if `[name]` is in a list or vector. It's in a "thing". That's all I need to know.
    * I don't care if `defn` is a function or a macro. If I _did_ care, then it takes on a different hue.
    * I _do_ care that `print-and-say-hello` and `"Hello "` are different types of atoms, but I _don't_ care that `"Saying hello to "` and `"Hell' "` are different strings.

As I ingest the code, things change. If I suddenly care that `[name]` is an atom in a vector, then the border colour of the 'vector box' might change. If the two different strings become important then they take on different hues or shapes. 

Is this important? **NO**. Do I think that _you_ need to think about code this way? **NO**.

Why show it to you then? Bear with me and all soon will be clear.

# Visualization #2

Lisp can be represented as a tree structure. There's some debate on how to represent these trees, particularly the the idea of showing literal [cons cells](https://en.wikipedia.org/wiki/Cons) as a tree, and showing the literal _syntax_ as a tree.

Abstractions are nice, but the _right_ level of abstraction is nicer. So our function:

~~~ Clojure
(defn print-and-say-hello [name]
  (print "Saying hello to " name)
  (str "Hello " name))
~~~

Can be represented like this:

{::nomarkdown}
<img src="/assets/Paredit/AST.png" alt="A Tree">
<div class="image-caption">A Tree</div>
{:/nomarkdown}

To evaluate this code, you would evaluate the leaves from left to right, bottom up. The children are arguments to their parent node. `()` define a new sub-tree.

Yes, that would mean that `[]` is a function that takes `name` as an argument then creates a vector with `name` in it. (This is somewhat of a clojure-ism, not a general lispism). .

# Paredit

The technology I'll be demonstrating is called [Paredit](http://wikemacs.org/wiki/Paredit-mode). It allows you to edit parenthesis, which for Lisp means that you're directly adjusting the [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree).

Paredit is a powerful tool that I believe every Lisp developer needs to learn at some point. There are [other options](https://shaunlebron.github.io/parinfer/), and some of them are even [good option](https://github.com/abo-abo/lispy), but Paredit is still going to be here in 25 years... everyone else? Maybe not.

I will be adding in some navigation commands from [emacs](https://www.gnu.org/software/emacs/) that are not part of paredit, but are something that most editors will have.

# Navigation

This is where the fun starts, and why I think how **I** think about lisp code potentially becomes valuable.

I'll be using the following Clojure function, and the subsequent 'visualization' of that function:

``` Clojure
(defn print-and-say-hello [name]
  (print "Saying hello to " name)
  (str "Hello " name))
```

The cursor will be a solid block.

All 3 representations of the code will be presented at once: Text, Blocks, Tree.

## forward-list



## backward-list
## up-list
## backward-up-list
## down-list
## forward-sexp
## backward-sexp
## beginning-of-defun
## end-of-defun

# Editing

## paredit-add-to-next-list
## paredit-add-to-previous-list
## paredit-backslash
## paredit-backward
## paredit-backward-barf-sexp
## paredit-backward-delete
## paredit-backward-down
## paredit-backward-kill-word
## paredit-backward-slurp-sexp
## paredit-backward-up
## paredit-close-angled
## paredit-close-angled-and-newline
## paredit-close-bracket
## paredit-close-bracket-and-newline
## paredit-close-curly
## paredit-close-curly-and-newline
## paredit-close-parenthesis
## paredit-close-parenthesis-and-newline
## paredit-close-round
## paredit-close-round-and-newline
## paredit-close-square
## paredit-close-square-and-newline
## paredit-comment-dwim
## paredit-convolute-sexp
## paredit-copy-as-kill
## paredit-delete-region
## paredit-doublequote
## paredit-focus-on-defun
## paredit-forward
## paredit-forward-barf-sexp
## paredit-forward-delete
## paredit-forward-down
## paredit-forward-kill-word
## paredit-forward-slurp-sexp
## paredit-forward-up
## paredit-hack-kill-region
## paredit-insert-html-examples
## paredit-join-sexps
## paredit-join-with-next-list
## paredit-join-with-previous-list
## paredit-kill
## paredit-kill-region
## paredit-meta-doublequote
## paredit-meta-doublequote-and-newline
## paredit-mode
## paredit-newline
## paredit-open-angled
## paredit-open-bracket
## paredit-open-curly
## paredit-open-parenthesis
## paredit-open-round
## paredit-open-square
## paredit-raise-sexp
## paredit-recenter-on-defun
## paredit-recenter-on-sexp
## paredit-recentre-on-sexp
## paredit-reindent-defun
## paredit-semicolon
## paredit-splice-sexp
## paredit-splice-sexp-killing-backward
## paredit-splice-sexp-killing-forward
## paredit-split-sexp
## paredit-wrap-angled
## paredit-wrap-curly
## paredit-wrap-round
## paredit-wrap-sexp
## paredit-wrap-square
## paredit-yank-pop

# Meta

This post took:

* XX hours to do
* YY hours to do
