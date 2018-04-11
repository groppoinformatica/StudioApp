import React, { Component } from 'react';
import {  View, Text, TextInput, TouchableHighlight } from 'react-native';

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
    
});