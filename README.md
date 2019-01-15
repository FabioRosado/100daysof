<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]]()
[![MIT License][license-shield]][license-url]

<br />
<p align="center">

  <h3 align="center">100Daysof</h3>

  <p align="center">
    An alternative way to log your progress in any of the 100DaysOfX challenge
    <br />
    <a href="https://100daysof.netlify.com/blog/documentation/2018/12/31/gettingstarted.html"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://100daysof.netlify.com">View Demo</a>
    ·
    <a href="https://github.com/FabioRosado/100daysof/issues">Report Bug</a>
    ·
    <a href="https://github.com/FabioRosado/100daysof/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://elated-mayer-b03e07.netlify.com)

This project is meant to be an alternative way to keep track of your 100DaysOfX. It doesn't matter what you are committed to, but having a clear view of what you have worked on and achieved can be a great motivational activity.

**Why should you give this project a try:**

* Can be a great way to see your progress in a structured way
* Can be used as a start for your own portfolio
* More structured way to see your log
* Host yourself on GitHub pages
* Highly customisable

**How did the project come to life.**

After participating on #100DaysOfCode I have noticed that it was getting harder to keep track of my logs in a single `.md` file.

So I came up with an idea to keep track of each day in a separate way and slowly this project started to take shape in my head. Hope you like it and becomes useful to you.

### Built With

This project stack is meant to be simple so you can expand and modify it in any way that suits your needs.

* [Jekyll](https://jekyllrb.com)
* [Bulma](https://bulma.io)
* [FontAwesome](https://fontawesome.com)

## Getting Started

This section will help you get started with the site and how to have your own version working on your machine. If you have any trouble with any of these steps make sure to contact me and I'll give you a hand!

### Prerequisites

This is a Jekyll site so you will need to have the following things installed on your machine:

* Ruby (>= 2.2.5)
* RubyGems
* GCC and Make

Please read the official Jekyll [installation guide](https://jekyllrb.com/docs/installation/) if you need help installing any of these requisites on your machine.

Once you have everything installed you can run the following command on your terminal to install Jekyll on your machine.

```sh
gem install bundler Jekyll
```

Also, make sure you have git installed in your machine so you can push your logs to your own repository. If you don't know how, please read the [Setting up git guide](https://help.github.com/articles/set-up-git/).

### Installation

1. Open your desired folder for the project

```sh
cd documents/
```

2. Fork the main repository

* Head to https://github.com/FabioRosado/100daysof
* Click the **Fork** button

3. Clone your fork of the repository

```sh
git clone https://github.com/<your username here>/100daysof.git
```

_**Note:** A new folder named `100daysof` will be created, you don't have to create this yourself._

4. Add the original repo as your upstream

```sh
git remote add upstream https://github.com/FabioRosado/100daysof.git
```

_**Note:** This step is important for you to update your fork with the latest version._

## Usage

You can start this project on your machine by running the following command on your terminal.

```sh
bundle exec Jekyll serve
```

After running that command you should see a message similar to this:

```sh
Configuration file: /Users/<user>/Documents/100daysof/_config.yml
            Source: /Users/<user>/Documents/100daysof
       Destination: /Users/<user>/Documents/100daysof/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
       Jekyll Feed: Generating feed for posts
                    done in 0.474 seconds.
 Auto-regeneration: enabled for '/Users/<user>/Documents/100daysof'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.

```

Now you can go to http://127.0.0.1:4000/ and you will see a live version of this project.

## Contributing

Contributions are what makes the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

FabioRosado - [@FabioRosado_](https://twitter.com/FabioRosado_) - FabioRosado@outlook.com

Project Link: [https://github.com/fabiorosado/100daysof](https://github.com/fabiorosado/100daysof)

## Acknowledgements

* [othneildrew - For the awesome readme template](https://github.com/othneildrew/Best-README-Template)
* [cagrimmett - For the cool calendar](https://github.com/cagrimmett/jekyll-tools)
* [Long Qian - For the post on tags](http://longqian.me/2017/02/09/github-jekyll-tag/)
* [Jason Leung - for the cool placeholder image](https://unsplash.com/@ninjason)


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://github.com/FabioRosado/100daysof/blob/master/LICENSE
[product-screenshot]: https://github.com/FabioRosado/100daysof/blob/master/assets/images/100daysof.png?raw=true