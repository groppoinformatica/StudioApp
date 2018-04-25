import React, { Component } from 'react';
import {  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView } from 'react-native';

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
                  {/* <Image
                      style={styles.image}
                      source={require('../../assets/images/Engrenagem.png')} /> */}
                </TouchableOpacity> 

                <TouchableOpacity style={styles.button} >
                  {/* <Image
                    style={styles.image}
                    source={require('../../assets/images/Sair.png')} /> */}
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.boxHeaderMenu}>
              <Text style={styles.corpo2}>Bem Vindo, Operador</Text>

            </View>

          </View>

          <View style={styles.boxBody}>

            <ScrollView style={styles.boxBotoes}>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText2}>
                  Colaboradores
                </Text>
                {/* <Image
                    style={styles.image}
                    source={require('../../assets/images/Colaboradores.png')} /> */}
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText2}>
                  Comandas
                </Text>
              </TouchableOpacity> 

            </ScrollView>

            <ScrollView style={styles.boxBotoes}>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText2}>
                  Clientes
                </Text>
                {/* <Image
                    style={styles.image}
                    source={require('../../assets/images/Clientes.png')} /> */}
              </TouchableOpacity>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText2}>
                  Estoques
                </Text>
                {/* <Image
                    style={styles.image}
                    source={require('../../assets/images/storage.png')} /> */}
              </TouchableOpacity>  
            </ScrollView>

            <View style={styles.boxBotoes}>

              <TouchableOpacity style={styles.button2} >
                <Text style={styles.buttonText2}>
                  Serviços
                </Text>
                {/* <Image
                    style={styles.image}
                    source={require('../../assets/images/clerk.png')} /> */}
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
  backgroundColor: '#FFFAFA',
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
  backgroundColor: '#1E90FF'
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
  marginTop: 5,
  justifyContent: 'space-between',
},

boxBotoes: {
  flex: 1,
  flexDirection: 'column',
  padding: 10,
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
  width: 60,
  borderRadius: 3,
  borderColor: '#FFF',
  color: 'black',
  marginRight: 10,
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
  flexDirection: 'row',
  padding: 10,
  marginBottom: 70,
},

buttonText2: {
  fontWeight: 'bold',
  color: 'black',
  fontSize: 22,
},

button2: {
  alignItems: 'center',
  height: 170,
  width: 240,
  borderRadius: 3,
  borderColor: '#000',
  color: 'black',
  backgroundColor: '#FFFFFF',
  marginTop: 20,
  justifyContent: 'space-between',
},

image: {
  flex: 1,
  resizeMode:'stretch'
}
});