import React, { Component } from 'react';
import {  StyleSheet, View, Text, TextInput } from 'react-native';

export default class Inicio extends Component {
  render() {
    return (
      <View>
        <View style={styles.boxHeader}>
          <Text style={styles.titulo}>Comanda</Text>
        </View>
        <TextInput
          placeholder= "Numero da Comanda"  
        />

        <View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
  },

boxHeader: {
  flex: 2,
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',
},

titulo: {
  fontWeight: 'bold',
  fontSize: 60,
  color: 'black',
  color: 'orange',
},
});