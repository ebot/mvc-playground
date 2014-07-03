var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();

// express settings
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.set('port', process.env.PORT || 3000);
var public_dir = process.env.path || path.join(__dirname, '../app')
app.use(express.static(public_dir));

// Load some posts to work with
var posts = [];
fs.readFile('db/posts_seed.json', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log('Default posts read in from seed file.');
  posts = JSON.parse(data);
});

// function that can be called from the requests
getPost = function(id) {
  var posts_found = posts.filter(function(p) {
    return p._id == id;
  });

  if (posts_found.length === 1) {
    return posts_found[0];
  }
  else {
    return undefined
  }
}

deletePost = function(id) {
  console.log('  Looking for post to delete');
  var deleted = false;
  posts.filter(function(p) {
    if (p._id == id) {
      var index = posts.indexOf(p);
      console.log('    Deleting post at index ' + index);
      posts.splice(index, 1);
      deleted = true
    }
  });
  return deleted
}

// express routes
app.get('/api/posts', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.send(posts);
});

app.post('/api/posts', function(req, res) {
  console.log('Creating new post.');
  var post = {
    '_id': Math.round(Math.random() * 100000),
    'username': req.body.username,
    'text': req.body.text,
    'avatar': req.body.avatar,
    'favorite': Boolean(req.body.favorite)
  }
  posts.push(post);
  res.send(post);
});

app.get('/api/posts/:id', function(req, res) {
  var post = getPost(req.params.id);
  if (post) {
    res.send(post);
  }
  else {
    res.send(404, 'Post ' + req.params.id + ' Not Found');
  }
});

app.put('/api/posts/:id', function(req, res) {
  console.log('Updating post with id: ' + req.params.id);
  var post = getPost(req.params.id);

  if (post) {
    console.log('  Post ' + post._id + ' found. Updating ' + post.username + '.');
    post.username = req.body.username;
    post.text = req.body.text;
    post.avatar = req.body.avatar;
    post.favorite = req.body.favorite;
    res.send(post);
  }
  else {
    res.send(404, 'Post ' + req.params.id + ' Not Found');
  }
});

app.delete('/api/posts/:id', function(req, res) {
  console.log('Deleting post with id: ' + req.params.id);

  if (deletePost(req.params.id) == true) {
    return res.send('Deleted ' + req.params.id);
  }
  else {
    res.send(404, 'Post ' + req.params.id + ' Not Found');
  }
});

// start the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
