'use strict';

import { AsyncStorage } from 'react-native';
import { STORAGE } from '../../lib/constants';

export default async function logout(tree) {
  await AsyncStorage.setItem(STORAGE.IS_LOGGED_IN, 'no');

  tree.set('isLoggedIn', false);
  tree.commit();
}
