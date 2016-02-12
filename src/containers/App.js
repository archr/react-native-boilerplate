'use strict';

import React, { Component, StyleSheet, View, Text } from 'react-native'
import { branch } from 'baobab-react/higher-order';
import CurrentUser from '../actions/CurrentUser';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            this.props.actions.logout()
          }}
        >
          App
        </Text>
      </View>
    )
  }
}

export default branch(App, {
  actions: {
    logout: CurrentUser.logout
  }
});
