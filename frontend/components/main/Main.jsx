import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { ProtectedRoute } from '../../util/route_util';

import Sidebar from './sidebar/sidebar_container';
import Navbar from './navbar';
import MusicPlayer from './music_player/music_player_container';
import Modal from '../ui/modal_container';

import AlbumShow from '../album/album_show_container';
import PlaylistShow from '../playlist/playlist_show_container';
// import CreatePlaylistForm from '../playlist/create_playlist_form_container';
// import EditPlaylistForm from '../playlist/edit_playlist_form_container';
import ArtistShow from '../artist/artist_show_container';
// import AlbumIndex from '../album/album_index_container';
import LibraryAlbums from '../library/library_albums';
// import PlaylistIndex from '../playlist/playlist_index_container';
import LibrarySongs from '../library/library_songs_container';
import LibraryArtists from '../library/library_artists_container';
import SearchResults from '../search/search_results_container';
import Browse from '../browse/browse';
import Explore from '../explore/explore';
import UserShow from '../user/user_show_container';

const Main = (props) => (
  <div className="main">
    <Modal />
    <Sidebar />

    <div className="main-content">
      <Navbar history={ props.history } />
      <Route path="/albums/:albumId" component={AlbumShow}/>
      <Route exact path="/playlists/:playlistId" component={PlaylistShow} />
      <Route path="/artists/:artistId" component={ArtistShow} />
      <Route path="/users/:userId" component={UserShow} />
      <Route path="/library/songs" component={LibrarySongs} />
      <Route path="/library/albums" component={LibraryAlbums} />
      <Route path="/library/artists" component={LibraryArtists} />
      <Route path="/search" component={SearchResults} />
      <Route path="/browse" component={Browse} />
      <Route path="/explore" component={Explore} />
    </div>

    <MusicPlayer />
  </div>
)

export default Main;