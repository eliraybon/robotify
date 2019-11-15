# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

robotify = User.create(email: 'robotify@robots.com', password:'beepboop')
eli = User.create(email: 'eli@eli.com', password:'fullstack')
demoUser = User.create(email: 'demo-user@robotify.com', password: 'robotifyrocks')

tangerine = Artist.create(name: 'Tangerine Dream')
flaming_lips = Artist.create(name: 'The Flaming Lips')
wilco = Artist.create(name: 'Wilco')
test = Artist.create(name: 'Disconscious')

yoshimi = flaming_lips.albums.create(
  title: 'Yoshimi Battles the Pink Robots', 
  release_date: '2002',
  genre: 'Alternative'
)

phaedra = tangerine.albums.create(
  title: 'Phaedra', 
  release_date: '08/10/1974', 
  genre: 'Electronic'
)

foxtrot = wilco.albums.create(
  title: 'Summerteeth',
  release_date: '1999',
  genre: 'Rock'
)

hologram = test.albums.create(
  title: 'Hologram Plaza',
  release_date: '2014',
  genre: 'Alternative'
)

hologram_cover = open('https://robotify-development.s3.amazonaws.com/cover.jpg')
hologram.cover.attach(io: hologram_cover, filename: 'cover.jpg')

song_1 = hologram.songs.create(title: 'Elevator Up', runtime: '0:51')
song_2 = hologram.songs.create(title: 'Enter Through the Lobby', runtime: '4:48')

track_1 = open('https://robotify-development.s3.amazonaws.com/Disconscious+-+Hologram+Plaza+-+01+Elevator+Up.mp3')
song_1.track.attach(io: track_1, filename: 'Disconscious+-+Hologram+Plaza+-+01+Elevator+Up.mp3')

track_2 = open('https://robotify-development.s3.amazonaws.com/Disconscious+-+Hologram+Plaza+-+02+Enter+Through+the+Lobby.mp3')
song_2.track.attach(io: track_2, filename: 'Disconscious+-+Hologram+Plaza+-+02+Enter+Through+the+Lobby.mp3')



phaedra.songs.create(title: 'Phaedra', runtime: '17:32')
phaedra.songs.create(title: 'Mysterious Semblance at the Strand of Nightmares', runtime: '9:41')
phaedra.songs.create(title: 'Movements of a Visionary', runtime: '7:54')
phaedra.songs.create(title: 'Sequent C', runtime: '2:16')

yoshimi.songs.create(title: 'Fight Test', runtime: '4:14')
yoshimi.songs.create(title: 'One More Robot', runtime: '4:59')
yoshimi.songs.create(title: 'Yoshimi Battles the Pink Robots, Pt. 1', runtime: '4:46')

foxtrot.songs.create(title: 'Kamera', runtime: '3:30')
foxtrot.songs.create(title: 'Jesus, etc.', runtime: '3:52')
foxtrot.songs.create(title: 'Pot Kettle Black', runtime: '4:01')

beep = robotify.playlists.create(title: 'Beep Boop Bops')
great_songs = demoUser.playlists.create(title: 'DB Test')

phaedra.songs.each { |song| beep.songs.push(song) }
yoshimi.songs.each { |song| beep.songs.push(song) }

great_songs.songs << foxtrot.songs.last
great_songs.songs << yoshimi.songs.first
great_songs.songs << yoshimi.songs.last

demoUser.followed_accounts.create(followable_id: 1, followable_type: 'User')
demoUser.followed_accounts.create(followable_id: 1, followable_type: 'Artist')
demoUser.followed_accounts.create(followable_id: 3, followable_type: 'Artist')

demoUser.likes.create(likeable_id: 2, likeable_type: 'Song')
demoUser.likes.create(likeable_id: 4, likeable_type: 'Song')
demoUser.likes.create(likeable_id: 5, likeable_type: 'Song')
demoUser.likes.create(likeable_id: 1, likeable_type: 'Playlist')
demoUser.likes.create(likeable_id: 2, likeable_type: 'Album')

