import React, { Component } from 'react';
import {  StyleSheet, View, Text, TextInput, TouchableOpacity, } from 'react-native';

export default class Inicio extends Component {
  render() {
    return (
      <View style={styles.boxContainer}>

        <View style={styles.boxContent}>
          
          <View style={styles.boxHeader}>

            <View style={styles.boxHeaderInf}>
              <Text style={styles.corpo}>Ikeda</Text>
              <Text style={styles.corpo}>09:40</Text>
              <View style={styles.boxOpcoes}>
                <TouchableOpacity style={styles.button} >
                  <Text style={styles.buttonText}>
                    Conf
                  </Text>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.button} >
                  <Text style={styles.buttonText}>
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.boxHeaderMenu}>
              <Text style={styles.corpo2}>Bem Vindo, Operador</Text>

            </View>

          </View>

          <View style={styles.boxBody}>

            <View style={styles.boxBotoes}>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText}>
                  Colaboradores
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText}>
                  Comandas
                </Text>
              </TouchableOpacity> 

            </View>

            <View style={styles.boxBotoes}>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText}>
                  Clientes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText}>
                  Estoques
                </Text>
              </TouchableOpacity>  
            </View>

            <View style={styles.boxBotoes}>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText}>
                  Serviços
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxContainer: {
  flex: 1,
  backgroundColor: '#F5F5F5',
  flexDirection: 'column',
},

boxContent: {
  flex: 1, 
  alignItems: 'stretch',
},

boxHeader: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  marginTop: 10,
  borderRadius: 3,
  borderColor: 'black',
  paddingVertical: 20,
  paddingHorizontal: 20,
},

boxHeaderInf: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'stretch',
  marginTop: 2,
  borderRadius: 5,
  borderColor: 'black',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  paddingVertical: 2,
  backgroundColor: '#87CEFA'
},

boxHeaderMenu: {
  flex: 3,
  flexDirection: 'row',
  alignItems: 'stretch',
  marginTop: 2,
  borderRadius: 3,
  borderTopColor: 'black',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  paddingVertical: 10,
},

boxOpcoes: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},

boxBotoes: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: 20,
  height: 300,
  width: 100,
},

corpo: {
  fontWeight: 'bold',
  fontSize: 26,
  color: 'black',
},

corpo2: {
  fontWeight: 'bold',
  fontSize: 20,
  color: 'black',
},

button: {
  alignItems: 'center',
  height: 30,
  width: 70,
  borderRadius: 3,
  borderColor: '#FFF',
  color: 'black',
  backgroundColor: 'white',
  justifyContent: 'flex-end',
},

buttonText: {
  fontWeight: 'bold',
  color: 'black',
  fontSize: 18,
  borderRadius: 3,
  borderColor: '#FFF',
},

boxBody: {
  flex: 3,
  alignItems: 'stretch',
  flexDirection: 'row',
  padding: 10,
  width: 800,
},

buttonText: {
  fontWeight: 'bold',
  color: 'black',
  fontSize: 18,
},

button2: {
  alignItems: 'center',
  height: 100,
  width: 180,
  borderRadius: 3,
  borderColor: '#000',
  color: 'black',
  backgroundColor: '#CDCDB4',
  marginTop: 20,
  justifyContent: 'space-between',
},
});