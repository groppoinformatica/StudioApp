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
      <ImageBackground/>
        <TouchableWithoutFeedback onPress={this.dismiss}>
          <View style={styles.boxContent}>

            <View style={styles.boxHeader}>
              <Text style={styles.titulo}>Ikeda</Text>
            </View>

            <View style={styles.boxControls}>

              <TextInput
                placeholder="Login"
                style={styles.inputs}
                keyboardType="email-address"
                autoCapitalize="none"
                blurOnSubmit={ false }
                returnKeyType={ "next" }
                onChangeText={(email) =>
                  this.setState({email})}
                onSubmitEditing={() => {
                  this.focusNextField('Password');
                }}              
                ref={ input => {
                  this.inputs['E-mail'] = input;
                }}
                value={this.state.email}
              />

              <TextInput
                placeholder="Senha"
                style={styles.inputs}
                secureTextEntry={true}
                blurOnSubmit={ true }
                returnKeyType={ "done" }
                onChangeText={(password) =>
                  this.setState({password})}
                ref={ input => {
                  this.inputs['Password'] = input;
                }}              
                value={this.state.password}
              />

              <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>
                  Confirmar
                </Text>
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
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  boxControls: {
    flex: 4,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: 400,
    alignSelf: 'center',
  },

  boxFooter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },

  inputs: {
    // backgroundColor: '#FFF',
    height: 45,
    marginBottom: 10,
    borderColor: 'white',
    borderRadius: 3,
    borderBottomWidth: 1,
    color: 'white',
    fontSize: 16,
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

  buttonText: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
  },

  buttonCa: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 3,
    borderColor: '#000',
    backgroundColor: 'orange',
    marginTop: 25,
  },

  buttonTextCa: {
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
    color: 'white',
  },
});