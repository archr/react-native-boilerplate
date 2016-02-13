import { AppRegistry, AsyncStorage } from 'react-native';
import Root from './containers/Root';
import tree from './lib/tree';
import { STORAGE } from './lib/constants';

export default async function bootstrap() {
  AppRegistry.registerComponent('RNBoilerplate', () => Root);

  const isLoggedIn = await AsyncStorage.getItem(STORAGE.IS_LOGGED_IN);
  tree.set('isLoggedIn', isLoggedIn === 'yes');
  tree.set('booting', false);
  tree.commit();
}
