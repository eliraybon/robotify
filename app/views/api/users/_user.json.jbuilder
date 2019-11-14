json.extract! user, :id, :email
#Hopefully adding playlist_ids doesn't break anything
json.playlist_ids user.playlist_ids