---
title: Start Guide
description: A Quick Guide
date: 2020-05-09
imageURL: https://images.unsplash.com/photo-1588287055455-9fb0ca7a2d02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80
layout: layouts/post.html
tags:
  ['guide']
---

Thank you for using the theme. If you want to see an example post go [here](posts/2021-1-17-installing-hyvor/). [Download the theme](https://github.com/smolcodes/twentytwenyonetheme)

## Mathjax

To use mathjax, simply put your math between `\\(...\\)` for inline code and between `$$...$$` for free standing code. **IMPORTANT** do not include the back ticks!

`\\(ax^2 + bx + c = 0\\)` yields \\(z = x + y\\) And ` $$ ax^2 + bx + c = 0 $$ ` gives. 

>$$ ax^2 + bx + c = 0 $$

_________

## Hyvor

You must have a Hyvor account to use this feature. In sr/_includes/layouts open post.html and look for

```html
<!--- Change  ID number to your Hyvor Website ID. Remove comment line to use Hyvor
<div id="hyvor-talk-view"></div>
<script type="text/javascript">
    var HYVOR_TALK_WEBSITE = IDNUMBER; // DO NOT CHANGE THIS
    var HYVOR_TALK_CONFIG = {
        url: '.',
        id: ''
    };
</script>
<script async type="text/javascript" src="//talk.hyvor.com/web-api/embed"></script>
-->
```

Delete the comment out code (the <! and ---- and -->). Change `IDNUMBER` to your Website ID from Hyvor.

______

## NetlifyCMS

1. Set up a netlify account if you do not already have one and add your repository to it, [Here is a step by step guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)
2. In src>admin open config.yml in a text editor. Change the repo (repository) to your repository.
3. In Netlify you will need to add github in identity>registrations

## Final remarks

I am very new to 11ty and this is my first theme. If you notice any mistakes please feel free to [open an issue](https://github.com/smolcodes/twentytwenyonetheme/issues).
If you have questions or advice don't hesitate to talk to me on [twiiter](https://twitter.com/smolcodes).

Thank you 😊
____
[Image by Nadi Boradina](https://unsplash.com/photos/gETBUi_oRgQ)

