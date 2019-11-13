import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import Sidebar from './sidebar/sidebar_container';
import Navbar from './navbar';
import Playbar from './playbar';

import AlbumShow from '../album/album_show_container';
import PlaylistShow from '../playlist/playlist_show_container';
import CreatePlaylistForm from '../playlist/create_playlist_form_container';
import EditPlaylistForm from '../playlist/edit_playlist_form_container';
import ArtistShow from '../artist/artist_show_container';
import AlbumIndex from '../album/album_index_container';
import LibraryAlbums from '../library/library_albums';
import PlaylistIndex from '../playlist/playlist_index_container';
import LibrarySongs from '../library/library_songs_container';
import LibraryArtists from '../library/library_artists_container';

const Main = () => (
  <div className="main">
    {/* <Navbar /> */}
    <Sidebar />

    <div className="main-content">
      <Navbar />
      <Route path="/albums/:albumId" component={AlbumShow}/>
      <Route path="/playlists/:playlistId" component={PlaylistShow} />
      <Route path="/artists/:artistId" component={ArtistShow} />
      <Route path="/library/songs" component={LibrarySongs} />
      <Route path="/library/albums" component={LibraryAlbums} />
      <Route path="/library/artists" component={LibraryArtists} />
    </div>

    <Playbar />
  </div>
)

export default Main;