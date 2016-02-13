import React, { Component, View } from 'react-native';
import BaobabReact from 'baobab-react';
import App from './App';
import Login from './Login';
import tree from '../lib/tree';

class Root extends Component {
  static childContextTypes = {
    tree: BaobabReact.PropTypes.baobab
  };

  constructor(props) {
    super(props);

    this.tree = tree;
    this.watcher = this.tree.watch({
      isLoggedIn: ['isLoggedIn'],
      booting: ['booting']
    });
    this.state = this.watcher.get();
  }

  getChildContext() {
    return {
      tree: this.tree
    };
  }

  componentWillMount() {
    this.watcher.on('update', () => {
      this.setState(this.watcher.get());
    });
  }

  render() {
    const { isLoggedIn, booting } = this.state;

    if (booting) {
      return (<View/>);
    }

    return (isLoggedIn ? <App/> : <Login/>);
  }
}

export default Root;
