import React, { Component } from 'react';
import { StyleSheet, 
    View, 
    Text, 
    TextInput,
    Modal, 
    TouchableOpacity, 
    Keyboard, 
    TouchableWithoutFeedback, } from 'react-native';

export default class Cadastro extends Component {
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
        <View style={styles.boxHeader}>
            <Text style={styles.titulo}>Cadastro</Text>
        </View>

            <View style={styles.boxControls}>

              <TextInput
                placeholder="Nome"
                style={styles.inputs}
                keyboardType="Nome"
                autoCapitalize="none"
                blurOnSubmit={ false }
                returnKeyType={ "next" }
              />

              <TextInput
                placeholder="Login"
                style={styles.inputs}
                keyboardType="email-address"
                autoCapitalize="none"
                blurOnSubmit={ false }
                returnKeyType={ "next" }
              />

              <TextInput
                placeholder="Senha"
                style={styles.inputs}
                secureTextEntry={true}
                blurOnSubmit={ true }
                returnKeyType={ "next" }
              />

              <TextInput
                placeholder="Confirme sua Senha"
                style={styles.inputs}
                secureTextEntry={true}
                blurOnSubmit={ true }
                returnKeyType={ "done" }
              />

              <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>
                  Confirmar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonSa} >
                <Text style={styles.buttonText}>
                  Sair
                </Text>
              </TouchableOpacity>
            </View>
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
      flex: 6,
      marginTop: 0,
      paddingVertical: 20,
      paddingHorizontal: 20,
      justifyContent: 'center',
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
      color: 'black',
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

      
    buttonSa: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      borderRadius: 3,
      borderColor: '#000',
      backgroundColor: 'orange',
      marginTop: 10,
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
      color: 'white',
    },
});
