export const STARTUP = 'STARTUP';
export const SET_MASTER_MODE = 'SET_MASTER_MODE';

export const set_master_mode = payload => {
  return {type: SET_MASTER_MODE, payload}
};
