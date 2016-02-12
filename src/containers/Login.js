import React, { Component, View, Text } from 'react-native';
import { branch } from 'baobab-react/higher-order';
import CurrentUser from '../actions/CurrentUser';
import styles from '../styles';

class Login extends Component {
  render() {
    return (
      <View style={styles.containers.container}>
        <Text
          onPress={() => {
            this.props.actions.login();
          }}
        >
          Login
        </Text>
      </View>
    );
  }
}

export default branch(Login, {
  actions: {
    login: CurrentUser.login
  }
});
