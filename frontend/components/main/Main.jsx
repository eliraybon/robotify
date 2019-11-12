import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from './navbar';
import Playbar from './playbar';

import AlbumShow from '../album/album_show_container';
import PlaylistShow from '../playlist/playlist_show_container';

const Main = () => (
  <div className="main">
    <Sidebar />
    <Navbar />
    
    <div className="col-4-5">
      <Route path="/albums/:albumId" component={AlbumShow} />
      <Route path="/playlists/:playlistId" component={PlaylistShow} />
    </div>

    <Playbar />


  </div>
)

export default Main;