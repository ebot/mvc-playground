// Load the application once the Dom document is ready
$(function() {  

  // ### Job Model
  // The Job Model contains information about each Ed Link job.
  window.Post = Backbone.Model.extend({
    idAttribute: "_id",

    defaults: { '_id'  : 1,
                'text' : "I loveto node, don't you?",
                'username': 'Ed',
                'avatar': '/images/avatar-01.svg', 
                'favorite'  : false }
  });

  // ### Jobs Collection
  // The collection of jobs retreived from the Ed Link API.
  window.Posts = Backbone.Collection.extend({
    // Specify this collection's model and the url to get the models from.
    model : Post,
    url   : '/api/posts'
  });

  // Create our global collection of jobs.
  window.posts = new Posts();
});
