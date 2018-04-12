import React, { Component } from 'react';
import {  StyleSheet, View, Text, TextInput, Modal, TouchableOpacity } from 'react-native';
import ImageBackground from '../layouts/ImageBackground'

export default class Login extends Component {
     
  render() {
    return (
      <View style={styles.modalContainer}>    
        <ImageBackground/>   
        <View style={styles.boxContainer}>
          <Text style={styles.titulo}>Cabeleireiro</Text> 
          <TextInput
            autoFocus
            autoCapitalize="none"
            style={styles.boxInput}
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            placeholder=" Login "  
          />
          <TextInput
            //autoFocus
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
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.signUp]}>
              <Text style={styles.buttonText}>Cadastre-se</Text>
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
    fontSize: 48,
    color: '#F5F5F5'
  },

  boxInput: {
    alignSelf: 'stretch',
    marginTop: 10,
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderWidth: 1,
    color: 'white',
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
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 35
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 12,
  },

  submitButton: {
    backgroundColor: 'orange',
    marginRight: 5,   
  },

  signUp: {
    backgroundColor: '#7CFC00',
    marginRight: 5,
  },
});