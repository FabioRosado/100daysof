---
layout: post
title:  Categories Available
date:   2018-12-31 19:06:28 +0000
categories: blog documentation
tags: documentation
---

Here you can have a quick introduction to the different categories available on the site. Keep in mind that everything is a post, but depending on the category that you chose, you will be able to add more configuration to the post [front matter](https://jekyllrb.com/docs/front-matter/). 

_*Note:* The categories should be in lowercase otherwise things might not work as expected._

# The Log category

Any post with this category will be shown in the *timeline* page, it will show two main topics *progress* and *thoughts*. This is basically like the original _log.md_ file that's suggested on the [#100daysofcode](http://100daysofcode.com) page.

You will write everything in the Front Matter, but if you need to write more things or if you just want to expand on your progress/thoughts or just keep notes you can write them as if a normal blog post.

When people press the button `>> read more` the log will open and show the whole post.

 ## Front Matter configuration

```yaml
layout: post
title:  # Your title
subtitle:  # short description or things worked on
date:  # Today's date so it will be shown on the calendar
categories: log
tags: # useful for you to add what sort of tech you used
   - # tag 1
   - # tag 2
progress: # Today's progress towards the challenge
thoughts: # How do you feel about today's progress or any other thoughts
link: # a link of your work done (or the project)
```

_*Note:* If you want to add a log to the blog you can add both, simply change `categories: log` to `categories: log blog`._

# The Projects category

When working on the challenge, I started creating a few little projects, but after doing the challenge for 80 days, it became hard to keep track of my projects since I was adding them as folders.

This category is meant for you to keep tabs on what you have worked and how is a specific project going. Basically, you can keep a log of each individual project and when you finish it you can proudly show what you have done and how.

## Front Matter

```yaml
layout: post
title:  
subtitle: 
date:   # Today's date
categories: project
link: # A link of the project
image: # An image of the project located in assets/images
tags:  # Great for showing off the tech used
   - # tag 1
   - # tag 2
```

# The Book category

My day to day job is based on shift work, which means that sometimes I can't spend a whole hour coding because my brain is mush due to tiredness.

On days like this, I would spend at least an hour reading a technical book or a blog post.

With this category, I want to give you the power to show off all the books that you have either started or finished off and hopefully, you will feel motivated to read more.

Currently, this category is quite simple, it will show an image of the book is provided, the name and the percentage read. You can use [goodreads](https://www.goodreads.com) if you want to know exactly how much you have read.

## Front Matter

```yaml
layout: post
title:  # Title of the book
subtitle: # Author of the book
date:   # If you want to feature a book on the homepage, update for today's date
categories: book
read: 50  # This is meant to be the percentage you have read
image: # the image of the book
```

# The Blog category

The blog category is meant to be anything else that doesn't fit on any of the other categories. Any post containing the `blog` category will appear on the blog page.

## Front Matter

```yaml
layout: post
title: # Your title
subtitle: # Your subtitle
date:   # Today's date
categories: blog # Any other category
image: # Post image located in assets/image
tags:
   - # tag 1
   - # tag 2
```

_**Note:** When you open a blog post to read, only the last category will be shown in the post header. Make sure `blog` is the first category and add whatever else you want after._

# Next steps

By now you did a lot of reading. You can probably change the name of your fork and publish it to the GitHub pages - Head to settings, scroll down, GitHub pages tab.

And remember, let me know if you have any issues!