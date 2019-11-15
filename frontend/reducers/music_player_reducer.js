import { 
  UPDATE_CURRENT_SONG, 
  UPDATE_QUEUE,
  ADD_TO_QUEUE,
  TOGGLE_PLAY 
} from '../actions/music_actions';

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
      // newMusic.queue[0] = action.song;
      return newMusic;
    case UPDATE_QUEUE:
      newMusic.queue = action.queue;
      return newMusic;
    case ADD_TO_QUEUE:
      newMusic.queue = newMusic.queue.concat(action.songs);
      return newMusic;
    case TOGGLE_PLAY:
      newMusic.playing = action.play;
      return newMusic;
    default:
      return state;
  }
}

export default musicPlayerReducer;