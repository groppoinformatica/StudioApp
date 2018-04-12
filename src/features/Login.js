import React, { Component } from 'react';
import {  StyleSheet, View, Text, TextInput, Modal, TouchableOpacity } from 'react-native';
import ImageBackground from '../layouts/ImageBackground'

export default class Login extends Component {
     
  render() {
    return (
      <View style={styles.modalContainer}>    
        <ImageBackground/>   
        <View style={styles.boxContainer}>
          <Text style={styles.titulo}>Salão do Fabio</Text> 
          <TextInput
            autoFocus
            autoCapitalize="none"
            style={styles.boxInput}
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            placeholder=" Login "  
          />
          <TextInput
            autoFocus
            autoCapitalize="none"
            style={styles.boxInput}
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            placeholder=" Senha "
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.submitButton]} >
            <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.cancelButton]} >
              <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxContainer: {
    padding: 120,
    // backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    width: 500,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 60,
    color: 'pink'
  },

  boxInput: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000',
    height: 40,
    borderRadius: 3,
  },

  buttonContainer: {
    marginTop: 10,
    height: 40,
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#000',
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 12,
  },

  cancelButton: {
    backgroundColor: '#E25F5F',
    marginRight: 5,
  },

  submitButton: {
    backgroundColor: '#70BD85',
    marginRight: 5,
  },
});