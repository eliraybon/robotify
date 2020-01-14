<p align="center">
  <a href="http://robotifymusic.herokuapp.com/">
    <img height="200px" src="https://github.com/eliraybon/robotify/blob/master/app/assets/images/robotify.png">
  </a>
</p>

# <h1 align="center">Robotify</h1>

[Live Link](http://robotifymusic.herokuapp.com/)

Robotify is a Spotify clone with a focus on sci-fi and retro-futuristic music. It was built with React/Redux and Rails. 

<p align="center">
  <img src="https://github.com/eliraybon/robotify/blob/master/app/assets/images/splash.png">
</p>


## Technologies 
-  Javascript (React/Redux)
-  Ruby/Rails
-  PostgresSQL
-  HTML
-  SCSS
-  jQuery (for AJAX requests)
-  jBuilder (for formatting JSON)
-  BCrypt (for user authentication)
-  AWS S3

## Features
-  A fully-featured music player
-  Creating and editing your own playlists 
-  Building a library of your favorite music for easy access 
-  Searching to discover new music 
-  User Authentication

<p align="center">
  <img src="https://github.com/eliraybon/robotify/blob/master/app/assets/images/browse.png">
</p>

The music player gives you the ability the play/pause and skip songs, as well as shuffle and repeat. When browsing the app, users can add music to the queue for continuous listening. 

<p align="center">
  <img src="https://github.com/eliraybon/robotify/blob/master/app/assets/images/playlist.png">
</p>

Users can create and update their own playlists, as well as cover images to go along with them. 


<p align="center">
  <img src="https://github.com/eliraybon/robotify/blob/master/app/assets/images/album.png">
</p>


Songs are found everywhere in this application, and a key piece of information that songs hold is whether or not they have been liked by the current user. It's important to include this information when sending song data to the front-end to be rendered. The obvious way to check this is:

```ruby
json.isLiked current_user.liked_songs.include?(song)
```

Here, I'm looping over the current user's liked songs to see if we find the song in question. That's not so bad right? Well... If a user has 1000 liked songs and we want to render a playlist that has 200 songs in it, we could end up checking 200000 items. Yikes. 

I knew there had to be a way to beat linear time here, and came up with a quick solution: 

```ruby 
json.isLiked !!Like.find_by(
  user_id: current_user.id,
  likeable_id: album.id,
  likeable_type: 'Album'
)
```

Instead of looping over all the user's liked songs, I'm using the Rails ```find_by``` method to make a SQL query directly in the ```likes``` table. I already had an index on this combination of columns (to add a uniqueness constraint on likes), so this query runs in logarithmic time. A simple change, but one that has major impacts on performance at scale.


