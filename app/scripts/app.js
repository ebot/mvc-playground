// Load the application once the Dom document is ready
$(function() {  
  // ### Post Model
  // Information about each post.
  window.Post = Backbone.Model.extend({
    idAttribute: "_id",

    defaults: { '_id'  : 1,
                'text' : "I loveto node, don't you?",
                'username': 'Ed',
                'avatar': '/images/avatar-01.svg', 
                'favorite'  : false }
  });

  // ### Posts Collection
  // The collection of jobs retrieved from the Posts Web API.
  window.Posts = Backbone.Collection.extend({
    // Specify this collection's model and the url to get the models from.
    model : Post,
    url   : '/api/posts'
  });

  // Create global collection of posts.
  window.posts = new Posts();

  // Refresh jobs every 30 secs by pulling in updates from the server.
  window.posts.fetch();
  setInterval(function() { window.posts.fetch(); }, 30000);
});
