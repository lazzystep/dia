import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import {Router, Scene,} from 'react-native-router-flux'


import Home from './components/Home';
import Menu from './components/Menu';
import Password from './components/Password';
import Registration from './components/Registration';

class App extends Component {
  render() {
     return (
      <Router>
          <Scene key='root' style={{paddingTop:54}}>
              <Scene key='home' component={Home} title='Home'/>
              <Scene key='password' component={Password} title='Forgot Password'/>
              <Scene key='menu' component={Menu} title='Menu'/>
              <Scene key='registration' component={Registration} title='Registration'/>
          </Scene>
      </Router>
    );
  }
}
export default App;