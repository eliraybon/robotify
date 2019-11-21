# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

robotify = User.create(email: 'robotify@robots.com', password:'beepboop')
demoUser = User.create(email: 'demo-user@robotify.com', password: 'robotifyrocks')


test = Artist.create(name: 'Disconscious')
test_profile = open('https://robotify-development.s3.amazonaws.com/artists/dis.jpg')
test.profile_img.attach(io: test_profile, filename: 'dis.jpg')

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


# phaedra.songs.create(title: 'Phaedra', runtime: '17:32')
# phaedra.songs.create(title: 'Mysterious Semblance at the Strand of Nightmares', runtime: '9:41')
# phaedra.songs.create(title: 'Movements of a Visionary', runtime: '7:54')
# phaedra.songs.create(title: 'Sequent C', runtime: '2:16')

# yoshimi.songs.create(title: 'Fight Test', runtime: '4:14')
# yoshimi.songs.create(title: 'One More Robot', runtime: '4:59')
# yoshimi.songs.create(title: 'Yoshimi Battles the Pink Robots, Pt. 1', runtime: '4:46')

# foxtrot.songs.create(title: 'Kamera', runtime: '3:30')
# foxtrot.songs.create(title: 'Jesus, etc.', runtime: '3:52')
# foxtrot.songs.create(title: 'Pot Kettle Black', runtime: '4:01')

# beep = robotify.playlists.create(title: 'Beep Boop Bops')
# great_songs = demoUser.playlists.create(title: 'DB Test')

# phaedra.songs.each { |song| beep.songs.push(song) }
# yoshimi.songs.each { |song| beep.songs.push(song) }

# great_songs.songs << foxtrot.songs.last
# great_songs.songs << yoshimi.songs.first
# great_songs.songs << yoshimi.songs.last

# demoUser.followed_accounts.create(followable_id: 1, followable_type: 'User')
# demoUser.followed_accounts.create(followable_id: 1, followable_type: 'Artist')
# demoUser.followed_accounts.create(followable_id: 3, followable_type: 'Artist')

# demoUser.likes.create(likeable_id: 2, likeable_type: 'Song')
# demoUser.likes.create(likeable_id: 4, likeable_type: 'Song')
# demoUser.likes.create(likeable_id: 5, likeable_type: 'Song')
# demoUser.likes.create(likeable_id: 1, likeable_type: 'Playlist')
# demoUser.likes.create(likeable_id: 2, likeable_type: 'Album')


#official seed file starts here 

cat = Artist.create(name: '猫 シ Corp.')
cat_profile = open('https://robotify-development.s3.amazonaws.com/artists/cat.jpg')
cat.profile_img.attach(io: cat_profile, filename: 'cat.jpg')

palm_mall = cat.albums.create(
  title: 'Palm Mall',
  release_date: '2014',
  genre: 'Mallsoft'
)

palm_mall.songs.create(title: 'Palm Mall', runtime: '22:22')
palm_mall.songs.create(title: 'Endless 通路 (with CVLTVRE)', runtime: '3:27')
palm_mall.songs.create(title: 'Special Discount', runtime: '1:56')
palm_mall.songs.create(title: 'First Floor', runtime: '2:19')
palm_mall.songs.create(title: 'Congratulatory Message (with Patrol1993)', runtime: '2:04')
palm_mall.songs.create(title: 'Second Floor', runtime: '2:04')
palm_mall.songs.create(title: 'Ｉ ｃｏｎｓｕｍｅ, ｔｈｅｒｅｆｏｒｅ Ｉ ａｍ', runtime: '3:00')
palm_mall.songs.create(title: 'Employees Only (with GōsutoMall)', runtime: '2:36')
palm_mall.songs.create(title: 'Veni, Vidi, Emi', runtime: '4:56')

palm_cover = open('https://robotify-development.s3.amazonaws.com/palm_mall/cover.jpg')
palm_mall.cover.attach(io: palm_cover, filename: 'cover.jpg')

palm_1 = open('https://robotify-development.s3.amazonaws.com/palm_mall/%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+01+Palm+Mall.mp3')
palm_mall.songs[0].track.attach(io: palm_1, filename: '%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+01+Palm+Mall.mp3')

palm_2 = open('https://robotify-development.s3.amazonaws.com/palm_mall/%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+02+Endless+%E9%80%9A%E8%B7%AF+(with+CVLTVRE).mp3')
palm_mall.songs[1].track.attach(io: palm_2, filename: '%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+02+Endless+%E9%80%9A%E8%B7%AF+(with+CVLTVRE).mp3')

palm_3 = open('https://robotify-development.s3.amazonaws.com/palm_mall/%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+03+Special+Discount.mp3')
palm_mall.songs[2].track.attach(io: palm_3, filename: '%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+03+Special+Discount.mp3')

palm_4 = open('https://robotify-development.s3.amazonaws.com/palm_mall/%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+04+First+Floor.mp3')
palm_mall.songs[3].track.attach(io: palm_4, filename: '%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+04+First+Floor.mp3')

palm_5 = open('https://robotify-development.s3.amazonaws.com/palm_mall/%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+05+Congratulatory+Message+(with+Patrol1993).mp3')
palm_mall.songs[4].track.attach(io: palm_5, filename: '%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+05+Congratulatory+Message+(with+Patrol1993).mp3')

palm_6 = open('https://robotify-development.s3.amazonaws.com/palm_mall/%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+06+Second+Floor.mp3')
palm_mall.songs[5].track.attach(io: palm_6, filename: '%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+06+Second+Floor.mp3')

palm_7 = open('https://robotify-development.s3.amazonaws.com/palm_mall/%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+07+%EF%BC%A9+%EF%BD%83%EF%BD%8F%EF%BD%8E%EF%BD%93%EF%BD%95%EF%BD%8D%EF%BD%85%2C+%EF%BD%94%EF%BD%88%EF%BD%85%EF%BD%92%EF%BD%85%EF%BD%86%EF%BD%8F%EF%BD%92%EF%BD%85+%EF%BC%A9+%EF%BD%81%EF%BD%8D.mp3')
palm_mall.songs[6].track.attach(io: palm_7, filename: '%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+07+%EF%BC%A9+%EF%BD%83%EF%BD%8F%EF%BD%8E%EF%BD%93%EF%BD%95%EF%BD%8D%EF%BD%85%2C+%EF%BD%94%EF%BD%88%EF%BD%85%EF%BD%92%EF%BD%85%EF%BD%86%EF%BD%8F%EF%BD%92%EF%BD%85+%EF%BC%A9+%EF%BD%81%EF%BD%8D.mp3')

palm_8 = open('https://robotify-development.s3.amazonaws.com/palm_mall/%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+08+Employees+Only+(with+G%C5%8DsutoMall).mp3')
palm_mall.songs[7].track.attach(io: palm_8, filename: '%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+08+Employees+Only+(with+G%C5%8DsutoMall).mp3')

palm_9 = open('https://robotify-development.s3.amazonaws.com/palm_mall/%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+09+Veni%2C+Vidi%2C+Emi.mp3')
palm_mall.songs[8].track.attach(io: palm_9, filename: '%E7%8C%AB+%E3%82%B7+Corp.+-+Palm+Mall+-+09+Veni%2C+Vidi%2C+Emi.mp3')

mall2 = cat.albums.create(
  title: '家族. 劳动. 쇼핑.',
  release_date: '2018',
  genre: 'Mallsoft'
)

mall2_cover = open('https://robotify-development.s3.amazonaws.com/cat2/cover.png')
mall2.cover.attach(io: mall2_cover, filename: 'cover.png')

mall2.songs.create(title: 'Intro', runtime: '1:21')
mall2.songs.create(title: 'FORUMヘルシンキ', runtime: '6:55')
mall2.songs.create(title: 'NüロビーΑτλαντίς', runtime: '5:33')
mall2.songs.create(title: 'Area 7 Recreational Facilities', runtime: '3:58')
mall2.songs.create(title: 'ALITA CITY Seadome', runtime: '7:13')
mall2.songs.create(title: 'Mesa Times', runtime: '3:35')

mall_1 = open('https://robotify-development.s3.amazonaws.com/cat2/1.mp3')
mall2.songs[0].track.attach(io: mall_1, filename: '1.mp3')

mall_2 = open('https://robotify-development.s3.amazonaws.com/cat2/2.mp3')
mall2.songs[1].track.attach(io: mall_2, filename: '2.mp3')

mall_3 = open('https://robotify-development.s3.amazonaws.com/cat2/3.mp3')
mall2.songs[2].track.attach(io: mall_3, filename: '3.mp3')

mall_4 = open('https://robotify-development.s3.amazonaws.com/cat2/4.mp3')
mall2.songs[3].track.attach(io: mall_4, filename: '4.mp3')

mall_5 = open('https://robotify-development.s3.amazonaws.com/cat2/5.mp3')
mall2.songs[4].track.attach(io: mall_5, filename: '5.mp3')

mall_6 = open('https://robotify-development.s3.amazonaws.com/cat2/6.mp3')
mall2.songs[5].track.attach(io: mall_6, filename: '6.mp3')

boot = cat.albums.create(
  title: 'スタートキーを押し',
  release_date: '2013',
  genre: 'Vaporwave'
)

boot_cover = open('https://robotify-development.s3.amazonaws.com/cat3/cover.png')
boot.cover.attach(io: boot_cover, filename: 'cover.png')

boot.songs.create(title: 'Workbench 98', runtime: '1:13')
boot.songs.create(title: 'Installation Wizard', runtime: '0:50')
boot.songs.create(title: 'フリー Aquarium Screensaver フリー', runtime: '1:24')
boot.songs.create(title: '4x Speed CD-ROM', runtime: '0:20')
boot.songs.create(title: 'Loading...', runtime: '1:21')
boot.songs.create(title: 'FOREST THEME', runtime: '1:06')
boot.songs.create(title: 'FLOPPY 生存', runtime: '0:49')
boot.songs.create(title: 'Surf the World インターネットカフェ', runtime: '1:51')
boot.songs.create(title: 'FREE Toolbar included', runtime: '0:43')
boot.songs.create(title: 'Virtual Reality?', runtime: '2:38')
boot.songs.create(title: 'Cat System Corp Customer Service', runtime: '2:28')
boot.songs.create(title: 'Trojan.Win32', runtime: '1:06')
boot.songs.create(title: 'Thank you for using 猫 シ Corp. ', runtime: '1:02')

boot_1 = open('https://robotify-development.s3.amazonaws.com/cat3/1.mp3')
boot.songs[0].track.attach(io: boot_1, filename: '1.mp3')

boot_2 = open('https://robotify-development.s3.amazonaws.com/cat3/2.mp3')
boot.songs[1].track.attach(io: boot_2, filename: '2.mp3')

boot_3 = open('https://robotify-development.s3.amazonaws.com/cat3/3.mp3')
boot.songs[2].track.attach(io: boot_3, filename: '3.mp3')

boot_4 = open('https://robotify-development.s3.amazonaws.com/cat3/4.mp3')
boot.songs[3].track.attach(io: boot_4, filename: '4.mp3')

boot_5 = open('https://robotify-development.s3.amazonaws.com/cat3/5.mp3')
boot.songs[4].track.attach(io: boot_5, filename: '5.mp3')

boot_6 = open('https://robotify-development.s3.amazonaws.com/cat3/6.mp3')
boot.songs[5].track.attach(io: boot_6, filename: '6.mp3')

boot_7 = open('https://robotify-development.s3.amazonaws.com/cat3/7.mp3')
boot.songs[6].track.attach(io: boot_7, filename: '7.mp3')

boot_8 = open('https://robotify-development.s3.amazonaws.com/cat3/8.mp3')
boot.songs[7].track.attach(io: boot_8, filename: '8.mp3')

boot_9 = open('https://robotify-development.s3.amazonaws.com/cat3/9.mp3')
boot.songs[8].track.attach(io: boot_9, filename: '9.mp3')

boot_10 = open('https://robotify-development.s3.amazonaws.com/cat3/10.mp3')
boot.songs[9].track.attach(io: boot_10, filename: '10.mp3')

boot_11 = open('https://robotify-development.s3.amazonaws.com/cat3/11.mp3')
boot.songs[10].track.attach(io: boot_11, filename: '11.mp3')

boot_12 = open('https://robotify-development.s3.amazonaws.com/cat3/12.mp3')
boot.songs[11].track.attach(io: boot_12, filename: '12.mp3')

boot_13 = open('https://robotify-development.s3.amazonaws.com/cat3/13.mp3')
boot.songs[12].track.attach(io: boot_13, filename: '13.mp3')

cat4 = cat.albums.create(
  title: "A class in​​.​​​.​​​.​​ CRYPTO CURRENCY",
  release_date: '2018',
  genre: 'Vaporwave'
)

cat4_cover = open('https://robotify-development.s3.amazonaws.com/cat4/cover.jpg')
cat4.cover.attach(io: cat4_cover, filename: 'cover.jpg')

cat4.songs.create(title: 'Installation and Introduction music', runtime: '0:57')
cat4.songs.create(title: 'A Class In...CRYPTOCURRENCY', runtime: '2:32')
cat4.songs.create(title: 'WonderWallet.exe', runtime: '1:14')
cat4.songs.create(title: 'To The Moon!', runtime: '1:40')
cat4.songs.create(title: 'Mining Your Own Coins', runtime: '1:44')
cat4.songs.create(title: 'Bitcoin Bubble', runtime: '1:19')
cat4.songs.create(title: 'Keep Calm And Hodl', runtime: '1:30')
cat4.songs.create(title: 'Litecoin Luxury and Monero Millionaire', runtime: '1:18')

cat4_1 = open('https://robotify-development.s3.amazonaws.com/cat4/1.mp3')
cat4.songs[0].track.attach(io: cat4_1, filename: '1.mp3')

cat4_2 = open('https://robotify-development.s3.amazonaws.com/cat4/2.mp3')
cat4.songs[1].track.attach(io: cat4_2, filename: '2.mp3')

cat4_3 = open('https://robotify-development.s3.amazonaws.com/cat4/3.mp3')
cat4.songs[2].track.attach(io: cat4_3, filename: '3.mp3')

cat4_4 = open('https://robotify-development.s3.amazonaws.com/cat4/4.mp3')
cat4.songs[3].track.attach(io: cat4_4, filename: '4.mp3')

cat4_5 = open('https://robotify-development.s3.amazonaws.com/cat4/5.mp3')
cat4.songs[4].track.attach(io: cat4_5, filename: '5.mp3')

cat4_6 = open('https://robotify-development.s3.amazonaws.com/cat4/6.mp3')
cat4.songs[5].track.attach(io: cat4_6, filename: '6.mp3')

cat4_7 = open('https://robotify-development.s3.amazonaws.com/cat4/7.mp3')
cat4.songs[6].track.attach(io: cat4_7, filename: '7.mp3')

cat4_8 = open('https://robotify-development.s3.amazonaws.com/cat4/8.mp3')
cat4.songs[7].track.attach(io: cat4_8, filename: '8.mp3')




pepsi = Artist.create(name: 'Saint Pepsi')
pepsi_profile = open('https://robotify-development.s3.amazonaws.com/artists/pepsi.jpg')
pepsi.profile_img.attach(io: pepsi_profile, filename: 'pepsi.jpg')

hit_vibes = pepsi.albums.create(
  title: 'Hit Vibes',
  release_date: '2013',
  genre: 'Future Funk'
)

hit_vibes.songs.create(title: 'Hit Vibes', runtime: '1:01')
hit_vibes.songs.create(title: 'Have Faith', runtime: '2:52')
hit_vibes.songs.create(title: 'Better', runtime: '3:53')
hit_vibes.songs.create(title: 'Cherry Pepsi', runtime: '3:07')
hit_vibes.songs.create(title: 'Together', runtime: '2:25')
hit_vibes.songs.create(title: 'Around', runtime: '3:02')
hit_vibes.songs.create(title: 'Skylar Spence', runtime: '3:38')
hit_vibes.songs.create(title: 'Interlude', runtime: '1:15')
hit_vibes.songs.create(title: 'I Tried', runtime: '2:40')
hit_vibes.songs.create(title: 'Strawberry Lemonade', runtime: '3:55')
hit_vibes.songs.create(title: 'Fantasy', runtime: '3:34')
hit_vibes.songs.create(title: 'Miss You', runtime: '4:08')
hit_vibes.songs.create(title: 'Outro', runtime: '1:02')

vibes_cover = open('https://robotify-development.s3.amazonaws.com/hit_vibes/cover.png')
hit_vibes.cover.attach(io: vibes_cover, filename: 'cover.png')

vibes_1 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+01+Hit+Vibes.mp3')
hit_vibes.songs[0].track.attach(io: vibes_1, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+01+Hit+Vibes.mp3')

vibes_2 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+02+Have+Faith.mp3')
hit_vibes.songs[1].track.attach(io: vibes_2, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+02+Have+Faith.mp3')

vibes_3 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+03+Better.mp3')
hit_vibes.songs[2].track.attach(io: vibes_3, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+03+Better.mp3')

vibes_4 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+04+Cherry+Pepsi.mp3')
hit_vibes.songs[3].track.attach(io: vibes_4, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+04+Cherry+Pepsi.mp3')

vibes_5 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+05+Together.mp3')
hit_vibes.songs[4].track.attach(io: vibes_5, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+05+Together.mp3')

vibes_6 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+06+Around.mp3')
hit_vibes.songs[5].track.attach(io: vibes_6, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+06+Around.mp3')

vibes_7 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+07+Skylar+Spence.mp3')
hit_vibes.songs[6].track.attach(io: vibes_7, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+07+Skylar+Spence.mp3')

vibes_8 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+08+Interlude.mp3')
hit_vibes.songs[7].track.attach(io: vibes_8, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+08+Interlude.mp3')

vibes_9 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+09+I+Tried.mp3')
hit_vibes.songs[8].track.attach(io: vibes_9, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+09+I+Tried.mp3')

vibes_10 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+10+Strawberry+Lemonade.mp3')
hit_vibes.songs[8].track.attach(io: vibes_10, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+10+Strawberry+Lemonade.mp3')

vibes_11 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+11+Fantasy.mp3')
hit_vibes.songs[8].track.attach(io: vibes_11, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+11+Fantasy.mp3')

vibes_12 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+12+Miss+You.mp3')
hit_vibes.songs[8].track.attach(io: vibes_12, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+12+Miss+You.mp3')

vibes_13 = open('https://robotify-development.s3.amazonaws.com/hit_vibes/SAINT+PEPSI+-+Hit+Vibes+-+13+Outro.mp3')
hit_vibes.songs[8].track.attach(io: vibes_13, filename: 'SAINT+PEPSI+-+Hit+Vibes+-+13+Outro.mp3')

lux = Artist.create(name: 'Luxury Elite')
lux_profile = open('https://robotify-development.s3.amazonaws.com/artists/luxury.jpg')
lux.profile_img.attach(io: lux_profile, filename: 'luxury.jpg')

world_class = lux.albums.create(
  title: 'World Class',
  release_date: '2015',
  genre: 'Vaporwave'
)

world_class.songs.create(title: 'S.W.A.K.', runtime: '3:54')
world_class.songs.create(title: 'Parkway', runtime: '3:09')
world_class.songs.create(title: 'Parliament Blue', runtime: '1:52')
world_class.songs.create(title: 'Attitude', runtime: '3:18')
world_class.songs.create(title: 'To Bruce', runtime: '2:54')
world_class.songs.create(title: 'Crystal', runtime: '2:07')
world_class.songs.create(title: 'Upscale', runtime: '1:58')
world_class.songs.create(title: 'Blush', runtime: '2:42')
world_class.songs.create(title: 'Express', runtime: '1:55')
world_class.songs.create(title: 'Strut', runtime: '1:51')
world_class.songs.create(title: 'Marble', runtime: '1:41')
world_class.songs.create(title: 'Cool', runtime: '3:01')
world_class.songs.create(title: 'Forever', runtime: '2:55')
world_class.songs.create(title: 'Signal', runtime: '2:54')

world_cover = open('https://robotify-development.s3.amazonaws.com/world_class/cover.png')
world_class.cover.attach(io: world_cover, filename: 'cover.png')

world_1 = open('https://robotify-development.s3.amazonaws.com/world_class/Luxury+Elite+-+World+Class+-+01+S.W.A.K..mp3')
world_class.songs[0].track.attach(io: world_1, filename: 'Luxury+Elite+-+World+Class+-+01+S.W.A.K..mp3')

world_2 = open('https://robotify-development.s3.amazonaws.com/world_class/Luxury+Elite+-+World+Class+-+02+Parkway.mp3')
world_class.songs[1].track.attach(io: world_2, filename: 'Luxury+Elite+-+World+Class+-+02+Parkway.mp3')

world_3 = open('https://robotify-development.s3.amazonaws.com/world_class/Luxury+Elite+-+World+Class+-+03+Parliament+Blue.mp3')
world_class.songs[2].track.attach(io: world_3, filename: 'Luxury+Elite+-+World+Class+-+03+Parliament+Blue.mp3')

world_4 = open('https://robotify-development.s3.amazonaws.com/world_class/Luxury+Elite+-+World+Class+-+04+Attitude.mp3')
world_class.songs[3].track.attach(io: world_4, filename: 'Luxury+Elite+-+World+Class+-+04+Attitude.mp3')

world_5 = open('https://robotify-development.s3.amazonaws.com/world_class/Luxury+Elite+-+World+Class+-+05+To+Bruce.mp3')
world_class.songs[4].track.attach(io: world_5, filename: 'Luxury+Elite+-+World+Class+-+05+To+Bruce.mp3')

world_6 = open('https://robotify-development.s3.amazonaws.com/world_class/Luxury+Elite+-+World+Class+-+06+Crystal.mp3')
world_class.songs[5].track.attach(io: world_6, filename: 'Luxury+Elite+-+World+Class+-+06+Crystal.mp3')

world_7 = open('https://robotify-development.s3.amazonaws.com/world_class/Luxury+Elite+-+World+Class+-+07+Upscale.mp3')
world_class.songs[6].track.attach(io: world_7, filename: 'Luxury+Elite+-+World+Class+-+07+Upscale.mp3')


desired = Artist.create(name: 'Desired')
desired_profile = open('https://robotify-development.s3.amazonaws.com/artists/desired.jpg')
desired.profile_img.attach(io: desired_profile, filename: 'desired.jpg')

timeless = desired.albums.create(
  title: 'Timeless',
  release_date: '2018',
  genre: 'Future Funk'
)

timeless_cover = open('https://robotify-development.s3.amazonaws.com/timeless/cover.png')
timeless.cover.attach(io: timeless_cover, filename: 'cover.png')

timeless.songs.create(title: 'Timeless', runtime: '3:47')
timeless.songs.create(title: 'Sunshine City', runtime: '2:02')
timeless.songs.create(title: 'Wake Up', runtime: '2:42')
timeless.songs.create(title: 'Pink Jacket', runtime: '2:47')
timeless.songs.create(title: 'I Want You', runtime: '2:33')
timeless.songs.create(title: 'Video Girl Yukiko', runtime: '2:30')
timeless.songs.create(title: 'Honey Bunny', runtime: '3:33')
timeless.songs.create(title: 'Magic', runtime: '3:10')
timeless.songs.create(title: 'Dreamland', runtime: '3:24')
timeless.songs.create(title: 'Rainy Night', runtime: '2:29')

time_1 = open('https://robotify-development.s3.amazonaws.com/timeless/1.mp3')
timeless.songs[0].track.attach(io: time_1, filename: '1.mp3')

time_2 = open('https://robotify-development.s3.amazonaws.com/timeless/2.mp3')
timeless.songs[1].track.attach(io: time_2, filename: '2.mp3')

time_3 = open('https://robotify-development.s3.amazonaws.com/timeless/3.mp3')
timeless.songs[2].track.attach(io: time_3, filename: '3.mp3')

time_4 = open('https://robotify-development.s3.amazonaws.com/timeless/4.mp3')
timeless.songs[3].track.attach(io: time_4, filename: '4.mp3')

time_5 = open('https://robotify-development.s3.amazonaws.com/timeless/5.mp3')
timeless.songs[4].track.attach(io: time_5, filename: '5.mp3')

time_6 = open('https://robotify-development.s3.amazonaws.com/timeless/6.mp3')
timeless.songs[5].track.attach(io: time_6, filename: '6.mp3')

time_7 = open('https://robotify-development.s3.amazonaws.com/timeless/7.mp3')
timeless.songs[6].track.attach(io: time_7, filename: '7.mp3')

time_8 = open('https://robotify-development.s3.amazonaws.com/timeless/8.mp3')
timeless.songs[7].track.attach(io: time_8, filename: '8.mp3')

time_9 = open('https://robotify-development.s3.amazonaws.com/timeless/9.mp3')
timeless.songs[8].track.attach(io: time_9, filename: '9.mp3')

time_10 = open('https://robotify-development.s3.amazonaws.com/timeless/10.mp3')
timeless.songs[9].track.attach(io: time_10, filename: '10.mp3')

dream = desired.albums.create(
  title: 'The Sweetest Dream',
  release_date: '2017',
  genre: 'Future Funk'
)

dream_cover = open('https://robotify-development.s3.amazonaws.com/dream/cover.png')
dream.cover.attach(io: dream_cover, filename: 'cover.png')

dream.songs.create(title: 'Intro', runtime: '0:47')
dream.songs.create(title: 'The Sweetest Dream', runtime: '3:04')
dream.songs.create(title: 'Get Rdy', runtime: '2:00')
dream.songs.create(title: 'Midnight Dance', runtime: '3:23')
dream.songs.create(title: 'Eyes On Me', runtime: '3:40')
dream.songs.create(title: 'I Love You So', runtime: '2:54')
dream.songs.create(title: 'Second Chance', runtime: '4:00')
dream.songs.create(title: 'Moonlight Queen', runtime: '2:56')
dream.songs.create(title: 'Love Is Gone (Feat. 悲しい Android - Apartment)', runtime: '3:30')
dream.songs.create(title: 'Magical Cruise', runtime: '3:16')
dream.songs.create(title: 'Shooting Star', runtime: '3:01')

dream_1 = open('https://robotify-development.s3.amazonaws.com/dream/1.mp3')
dream.songs[0].track.attach(io: dream_1, filename: '1.mp3')

dream_2 = open('https://robotify-development.s3.amazonaws.com/dream/2.mp3')
dream.songs[1].track.attach(io: dream_2, filename: '2.mp3')

dream_3 = open('https://robotify-development.s3.amazonaws.com/dream/3.mp3')
dream.songs[2].track.attach(io: dream_3, filename: '3.mp3')

dream_4 = open('https://robotify-development.s3.amazonaws.com/dream/4.mp3')
dream.songs[3].track.attach(io: dream_4, filename: '4.mp3')

dream_5 = open('https://robotify-development.s3.amazonaws.com/dream/5.mp3')
dream.songs[4].track.attach(io: dream_5, filename: '5.mp3')

dream_6 = open('https://robotify-development.s3.amazonaws.com/dream/6.mp3')
dream.songs[5].track.attach(io: dream_6, filename: '6.mp3')

dream_7 = open('https://robotify-development.s3.amazonaws.com/dream/7.mp3')
dream.songs[6].track.attach(io: dream_7, filename: '7.mp3')

dream_8 = open('https://robotify-development.s3.amazonaws.com/dream/8.mp3')
dream.songs[7].track.attach(io: dream_8, filename: '8.mp3')

dream_9 = open('https://robotify-development.s3.amazonaws.com/dream/9.mp3')
dream.songs[8].track.attach(io: dream_9, filename: '9.mp3')

dream_10 = open('https://robotify-development.s3.amazonaws.com/dream/10.mp3')
dream.songs[9].track.attach(io: dream_10, filename: '10.mp3')

dream_11 = open('https://robotify-development.s3.amazonaws.com/dream/11.mp3')
dream.songs[10].track.attach(io: dream_11, filename: '11.mp3')

plastic = desired.albums.create(
  title: 'PLASTIC WHATEVER',
  release_date: '2018',
  genre: 'Future Funk'
)

plastic_cover = open('https://robotify-development.s3.amazonaws.com/plastic/cover.png')
plastic.cover.attach(io: plastic_cover, filename: 'cover.png')

plastic.songs.create(title: "Can't Find Out", runtime: '2:25')
plastic.songs.create(title: 'Plastic Life', runtime: '2:45')
plastic.songs.create(title: 'Hotel 1987', runtime: '2:16')
plastic.songs.create(title: 'Neon Maze', runtime: '3:04')
plastic.songs.create(title: 'Distorted Silhouette', runtime: '2:28')
plastic.songs.create(title: 'Love Letter (For You)', runtime: '2:42')
plastic.songs.create(title: 'FM Towns Girl', runtime: '1:48')
plastic.songs.create(title: 'Commercial Break', runtime: '0:37')

plastic_1 = open('https://robotify-development.s3.amazonaws.com/plastic/1.mp3')
plastic.songs[0].track.attach(io: plastic_1, filename: '1.mp3')

plastic_2 = open('https://robotify-development.s3.amazonaws.com/plastic/2.mp3')
plastic.songs[1].track.attach(io: plastic_2, filename: '2.mp3')

plastic_3 = open('https://robotify-development.s3.amazonaws.com/plastic/3.mp3')
plastic.songs[2].track.attach(io: plastic_3, filename: '3.mp3')

plastic_4 = open('https://robotify-development.s3.amazonaws.com/plastic/4.mp3')
plastic.songs[3].track.attach(io: plastic_4, filename: '4.mp3')

plastic_5 = open('https://robotify-development.s3.amazonaws.com/plastic/5.mp3')
plastic.songs[4].track.attach(io: plastic_5, filename: '5.mp3')

plastic_6 = open('https://robotify-development.s3.amazonaws.com/plastic/6.mp3')
plastic.songs[5].track.attach(io: plastic_6, filename: '6.mp3')

plastic_7 = open('https://robotify-development.s3.amazonaws.com/plastic/7.mp3')
plastic.songs[6].track.attach(io: plastic_7, filename: '7.mp3')

plastic_8 = open('https://robotify-development.s3.amazonaws.com/plastic/8.mp3')
plastic.songs[7].track.attach(io: plastic_8, filename: '8.mp3')


george = Artist.create(name: 'George Clanton')
george_profile = open('https://robotify-development.s3.amazonaws.com/artists/george.jpg')
george.profile_img.attach(io: george_profile, filename: 'george.jpg')

heart = george.albums.create(
  title: 'Heartbeats',
  release_date: '2013',
  genre: 'Vaporwave'
)

heart_cover = open('https://robotify-development.s3.amazonaws.com/heartbeats/cover.png')
heart.cover.attach(io: heart_cover, filename: 'cover.png' )

heart.songs.create(title: 'runaways', runtime: '3:08')
heart.songs.create(title: 'Kameron', runtime: '3:31')
heart.songs.create(title: 'Heart Beats Black', runtime: '3:24')
heart.songs.create(title: 'Genius', runtime: '4:18')
heart.songs.create(title: "Can't Believe", runtime: '3:09')
heart.songs.create(title: 'Shut Me Down', runtime: '3:09')
heart.songs.create(title: 'Ulterior Motives', runtime: '2:20')
heart.songs.create(title: 'clownface', runtime: '4:45')

heart_1 = open('https://robotify-development.s3.amazonaws.com/heartbeats/1.mp3')
heart.songs[0].track.attach(io: heart_1, filename: '1.mp3')

heart_2 = open('https://robotify-development.s3.amazonaws.com/heartbeats/2.mp3')
heart.songs[1].track.attach(io: heart_2, filename: '2.mp3')

heart_3 = open('https://robotify-development.s3.amazonaws.com/heartbeats/3.mp3')
heart.songs[2].track.attach(io: heart_3, filename: '3.mp3')

heart_4 = open('https://robotify-development.s3.amazonaws.com/heartbeats/4.mp3')
heart.songs[3].track.attach(io: heart_4, filename: '4.mp3')

heart_5 = open('https://robotify-development.s3.amazonaws.com/heartbeats/5.mp3')
heart.songs[4].track.attach(io: heart_5, filename: '5.mp3')

heart_6 = open('https://robotify-development.s3.amazonaws.com/heartbeats/6.mp3')
heart.songs[5].track.attach(io: heart_6, filename: '6.mp3')

heart_7 = open('https://robotify-development.s3.amazonaws.com/heartbeats/7.mp3')
heart.songs[6].track.attach(io: heart_7, filename: '7.mp3')

heart_8 = open('https://robotify-development.s3.amazonaws.com/heartbeats/8.mp3')
heart.songs[7].track.attach(io: heart_8, filename: '8.mp3')

electron = george.albums.create(
  title: '100% Electronica',
  release_date: '2015',
  genre: 'Vaporwave'
)

electron_cover = open('https://robotify-development.s3.amazonaws.com/electron/cover.jpg')
electron.cover.attach(io: electron_cover, filename: 'cover.jpg')

electron.songs.create(title: 'Never Late Again', runtime: '4:11')
electron.songs.create(title: 'Keep A Secret', runtime: '2:49')
electron.songs.create(title: 'Did I Flounder?', runtime: '3:59')
electron.songs.create(title: 'Purity', runtime: '1:04')
electron.songs.create(title: "Wonder Gently", runtime: '5:42')
electron.songs.create(title: 'Bleed ', runtime: '5:05')
electron.songs.create(title: 'Warmspot', runtime: '4:24')
electron.songs.create(title: 'It Makes The Babies Want To Cry', runtime: '3:38')
electron.songs.create(title: 'Innocence', runtime: '2:04')
electron.songs.create(title: 'Kill You In Bed', runtime: '5:19')

electron_1 = open('https://robotify-development.s3.amazonaws.com/electron/1.mp3')
electron.songs[0].track.attach(io: electron_1, filename: '1.mp3')

electron_2 = open('https://robotify-development.s3.amazonaws.com/electron/2.mp3')
electron.songs[1].track.attach(io: electron_2, filename: '2.mp3')

electron_3 = open('https://robotify-development.s3.amazonaws.com/electron/3.mp3')
electron.songs[2].track.attach(io: electron_3, filename: '3.mp3')

electron_4 = open('https://robotify-development.s3.amazonaws.com/electron/4.mp3')
electron.songs[3].track.attach(io: electron_4, filename: '4.mp3')

electron_5 = open('https://robotify-development.s3.amazonaws.com/electron/5.mp3')
electron.songs[4].track.attach(io: electron_5, filename: '5.mp3')

electron_6 = open('https://robotify-development.s3.amazonaws.com/electron/6.mp3')
electron.songs[5].track.attach(io: electron_6, filename: '6.mp3')

electron_7 = open('https://robotify-development.s3.amazonaws.com/electron/7.mp3')
electron.songs[6].track.attach(io: electron_7, filename: '7.mp3')

electron_8 = open('https://robotify-development.s3.amazonaws.com/electron/8.mp3')
electron.songs[7].track.attach(io: electron_8, filename: '8.mp3')

electron_9 = open('https://robotify-development.s3.amazonaws.com/electron/9.mp3')
electron.songs[8].track.attach(io: electron_9, filename: '9.mp3')

electron_10 = open('https://robotify-development.s3.amazonaws.com/electron/10.mp3')
electron.songs[9].track.attach(io: electron_10, filename: '10.mp3')


hypnotist = Artist.create(name: 'Chemical Hypnotist')
hypnotist_profile = open('https://robotify-development.s3.amazonaws.com/artists/hypnotist.jpg')
hypnotist.profile_img.attach(io: hypnotist_profile, filename: 'hypnotist.jpg')

hypno = hypnotist.albums.create(
  title: 'UTOPIAN DREAM WINDOW',
  release_date: '2018',
  genre: 'Vaporwave'
)

hypno_cover = open('https://robotify-development.s3.amazonaws.com/hypno/cover.png')
hypno.cover.attach(io: hypno_cover, filename: 'cover.png')

hypno.songs.create(title: '88.9 Sea-farer FM', runtime: '2:56')
hypno.songs.create(title: 'Pepsi By The Beachside', runtime: '4:09')
hypno.songs.create(title: 'Saline Mist', runtime: '2:57')
hypno.songs.create(title: "AC Blasted Highway Cruisin'", runtime: '4:33')
hypno.songs.create(title: 'Surfing Deep Purple Waves', runtime: '4:54')
hypno.songs.create(title: 'SUNBATHINGデジタルタンライン', runtime: '5:57')
hypno.songs.create(title: 'A Night On The Town', runtime: '1:30')
hypno.songs.create(title: 'Misty Sand', runtime: '3:00')
hypno.songs.create(title: 'Midnight Horizon', runtime: '3:48')
hypno.songs.create(title: 'Closing The Window', runtime: '2:05')

hypno_1 = open('https://robotify-development.s3.amazonaws.com/hypno/1.mp3')
hypno.songs[0].track.attach(io: hypno_1, filename: '1.mp3')

hypno_2 = open('https://robotify-development.s3.amazonaws.com/hypno/2.mp3')
hypno.songs[1].track.attach(io: hypno_2, filename: '2.mp3')

hypno_3 = open('https://robotify-development.s3.amazonaws.com/hypno/3.mp3')
hypno.songs[2].track.attach(io: hypno_3, filename: '3.mp3')

hypno_4 = open('https://robotify-development.s3.amazonaws.com/hypno/4.mp3')
hypno.songs[3].track.attach(io: hypno_4, filename: '4.mp3')

hypno_5 = open('https://robotify-development.s3.amazonaws.com/hypno/5.mp3')
hypno.songs[4].track.attach(io: hypno_5, filename: '5.mp3')

hypno_6 = open('https://robotify-development.s3.amazonaws.com/hypno/6.mp3')
hypno.songs[5].track.attach(io: hypno_6, filename: '6.mp3')

hypno_7 = open('https://robotify-development.s3.amazonaws.com/hypno/7.mp3')
hypno.songs[6].track.attach(io: hypno_7, filename: '7.mp3')

hypno_8 = open('https://robotify-development.s3.amazonaws.com/hypno/8.mp3')
hypno.songs[7].track.attach(io: hypno_8, filename: '8.mp3')

hypno_9 = open('https://robotify-development.s3.amazonaws.com/hypno/9.mp3')
hypno.songs[8].track.attach(io: hypno_9, filename: '9.mp3')

hypno_10 = open('https://robotify-development.s3.amazonaws.com/hypno/10.mp3')
hypno.songs[9].track.attach(io: hypno_10, filename: '10.mp3')


newtype = Artist.create(name: 'Newtype')
newtype_profile = open('https://robotify-development.s3.amazonaws.com/artists/newtype.jpeg')
newtype.profile_img.attach(io: newtype_profile, filename: 'newtype.jpeg')

neww = newtype.albums.create(
  title: '私のことを覚えていてくれますか？',
  release_date: '2015',
  genre: 'Vaporwave'
)

neww_cover = open('https://robotify-development.s3.amazonaws.com/new/cover.png')
neww.cover.attach(io: neww_cover, filename: 'cover.png')

neww.songs.create(title: '私はモルディブで私のガンダムを保ちます', runtime: '1:40')
neww.songs.create(title: 'ＳＥＡＧＡＴＥ夢', runtime: '1:14')
neww.songs.create(title: 'ｃｏｒｒｕｐｔ ｄａｔａ 回復の試み', runtime: '2:09')
neww.songs.create(title: "ＰＲＯＤＩＧＹ Ｃａｎｃｅｌｌａｔｉｏｎ Ｓｃｒｅｅｎ", runtime: '1:52')
neww.songs.create(title: 'Ｌｅｔｔｉｎｇ Ｇｏ', runtime: '2:40')
neww.songs.create(title: '本当のは何ですか？シミュレーション？ ', runtime: '1:02')
neww.songs.create(title: 'ｅｃｈｏｅｓ ｏｆ ｄｉｓｔａｎｔ ｍｅｍｏｒｙ', runtime: '1:36')

new_1 = open('https://robotify-development.s3.amazonaws.com/new/1.mp3')
neww.songs[0].track.attach(io: new_1, filename: '1.mp3')

new_2 = open('https://robotify-development.s3.amazonaws.com/new/2.mp3')
neww.songs[1].track.attach(io: new_2, filename: '2.mp3')

new_3 = open('https://robotify-development.s3.amazonaws.com/new/3.mp3')
neww.songs[2].track.attach(io: new_3, filename: '3.mp3')

new_4 = open('https://robotify-development.s3.amazonaws.com/new/4.mp3')
neww.songs[3].track.attach(io: new_4, filename: '4.mp3')

new_5 = open('https://robotify-development.s3.amazonaws.com/new/5.mp3')
neww.songs[4].track.attach(io: new_5, filename: '5.mp3')

new_6 = open('https://robotify-development.s3.amazonaws.com/new/6.mp3')
neww.songs[5].track.attach(io: new_6, filename: '6.mp3')

new_7 = open('https://robotify-development.s3.amazonaws.com/new/7.mp3')
neww.songs[6].track.attach(io: new_7, filename: '7.mp3')

ev = Artist.create(name: "ev.exi")
ev_profile = open('https://robotify-development.s3.amazonaws.com/artists/ev.jpg')
ev.profile_img.attach(io: ev_profile, filename: 'ev.jpg')

forget = ev.albums.create(
  title: 'Forget',
  release_date: '2019',
  genre: 'Vaporwave'
)

forget_cover = open('https://robotify-development.s3.amazonaws.com/forget/cover.png')
forget.cover.attach(io: forget_cover, filename: 'cover.png')

forget.songs.create(title: 'untitled', runtime: '3:06')
forget.songs.create(title: 'Call Stack', runtime: '3:28')
forget.songs.create(title: 'Getting Late (ft. Desired)', runtime: '3:32')
forget.songs.create(title: "Forget", runtime: '3:44')
forget.songs.create(title: 'Auto Filter', runtime: '3:32')
forget.songs.create(title: 'Parallel', runtime: '2:02')
forget.songs.create(title: 'slow', runtime: '3:30')
forget.songs.create(title: 'xoxo', runtime: '2:41')

forget_1 = open('https://robotify-development.s3.amazonaws.com/forget/1.mp3')
forget.songs[0].track.attach(io: forget_1, filename: '1.mp3')

forget_2 = open('https://robotify-development.s3.amazonaws.com/forget/2.mp3')
forget.songs[1].track.attach(io: forget_2, filename: '2.mp3')

forget_3 = open('https://robotify-development.s3.amazonaws.com/forget/3.mp3')
forget.songs[2].track.attach(io: forget_3, filename: '3.mp3')

forget_4 = open('https://robotify-development.s3.amazonaws.com/forget/4.mp3')
forget.songs[3].track.attach(io: forget_4, filename: '4.mp3')

forget_5 = open('https://robotify-development.s3.amazonaws.com/forget/5.mp3')
forget.songs[4].track.attach(io: forget_5, filename: '5.mp3')

forget_6 = open('https://robotify-development.s3.amazonaws.com/forget/6.mp3')
forget.songs[5].track.attach(io: forget_6, filename: '6.mp3')

forget_7 = open('https://robotify-development.s3.amazonaws.com/forget/7.mp3')
forget.songs[6].track.attach(io: forget_7, filename: '7.mp3')

forget_8 = open('https://robotify-development.s3.amazonaws.com/forget/8.mp3')
forget.songs[7].track.attach(io: forget_8, filename: '8.mp3')

tanuki = Artist.create(name: 'TANUKI')      
tanuki_profile = open('https://robotify-development.s3.amazonaws.com/artists/tunuki.jpg')
tanuki.profile_img.attach(io: tanuki_profile, filename: 'tanuki.jpg')

fun = tanuki.albums.create(
  title: 'カタカナ・タイトル',
  release_date: '2018',
  genre: 'Future Funk'
)

fun_cover = open('https://robotify-development.s3.amazonaws.com/fun/cover.png')
fun.cover.attach(io: fun_cover, filename: 'cover.png')

fun.songs.create(title: 'BABYBABYの夢', runtime: '2:48')
fun.songs.create(title: "何がGoin' On", runtime: '3:38')
fun.songs.create(title: 'がんばれ', runtime: '3:03')
fun.songs.create(title: "ファンクOFF", runtime: '2:57')
fun.songs.create(title: "腕の中でDancin'", runtime: '2:39')
fun.songs.create(title: 'Radiant Memories', runtime: '3:19')

fun_1 = open('https://robotify-development.s3.amazonaws.com/fun/1.mp3')
fun.songs[0].track.attach(io: fun_1, filename: '1.mp3')

fun_2 = open('https://robotify-development.s3.amazonaws.com/fun/2.mp3')
fun.songs[1].track.attach(io: fun_2, filename: '2.mp3')

fun_3 = open('https://robotify-development.s3.amazonaws.com/fun/3.mp3')
fun.songs[2].track.attach(io: fun_3, filename: '3.mp3')

fun_4 = open('https://robotify-development.s3.amazonaws.com/fun/4.mp3')
fun.songs[3].track.attach(io: fun_4, filename: '4.mp3')

fun_5 = open('https://robotify-development.s3.amazonaws.com/fun/5.mp3')
fun.songs[4].track.attach(io: fun_5, filename: '5.mp3')

fun_6 = open('https://robotify-development.s3.amazonaws.com/fun/6.mp3')
fun.songs[5].track.attach(io: fun_6, filename: '6.mp3')

mac = Artist.create(name: 'マクロスMACROSS 82-99')
mac_profile = open('https://robotify-development.s3.amazonaws.com/artists/mac.jpg')
mac.profile_img.attach(io: mac_profile, filename: 'mac.jpg')

sailor = mac.albums.create(
  title: 'SAILORWAVE',
  release_date: '2017',
  genre: 'Future Funk'
)

sailor_cover = open('https://robotify-development.s3.amazonaws.com/sailor/cover.jpg')
sailor.cover.attach(io: sailor_cover, filename: 'cover.jpg')

sailor.songs.create(title: 'NEW DAWN', runtime: '2:36')
sailor.songs.create(title: '戦場', runtime: '2:02')
sailor.songs.create(title: '木野 まこと', runtime: '2:02')
sailor.songs.create(title: "火野 レイ", runtime: '2:23')
sailor.songs.create(title: '水TEMPLES', runtime: '1:36')
sailor.songs.create(title: '水野 亜美AMY', runtime: '2:44')
sailor.songs.create(title: 'ABOUT U (Feat. オウムのジャングルPARROT JUNGLE 95)', runtime: '1:42')
sailor.songs.create(title: 'STREET ROMANCE 2049', runtime: '2:28')
sailor.songs.create(title: '月乃 うさぎSERENA', runtime: '1:56')
sailor.songs.create(title: '新宿区 JAZZ POINT J', runtime: '2:15')

sailor_1 = open('https://robotify-development.s3.amazonaws.com/sailor/1.mp3')
sailor.songs[0].track.attach(io: sailor_1, filename: '1.mp3')

sailor_2 = open('https://robotify-development.s3.amazonaws.com/sailor/2.mp3')
sailor.songs[1].track.attach(io: sailor_2, filename: '2.mp3')

sailor_3 = open('https://robotify-development.s3.amazonaws.com/sailor/3.mp3')
sailor.songs[2].track.attach(io: sailor_3, filename: '3.mp3')

sailor_4 = open('https://robotify-development.s3.amazonaws.com/sailor/4.mp3')
sailor.songs[3].track.attach(io: sailor_4, filename: '4.mp3')

sailor_5 = open('https://robotify-development.s3.amazonaws.com/sailor/5.mp3')
sailor.songs[4].track.attach(io: sailor_5, filename: '5.mp3')

sailor_6 = open('https://robotify-development.s3.amazonaws.com/sailor/6.mp3')
sailor.songs[5].track.attach(io: sailor_6, filename: '6.mp3')

sailor_7 = open('https://robotify-development.s3.amazonaws.com/sailor/7.mp3')
sailor.songs[6].track.attach(io: sailor_7, filename: '7.mp3')

sailor_8 = open('https://robotify-development.s3.amazonaws.com/sailor/8.mp3')
sailor.songs[7].track.attach(io: sailor_8, filename: '8.mp3')

sailor_9 = open('https://robotify-development.s3.amazonaws.com/sailor/9.mp3')
sailor.songs[8].track.attach(io: sailor_9, filename: '9.mp3')

sailor_10 = open('https://robotify-development.s3.amazonaws.com/sailor/10.mp3')
sailor.songs[9].track.attach(io: sailor_10, filename: '10.mp3')

touch = mac.albums.create(
  title: 'Summer Touch',
  release_date: '2019',
  genre: 'Future Funk'
)

touch_cover = open('https://robotify-development.s3.amazonaws.com/touch/cover.png')
touch.cover.attach(io: touch_cover, filename: 'cover.png')

touch.songs.create(title: 'Fresh ! (feat. Flamingosis)', runtime: '2:42')
touch.songs.create(title: "Cool Soda", runtime: '2:45')
touch.songs.create(title: 'For You (feat. Morning)', runtime: '2:57')
touch.songs.create(title: "Sunset", runtime: '2:19')
touch.songs.create(title: "Together (feat. Neon Vectors)", runtime: '2:26')
touch.songs.create(title: 'At Night', runtime: '2:25')

touch_1 = open('https://robotify-development.s3.amazonaws.com/touch/1.mp3')
touch.songs[0].track.attach(io: touch_1, filename: '1.mp3')

touch_2 = open('https://robotify-development.s3.amazonaws.com/touch/2.mp3')
touch.songs[1].track.attach(io: touch_2, filename: '2.mp3')

touch_3 = open('https://robotify-development.s3.amazonaws.com/touch/3.mp3')
touch.songs[2].track.attach(io: touch_3, filename: '3.mp3')

touch_4 = open('https://robotify-development.s3.amazonaws.com/touch/4.mp3')
touch.songs[3].track.attach(io: touch_4, filename: '4.mp3')

touch_5 = open('https://robotify-development.s3.amazonaws.com/touch/5.mp3')
touch.songs[4].track.attach(io: touch_5, filename: '5.mp3')

touch_6 = open('https://robotify-development.s3.amazonaws.com/touch/6.mp3')
touch.songs[5].track.attach(io: touch_6, filename: '6.mp3')

prozak = Artist.create(name: 'Prozak Morris')
prozak_profile = open('https://robotify-development.s3.amazonaws.com/artists/prozak.jpg')
prozak.profile_img.attach(io: prozak_profile, filename: 'prozak.jpg')

dystopia = prozak.albums.create(
  title: 'Dystopia',
  release_date: '2016',
  genre: 'Electronic'
)

dystopia_cover = open('https://robotify-development.s3.amazonaws.com/dystopia/cover.jpg')
dystopia.cover.attach(io: dystopia_cover, filename: 'cover.jpg' )

dystopia.songs.create(title: 'Fear', runtime: '2:05')
dystopia.songs.create(title: 'Sunrise', runtime: '3:58')
dystopia.songs.create(title: 'Shadows', runtime: '3:23')
dystopia.songs.create(title: "Wondering", runtime: '2:04')
dystopia.songs.create(title: 'Caffeine', runtime: '4:07')
dystopia.songs.create(title: 'Dulcet', runtime: '5:14')
dystopia.songs.create(title: 'Empty', runtime: '2:07')
dystopia.songs.create(title: 'Perfume', runtime: '1:58')
dystopia.songs.create(title: 'Unattended', runtime: '5:03')
dystopia.songs.create(title: 'Sunset', runtime: '5:02')
dystopia.songs.create(title: 'Disillusion', runtime: '3:01')
dystopia.songs.create(title: 'Nightfall', runtime: '5:57')
dystopia.songs.create(title: 'Decline', runtime: '3:45')
dystopia.songs.create(title: "Static", runtime: '4:17')
dystopia.songs.create(title: 'Tomorrow', runtime: '3:31')

dystopia_1 = open('https://robotify-development.s3.amazonaws.com/dystopia/1.mp3')
dystopia.songs[0].track.attach(io: dystopia_1, filename: '1.mp3')

dystopia_2 = open('https://robotify-development.s3.amazonaws.com/dystopia/2.mp3')
dystopia.songs[1].track.attach(io: dystopia_2, filename: '2.mp3')

dystopia_3 = open('https://robotify-development.s3.amazonaws.com/dystopia/3.mp3')
dystopia.songs[2].track.attach(io: dystopia_3, filename: '3.mp3')

dystopia_4 = open('https://robotify-development.s3.amazonaws.com/dystopia/4.mp3')
dystopia.songs[3].track.attach(io: dystopia_4, filename: '4.mp3')

dystopia_5 = open('https://robotify-development.s3.amazonaws.com/dystopia/5.mp3')
dystopia.songs[4].track.attach(io: dystopia_5, filename: '5.mp3')

dystopia_6 = open('https://robotify-development.s3.amazonaws.com/dystopia/6.mp3')
dystopia.songs[5].track.attach(io: dystopia_6, filename: '6.mp3')

dystopia_7 = open('https://robotify-development.s3.amazonaws.com/dystopia/7.mp3')
dystopia.songs[6].track.attach(io: dystopia_7, filename: '7.mp3')

dystopia_8 = open('https://robotify-development.s3.amazonaws.com/dystopia/8.mp3')
dystopia.songs[7].track.attach(io: dystopia_8, filename: '8.mp3')

dystopia_9 = open('https://robotify-development.s3.amazonaws.com/dystopia/9.mp3')
dystopia.songs[8].track.attach(io: dystopia_9, filename: '9.mp3')

dystopia_10 = open('https://robotify-development.s3.amazonaws.com/dystopia/10.mp3')
dystopia.songs[9].track.attach(io: dystopia_10, filename: '10.mp3')

dystopia_11 = open('https://robotify-development.s3.amazonaws.com/dystopia/11.mp3')
dystopia.songs[10].track.attach(io: dystopia_11, filename: '11.mp3')

dystopia_12 = open('https://robotify-development.s3.amazonaws.com/dystopia/12.mp3')
dystopia.songs[11].track.attach(io: dystopia_12, filename: '12.mp3')

dystopia_13 = open('https://robotify-development.s3.amazonaws.com/dystopia/13.mp3')
dystopia.songs[12].track.attach(io: dystopia_13, filename: '13.mp3')

dystopia_14 = open('https://robotify-development.s3.amazonaws.com/dystopia/14.mp3')
dystopia.songs[13].track.attach(io: dystopia_14, filename: '14.mp3')

dystopia_15 = open('https://robotify-development.s3.amazonaws.com/dystopia/15.mp3')
dystopia.songs[14].track.attach(io: dystopia_15, filename: '15.mp3')


