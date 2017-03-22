import React, { Component } from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import {Actions,} from 'react-native-router-flux'

class Home extends Component {
    state = {
        name:'',
    }
  render() {
     return (
      <View>
          <Text>Your password</Text>
          <TextInput
            placeholder='Your pass'
            onChangeText={()=>{
                this.setState({
                    name:text,
                });
            }}
            value={this.state.name}
          >
          
          </TextInput>
          <TouchableOpacity
            onPress={()=>{
                //continue
                Actions.menu
            }}
          >
              <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text>Registration</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text>Forgot your password</Text>
          </TouchableOpacity>
      </View>
    );
  }

}
export default Home;