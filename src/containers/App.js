import React, { Component, View, Text } from 'react-native';
import { branch } from 'baobab-react/higher-order';
import CurrentUser from '../actions/CurrentUser';
import styles from '../styles';

class App extends Component {
  render() {
    return (
      <View style={styles.containers.container}>
        <Text style={{ marginTop: 20 }}
          onPress={() => {
            this.props.actions.logout();
          }}
        >
          App
        </Text>
      </View>
    );
  }
}

export default branch(App, {
  actions: {
    logout: CurrentUser.logout
  }
});
