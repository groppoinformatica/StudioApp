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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              3
            </Text>
          </TouchableOpacity>
        </View>
      <View>
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
  flex: 2,
  alignItems: 'flex-end',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 10,
},

titulo: {
  fontWeight: 'bold',
  fontSize: 60,
  color: 'black',
  color: 'orange',
},

inputs: {
  // backgroundColor: '#FFF',
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
  height: 50,
  borderRadius: 3,
  borderColor: '#000',
  backgroundColor: '#70BD85',
  marginTop: 10,
},
});