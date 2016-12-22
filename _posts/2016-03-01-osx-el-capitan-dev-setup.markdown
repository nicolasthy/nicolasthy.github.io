---
title: OSX El Capitan for Web Development
date: 2016-03-01 09:00:00 Z
categories:
- tutorial
- osx
tags:
- osx
- elcapitan
layout: post
image: osx-elcapitan.jpg
cover: osx-elcapitan.jpg
excerpt: Setup your Mac with OSX El Capitan for web development.
comments: true
listed: true
featured: true
---

Hi, I've decided to show you how I installed my dev environment on my Mac before starting Part 3 of my React course so that you can follow my instructions easily in case you are not familiar with the dev tools.

# Mac Dev Setup
_Current version El Capitan 10.11 (last update: 01 mar. 2016)_

## Development environment

#### Apache
Follow [this guide](http://getgrav.org/blog/mac-os-x-apache-setup-multiple-php-versions){:rel="nofollow"} to setup apache on OS X 10.10 or earlier with multiple php versions.
For a better looking localhost home page, you can use [Apaxy](http://adamwhitcroft.com/apaxy/){:rel="nofollow"}.

It's always good to have localhost working with PHP and MySQL. You will also find how to install Homebrew in this tutorial.

#### Rails
Follow [this guide](https://gorails.com/setup/osx/10.11-el-capitan){:rel="nofollow"} to get Rails. However, you can skip the following steps:

* Ruby
* Git
* MySQL

To install the correct version of Ruby, you have to first install **rbenv** with the following commands:

{% highlight shell linenos %}
brew install rbenv ruby-build

# Add rbenv to bash so that it loads every time you open a terminal
echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
source ~/.bash_profile
{% endhighlight %}

Then install [RVM](http://rvm.io/){:rel="nofollow"} to get the correct version of Ruby. RVM requires GPG2, so run this command first ```brew install gnupg gnupg2```.
Once RVM installed, run ```rvm install 2.1.2```and then ```rvm use 2.1.2```.

Now you should be able to run ```ruby -v```and see that the current version is 2.1.2.

### Software
**_Installation via AppStore_**

* XCode & Developer tools
* Sketch 3
* Slack
* Pages, Numbers, Keynote

**_Software to download_**

I have listed Atom and Sublime here, but you can choose the one your prefer. I personally use Atom but I tend to switch from time to time.

* [iTerm2](http://iterm2.com/){:rel="nofollow"}
  * [Homebrew](http://brew.sh/){:rel="nofollow"} _(OSX Package manager)_
  * [Oh My ZSH](https://github.com/robbyrussell/oh-my-zsh){:rel="nofollow"} _(**Optional** Shortcuts for git commands and other stuff)_
* [Atom](https://atom.io/){:rel="nofollow"}
  * file-icons
  * language-babel
  * nuclide
* [Sublime Text 3](http://www.sublimetext.com/3){:rel="nofollow"}
  * Better CoffeeScript
  * Emmet
  * Material Theme
  * ReactJS
  * Ruby Slim
  * Sass
  * SideBarEnhancements

{% highlight shell %}
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
{% endhighlight %}

* [Sequel Pro](http://www.sequelpro.com/){:rel="nofollow"} _(Database client)_
* [Photoshop CC](http://www.adobe.com/fr/downloads.html){:rel="nofollow"}
* [f.lux](https://justgetflux.com/){:rel="nofollow"} _(Screen Night Shift)_

### Configuration
**_Setup git username and email_**

Run the following lines to setup your git credentials:
{% highlight shell linenos %}
git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR EMAIL ADDRESS"
{% endhighlight %}

**_Show / Hide hidden files_**

Add the following lines to your ```~/.bash_profile```file
{% highlight shell linenos %}
alias showFiles='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder /System/Library/CoreServices/Finder.app'
alias hideFiles='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder /System/Library/CoreServices/Finder.app'
{% endhighlight %}
Then relaunch your terminal and you can now type the following commands, ```showFiles``` and ```hideFiles```.

**_NodeJS (with npm, bower, yeoman, grunt)_**

First install [NodeJS with npm](https://nodejs.org/en/){:rel="nofollow"}.
Then run the following lines in your terminal:

{% highlight shell linenos %}
npm install -g yo bower grunt-cli gulp
npm install -g generator-webapp
{% endhighlight %}

There you go ! You should have a working running OSX !
