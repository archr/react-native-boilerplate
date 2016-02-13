import Baobab from 'baobab';

const isDev = typeof __DEV__ !== 'undefined' && __DEV__;

const initialState = {
  isDev,
  booting: true,
  isLoggedIn: false
};

const options = {
  asynchronous: true,
  autoCommit: false,
  immutable: true
};

export default new Baobab(initialState, options);
