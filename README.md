# Welcome to Twenty Twentyone

This is my first theme so please be kind! But do still also let me know if you have any questions.

## What's this theme?

It's a simple theme heavily inspired by Ghost's default Casper theme. It is also  an excuse to try TailwindCSS. 

## Features

* TailwindCSS
    * PurgeCSS
    * Tailwind's Typograhy
    * Prism 
* NetlifyCMS
* Hyvor Commenting System
* Mathjax for writing math. I suggest you read [this very helpful guide](https://en.wikibooks.org/wiki/LaTeX/Mathematics) to get started
* Mardown for content
* HTML for template
* Webpack

## No Hassle way to start blogging!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/smolcodes/twentytwenyonetheme)

Click this button and Netlify will do most of the hard work for you!

[Preview the Theme](https://twentytwenyonetheme.netlify.app/)

## Setup Up Locally

1. You can clone the repository :

```
git clone https://github.com/smolcodes/twentytwenyonetheme.git my-blog-name
```
(if you are unsure what that means [here is a really good set of instructions](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository))

2. Go to your directory/folder 
3. Install dependencies `npm install`

## Building the Site

1. In the command line, still in the directory run the 11ty buid

```
npm run build:eleventy
```

2. Run webpack

```
npm run webpack
```

## Seeing the site live

run start

```
npm run start
```
### Information to change

You will want to change the information in site.json which can be found in src>_data.

### Hyvor

You'll need to change the ID code in post.html (which can be found in sr>_includes>layouts) if you want to use Hyvor Talk and you will also need to set up an account.
Your Hyvor id will be on the General Settings Page of the Hyvor Dashboard.

### NetlifyCMS

1. Set up a netlify account if you do not already have one and add your repository to it, [Here is a step by step guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)
2. In src>admin open config.yml in a text editor. Change the repo (repository) to your repository.
3. In Netlify you will need to add github in identity>registrations

### Final Notes

Go to tailwind.config to customize the styles. This template uses pre-flight.

### Version 2

Now supports

* Image shortcode using eleventy-img
* HTML minifier
* Markdown Callouts
* Fixed all posts to NJK