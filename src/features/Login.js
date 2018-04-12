import React, { Component } from 'react';
import {  StyleSheet,
  View, 
  Text, 
  TextInput, 
  Modal, 
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback, } from 'react-native';
import ImageBackground from '../layouts/ImageBackground'

export default class Login extends Component {
  constructor (props) {
    super(props)
    
    this.doLogin = this.doLogin.bind(this)
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
    this.state = {
      email: '',
      password: ''
    }
  }
  dismiss () {
    Keyboard.dismiss()
  }
  doLogin () {
    const { email, password } = this.state
    if (email && password) {
      const cleanEmail = email.toLowerCase().trim()
      // authRepository.signin(cleanEmail, password)
    }
  }
  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    return (
      <View style={styles.boxContainer}>
        <TouchableWithoutFeedback onPress={this.dismiss}>
          <View style={styles.boxContent}>

            <View style={styles.boxHeader}>
              <Text style={styles.titulo}>Ikeda</Text>
            </View>

            <View style={styles.boxInput}>

              <TextInput
                autoCapitalize="none"
                style={styles.inputs}
                underlineColorAndroid="rgba(0, 0, 0, 0)"
                placeholder="Login"
              />
              <TextInput
                autoCapitalize="none"
                style={styles.inputs}
                underlineColorAndroid="rgba(0, 0, 0, 0)"
                placeholder="Senha"
              />        

              <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>Confirmar</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.boxFooter}>
              <Text style={styles.footerText}>Desenvolvido por Groppo Informática</Text>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
  },

  boxContent: {
    flex: 1,
    alignItems: 'stretch',
  },

  boxHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxInput: {
    flex: 4,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },

  boxFooter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },

  inputs: {
    backgroundColor: '#FFF',
    color : 'blue',
    padding: 20,
    height: 60,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 3,
    borderColor: '#000',
    backgroundColor: '#70BD85',
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 60,
    color: 'black',
    color: 'orange',
  },
  
  footerText: {
    fontStyle: 'italic',
  },
});