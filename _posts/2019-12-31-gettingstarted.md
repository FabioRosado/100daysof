---
layout: post
title:  Getting Started
date:   2018-12-31 19:06:28 +0000
categories: blog documentation
tags: documentation
---

This post is meant to be a quick getting started guide in order to get your own version of the project up and running.

# Fork the repository

Head over to the official [100daysof repository](https://github.com/fabioRosado/100daysof) and press the **Fork** button on the top right corner of the page. This will create a new repository in your GitHub account.

# Clone your Fork

Open your terminal and open the folder that you wish to clone the project.

```shell
cd documents
git clone https://github.com/<your username>/100daysof.git
```

Now you will have a folder with the contents of the 100daysof project. You can modify them as you wish and push the changes to your own fork with the command:

```shell
git push
```

# Keep your Fork up to date

You should keep your version of the project up to date with the new releases and bug fixes, to do so you should add the official repository as a remote.

```shell
git remote add upstream https://github.com/FabioRosado/100daysof.git
```

Now you can run this command to update your fork

```shell
git pull upstream master
```

But only your local folder will be updated, to push the changes to your GitHub repository you will have to run `git push`.

_*WARNING:* Depending on how outdated your fork is or what sort of change was added you might get merge conflicts. If this happens you can either revert the changes with `git rebase --abort` or try to fix the merges yourself._

# Open and update _config.yml

This is where the configuration for your site lays. Everything is self-explanatory, but you should change the title to something like `100daysofcode - <username>`, you should also change the other fields from `title:` to `avatar:`. Finally, you can include any social network username in order to show up on the left sidebar.

# Next steps

Check the different categories available by reading [this post](http://localhost:4000/blog/documentation/2018/12/31/categories.html) or open each page in this demo and read about them in every category.