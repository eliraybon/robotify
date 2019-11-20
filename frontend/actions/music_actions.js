export const UPDATE_CURRENT_SONG = 'UPDATE_CURRENT_SONG';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const UPDATE_QUEUE = "UPDATE_QUEUE";
export const UPDATE_HISTORY = "UPDATE_HISTORY";
export const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
export const TOGGLE_REPEAT = "TOGGLE_REPEAT";
export const UPDATE_CURRENT_PLAYLIST = "UPDATE_CURRENT_PLAYLIST";

export const updateCurrentSong = song => {
  return {
    type: UPDATE_CURRENT_SONG,
    song
  };
};

export const updateQueue = queue => {
  return {
    type: UPDATE_QUEUE,
    queue
  };
};

export const addToQueue = songs => {
  return {
    type: ADD_TO_QUEUE,
    songs
  };
};

//play is a boolean indicating if the player is playing or not
export const togglePlay = play => {
  return {
    type: TOGGLE_PLAY,
    play
  };
};

export const updateHistory = songHistory => {
  return {
    type: UPDATE_HISTORY,
    songHistory
  };
};

export const toggleShuffle = () => {
  return {
    type: TOGGLE_SHUFFLE
  };
};

export const toggleRepeat = () => {
  return {
    type: TOGGLE_REPEAT
  };
};

export const updateCurrentPlaylist = playlistId => {
  return {
    type: UPDATE_CURRENT_PLAYLIST,
    playlistId
  };
};

