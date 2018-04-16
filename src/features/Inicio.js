import React, { Component } from 'react';
import {  StyleSheet, View, Text, TextInput, TouchableOpacity, } from 'react-native';

export default class Inicio extends Component {
  render() {
    return (
      <View style={styles.boxContainer}>
        <View style={styles.boxHeader}>
          <Text style={styles.titulo}>Comanda</Text>
        </View>
          <TextInput
            placeholder= "Numero da Comanda"
            style={styles.inputs} 
          />
        <View style={styles.boxBody}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxContainer: {
  flex: 1,
  backgroundColor: 'white',
},

boxHeader: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',
},

boxBody: {
  flex: 4,
  alignItems: 'stretch',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 10,
},

boxBodyCentro: {
  flex: 4,
  alignItems: 'stretch',
  flexDirection: 'row',
  justifyContent: 'center',
},

titulo: {
  fontWeight: 'bold',
  fontSize: 60,
  color: 'black',
  color: 'orange',
},

inputs: {
  height: 45,
  marginBottom: 10,
  borderColor: 'white',
  borderRadius: 3,
  borderBottomWidth: 1,
  color: 'black',
  fontSize: 16,
},

buttonText: {
  fontWeight: 'bold',
  color: '#FFF',
  fontSize: 18,
},

button: {
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,
  width: 140,
  borderRadius: 3,
  borderColor: '#000',
  backgroundColor: '#70BD85',
  marginTop: 10,
},
});