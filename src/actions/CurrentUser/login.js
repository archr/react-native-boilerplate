'use strict';

import { AsyncStorage } from 'react-native';
import { STORAGE } from '../../lib/constants';

export default async function login(tree) {
  await AsyncStorage.setItem(STORAGE.IS_LOGGED_IN, 'yes');

  tree.set('isLoggedIn', true);
  tree.commit();
}
