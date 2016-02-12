'use strict';

import Baobab from 'baobab';

const initialState = {
  isLoggedIn: false
};

const options = {
  asynchronous: true,
  autocommit: false,
  immutable: true
};

export default new Baobab(initialState, options);
