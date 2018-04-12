import React, { Component } from 'react';
import {  View, Text, TextInput, TouchableHighlight } from 'react-native';
//import ImageBackground from '../layouts/ImageBackground'

export default class Login extends Component {
     
  render() {
    return (
      <View>
        <TextInput
           placeholder="Login"   
        />
        <TextInput
          placeholder="Senha"
        />
        <TouchableHighlight>
            
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
});