import React, { Component, View, Text, TextInput } from 'react-native';
import { branch } from 'baobab-react/higher-order';
import Button from 'apsl-react-native-button';
import CurrentUser from '../actions/CurrentUser';
import styles from '../styles';
import { http } from '../lib'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorText: ''
    };
  }

  _login() {
    const { email, password } = this.state

    if (!email || !password) return;

    http.post('/auth/local', { email, password })
    .then((json) => {
      this.props.actions.login(json)
    })
    .catch((err) => {
      this.setState({
        errorText: err.data
      })
    })
  }

  render() {
    return (
      <View style={styles.containers.login}>
        <Text style={{ marginTop: 20 }}>Email</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize='none'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />

        <Text style={{ marginTop: 20 }}>Password</Text>
        <TextInput
          password
          autoCorrect={false}
          autoCapitalize='none'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />

        <Button onPress={this._login.bind(this)} style={{ backgroundColor: 'red', marginTop: 20 }} textStyle={{fontSize: 18}}>
          Login
        </Button>

        {!this.state.errorText ? null :
          (<Text style={{ marginTop: 20 }}>{this.state.errorText}</Text>)
        }
      </View>
    );
  }
}

export default branch(Login, {
  actions: {
    login: CurrentUser.login
  }
});
