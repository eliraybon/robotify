export const UPDATE_CURRENT_SONG = 'UPDATE_CURRENT_SONG';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const ADD_TO_QUEUE = 'ADD_TO_QUEUE';
export const UPDATE_QUEUE = "UPDATE_QUEUE";

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

