import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation'

//import Inicio from './src/features/Inicio' -> Cria classe Inicio

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigation/>
    )
  }
}

const AppStackNavigation = StackNavigator({

  Main: {
    screen: Inicio
  }  

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
