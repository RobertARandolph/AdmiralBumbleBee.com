---
layout: post
title: 'Ctags, CSS and SASS/scss'
comments: true
date:   2018-10-02_12:43:20 
categories: programming
tags: ['Programming']
image:
description: scss support with ctags
---

Recently I wanted to setup a program called ctags with [css](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) and [SASS/scss](https://sass-lang.com)

This was incredibly frustrating, but with the help of [gagbo](https://framagit.org/gagbo/vim-setup) on [#vim](http://vim.wikia.com/wiki/Vim_on_Freenode) I was able to solve the issue.

This is a mid-week post just to help people that have this issue and are googling for it. You will see that this has bearing on the post that will come out this weekend as well.

<!--more-->

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

# Contents
{:.no_toc}
* TOC
{:toc}

# What is this? Why use it?

[ctags](https://github.com/universal-ctags) is a program that indexes your code (AND some non-code things, such as css and markdown).

When your files are indexed, your editor can quickly jump to that symbol, or use auto completion more intelligently in the context of your product.

Not all languages are supported by all editors. By using ctags you can gain a good deal of adding support for your language without resorting to writing a plug-in or extension. Syntax Highlighting is still something you need to do on your own though.

# What was the problem?

I wanted to index .css and .scss files so that my text editor would allow me to quickly jump to the definition of that class or ID.

ctags was not properly indexing the .css or scss files. I spent a lot of time trying to fix this, and with the help of [gagbo](https://framagit.org/gagbo/vim-setup) on freenode.net I solved the issue.

# Solution

First you _must_ be using [universal ctags](https://github.com/universal-ctags). Universal ctags supports CSS out of the box, and you only need to add scss support.

In your home directory, or the project directory create a file in the directory `.ctags.d` named `scss.ctags` (`.ctags.d/scss.tags`) is the result.)

Inside that file add the following:

```
--langdef=scss
--langmap=scss:.sass
--langmap=scss:+.scss
--regex-scss=/^[ \t]*@mixin ([A-Za-z0-9_-]+)/\1/m,mixin,mixins/
--regex-scss=/^[ \t]*@function ([A-Za-z0-9_-]+)/\1/f,function,functions/
--regex-scss=/^[ \t]*\$([A-Za-z0-9_-]+)/\1/v,variable,variables/
--regex-scss=/^([A-Za-z0-9_-]*)*\.([A-Za-z0-9_-]+) *[,{]/\2/c,class,classes/
--regex-scss=/^[ \t]+\.([A-Za-z0-9_-]+) *[,{]/\1/c,class,classes/
--regex-scss=/^(.*)*\#([A-Za-z0-9_-]+) *[,{]/\2/i,id,ids/
--regex-scss=/^[ \t]*#([A-Za-z0-9_-]+)/\1/i,id,ids/
--regex-scss=/(^([A-Za-z0-9_-])*([A-Za-z0-9_-]+)) *[,|\{]/\1/t,tag,tags/
--regex-scss=/(^([^\/\/])*)[ \t]+([A-Za-z0-9_-]+)) *[,|\{]/\3/t,tag,tags/
--regex-scss=/(^(.*, *)([A-Za-z0-9_-]+)) *[,|\{]/\3/t,tag,tags/
--regex-scss=/(^[ \t]+([A-Za-z0-9_-]+)) *[,|\{]/\1/t,tag,tags/
--regex-scss=/^[ \t]*@media\s+([A-Za-z0-9_-]+)/\1/d,media,media/
```

Now when you run `ctags -R *` in your current directory, it will index scss files (and css).

# Ctags and Jekyll

I used to see tags to generate tags for my site [which I generate with jekyll]({ % post_url 2017-07-15-How-AdmiralBumbleBee-works} %).

[Jekyll](https://jekyllrb.com) will freak out if you have a tags file in your root directory.

Add this to your `_config.yml`

```
exclude: ['tags']
```

 Now your site will generate correctly and you'll be able to quickly edit HTML CSS and SCSS in your website by using ctags related features in your text editor.

# Editor support

*[Emacs](https://www.gnu.org/software/emacs/) has native ctags support by using `M-. You will need to compile the tags with `ctags -eR *` for it to be compatible though.
*[Vim](https://www.vim.org) jumps to ctags with `c-]`
* [Sublime Text](https://www.sublimetext.com) supports ctags with [this package](https://github.com/SublimeText/CTags).
* [BBEdit](https://www.barebones.com/products/bbedit/) supports ctags natively with "Find Definition" (generate with `ctags -R --fields=+a+m+n+S --tag-relative=no *`)
* [TextMate](https://macromates.com) supports ctags [with this bundle](https://github.com/textmate/ctags.tmbundle)
* [VS Code](https://code.visualstudio.com) supports ctags [with this extension](https://marketplace.visualstudio.com/items?itemName=jaydenlin.ctags-support)
* [Atom](https://atom.io) supports ctags [with this thing](https://atom.io/packages/atom-ctags)
* [UltraEdit](http://www.ultraedit.com), [Notepad++](https://notepad-plus-plus.org) and [Crimson](http://www.crimsoneditor.com) - Use [OpenCtags](http://openctags.sourceforge.net)
* [jEdit](http://www.jedit.org/index.php) - [get support for ctags here](http://plugins.jedit.org/plugins/?CtagsInterface)
* [Kate](https://kate-editor.org) - Kate has native ctags support.

# Clojure

If you are using an editor that does not have an attached repl or a [clojure](https://clojure.org) mode with symbol extraction of any sort then you can use this ctags config in `.ctags.d/clj.ctags`

```
--langdef=Clojure
--langmap=Clojure:.clj
--regex-clojure=/\([ \t]*create-ns[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/n,namespace/
--regex-clojure=/\([ \t]*def[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/d,definition/
--regex-clojure=/\([ \t]*defn[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/f,function/
--regex-clojure=/\([ \t]*defn-[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/p,private function/
--regex-clojure=/\([ \t]*defmacro[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/m,macro/
--regex-clojure=/\([ \t]*definline[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/i,inline/
--regex-clojure=/\([ \t]*defmulti[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/a,multimethod definition/
--regex-clojure=/\([ \t]*defmethod[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/b,multimethod instance/
--regex-clojure=/\([ \t]*defonce[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/c,definition (once)/
--regex-clojure=/\([ \t]*defstruct[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/s,struct/
--regex-clojure=/\([ \t]*intern[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/v,intern/
--regex-clojure=/\([ \t]*ns[ \t]+([-[:alnum:]*+!_:\/.?]+)/\1/n,namespace/
```

This isn't necessary usually, but some folks may prefer their editor's features and want to play with Clojure without switching to software with first-class support for Lisps.

# Nim

I [am really enjoying nim lately](http://nim-lang.org) and I suggest using [ntags](https://bitbucket.org/nimcontrib/ntags) for generating tags.

First [check to see if your editor has support](https://github.com/nim-lang/Nim/wiki/Editor-Support) though!

# Conclusion

ctags is really useful and I suggest exploring it regardless of which editor you use. If you already use an IDE and you only work in a single language, and this is not really that useful to you.

For those of us who enjoy having a text editor instead of an IDE, see tags is a wonderful thing to know how to use.

Thanks for reading.

# Support Me!

This post took 3 hours to research, photograph, write and edit. If you appreciate the information presented then <a href="/DonateNow/">please consider joining patreon or paying me for my time spent bringing you quality content!</a>

<a href="https://www.patreon.com/bePatron?u=7465992"> <img class="patreon-button" src="/assets/Patreon.png" alt="Be a Patreon!"></a>

<form style="text-align: center;" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="BR247JAZBTUJJ">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

**If you have any questions or comments, please comment below! I read every comment and respond to most.** No registration is necessary to comment, so don't be shy.

