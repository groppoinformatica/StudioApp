import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/features/Login'
import Inicio from './src/features/Inicio'
import Cadastro from './src/features/Cadastro'
import Comanda from './src/features/Comanda'
import ListaComanda from './src/features/ListaComanda'

export default class App extends Component {
  render() {
    return (
      <ListaComanda/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
