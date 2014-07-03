MVC Playground
==============

I often experiment with the latest MVC frameworks to see which ones work best for different scenarios, but the tutorials always leave out what is the hardest part for me to grok, connecting the front end MVC to a web back end. This repo was born out of my latest experiments with [polymer](http://www.polymer-project.org/docs/start/tutorial/intro.html) to see how it might fit in with my projects.

I hope to mock up samples for various frameworks to discover best practices and how they work. It will be similar to TODO MVC, but instead of using local storage, it will use a very basic web api, built with express. It is meant to mimic a mongo db, without requiring an actual mongo DB. Kind of like a web scaffolding.

I like [polymer's](http://www.polymer-project.org/) unquote [tutorial](http://www.polymer-project.org/docs/start/tutorial/intro.html) app. It's a little more involved than the standard todo list and feels more like a real world app to me. All of the samples apps will follow the unquote model.

Current MVCs
------------

* __polymer-backbone hybrid__ - Polymer's default app used their own MVC. Here I have modified it slightly to use backbone, which I feel is more robust and adds other functionality.

Prerequisites
-------------

In order to build the playground, make sure you have the following equipment installed:

* [nodejs](http://nodejs.org/)
* [bower](http://bower.io): `npm install -g bower`
* [grunt](http://gruntjs.com): `npm install -g grunt-cli`

Running the code
----------------

After you clone the repo, cd into the directory from a command line prompt and run the following commands:

```bash
npm install
bower install
grunt
```

That should download all of the dependencies, launch the server and open a browser to the default backbone-polymer app.

TODOs
-----

Lots and lots. Right now, I don't like how the backbone polymer integration is working, so I am going to focus on getting that to run cleanly.

I hope to add samples for the following once that work is done:

* [AngularJS](https://angularjs.org/)
* [Vanilla Backbone](http://backbonejs.org/)
* [EmberJS](http://emberjs.com/)
* [Vanilla Polymer](http://www.polymer-project.org/)
