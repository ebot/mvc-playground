MVC Playground
==============

I always like checking out the latest MVC frameworks, but the begininning turorials always leave out what is the hardest part for me to grok, connecting it up to a web api. This repo is my attempt at mocking up samples for the frameworks. It will be similar to TODO MVC, but instead of using local storage, it will use a very basic web api, built with express. It is meant to mimic a mongo db, without requireing the programmer to have it installed an hook everything up.

I like polymer's unquote totrial app. Its a little more involved than the standard todo list, so all of the samples apps here will use unquote.

Current MVCs
------------

* __polymer-backbone hybred__ - Polmers default app used their own MVC. HEre I have modified it slightly to use backbone, which I feel is more robust and adds other funcionality.

Running the code
----------------

After you clone the repo, cd into it from the command line and run the following commands:

```bash
npm install
bower install
grunt
```

That should download all of the depenancies, launch the server and open a browser to the default backbone-polymer app.

TODOs
-----

Lots and lots. Right now, I don't like how the backbone polymer integration is working, so I amgoing to focus on getting that to run cleanly.
