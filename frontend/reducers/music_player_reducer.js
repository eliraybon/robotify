import { UPDATE_CURRENT_SONG, TOGGLE_PLAY } from '../actions/music_actions';

const _defaultState = {
  currentSong: {
    title: '',
    song_url: ''
  },
  playing: false,
  queue: []
}

//have actions for adding albums, playlists, and songs to the queue
const musicPlayerReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newMusic = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_CURRENT_SONG:
      newMusic.currentSong = action.song;
      newMusic.playing = true;
      // newMusic.queue = [action.song];
      return newMusic;
    case TOGGLE_PLAY:
      (newMusic.playing) ? newMusic.playing = false : newMusic.playing = true;
    default:
      return state;
  }
}

export default musicPlayerReducer;