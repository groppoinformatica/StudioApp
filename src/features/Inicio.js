import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class Inicio extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});