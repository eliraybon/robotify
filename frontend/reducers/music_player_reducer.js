import { 
  UPDATE_CURRENT_SONG, 
  UPDATE_QUEUE,
  UPDATE_HISTORY,
  ADD_TO_QUEUE,
  TOGGLE_PLAY,
  TOGGLE_SHUFFLE,
  TOGGLE_REPEAT,
  UPDATE_CURRENT_PLAYLIST 
} from '../actions/music_actions';

const _defaultState = {
  currentSong: {
    title: '',
    song_url: ''
  },
  playing: false,
  shuffle: false,
  repeat: false,
  queue: [],
  songHistory: [],
  currentPlaylistId: null
}

//have actions for adding albums, playlists, and songs to the queue
const musicPlayerReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newMusic = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_CURRENT_SONG:
      newMusic.currentSong = action.song;
      return newMusic;
    case UPDATE_QUEUE:
      newMusic.queue = action.queue;
      return newMusic;
    case ADD_TO_QUEUE:
      newMusic.queue = newMusic.queue.concat(action.songs);
      return newMusic;
    case UPDATE_HISTORY:
      newMusic.songHistory = newMusic.songHistory = action.songHistory;
      return newMusic;
    case TOGGLE_PLAY:
      newMusic.playing = action.play;
      return newMusic;
    case UPDATE_CURRENT_PLAYLIST:
      newMusic.currentPlaylistId = action.playlistId;
      return newMusic;
    default:
      return state;
  }
}

export default musicPlayerReducer;