# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

robotify = User.create(email: 'robotify@robots.com', password:'beepboop')
eli = User.create(email: 'eli@eli.com', password:'fullstack')
demoUser = User.create(email: 'demo-user@robotify.com', password: 'robotifyrocks')

tangerine = Artist.create(name: 'Tangerine Dream')
flaming_lips = Artist.create(name: 'The Flaming Lips')
wilco = Artist.create(name: 'Wilco')
eliraybon = Artist.create(name: 'Eli Raybon')

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

supertoys = eliraybon.albums.create(
  title: 'Supertoys',
  release_date: '07/12/2019',
  genre: 'Alternative'
)

supertoys_cover = File.open(image_url('supertoys.jpg'))
supertoys.cover.attach(io: supertoys_cover, filename: 'supertoys.jpg')

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

battery_brain = supertoys.songs.create(title: 'Battery Brain', runtime: '4:51')
# track = File.open("/Users/eliraybon/app/robotify_assets/battery_brain.mp3")
# battery_brain.track.attach(io: track, filename: 'battery_brain.mp3')

beep = robotify.playlists.create(title: 'Beep Boop Bops')
great_songs = eli.playlists.create(title: 'DB Test')

phaedra.songs.each { |song| beep.songs.push(song) }
yoshimi.songs.each { |song| beep.songs.push(song) }

great_songs.songs << foxtrot.songs.last
great_songs.songs << yoshimi.songs.first
great_songs.songs << yoshimi.songs.last

eli.followed_accounts.create(followable_id: 1, followable_type: 'User')
eli.followed_accounts.create(followable_id: 1, followable_type: 'Artist')
eli.followed_accounts.create(followable_id: 3, followable_type: 'Artist')

eli.likes.create(likeable_id: 2, likeable_type: 'Song')
eli.likes.create(likeable_id: 4, likeable_type: 'Song')
eli.likes.create(likeable_id: 5, likeable_type: 'Song')
eli.likes.create(likeable_id: 1, likeable_type: 'Playlist')
eli.likes.create(likeable_id: 2, likeable_type: 'Album')

