import React, { Component } from 'react';
import {  View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, } from 'react-native';

import Comanda from './src/features/Comanda'

export default class ListaComanda extends Component {
    state = {
        modalVisible: false,
        comandas: [
            {
                id: 1,
                numero: 1,
                estado: 'Em Aberto',
                emuso: true,
                finalizado: false,
            },
            {
                id: 2,
                numero: 2,
                estado: 'Livre',
                emuso: false,
                finalizado: false,
            },
            {
                id: 3,
                numero: 3,
                estado: 'Finalizada',
                emuso: false,
                finalizado: true,
            },
            {
                id: 4,
                numero: 4,
                estado: 'Em Aberto',
                emuso: true,
                finalizado: false,
            },
            {
                id: 5,
                numero: 5,
                estado: 'Livre',
                emuso: false,
                finalizado: false,
            },
        ]
    }
  render() {
    const comanda = {
        id: 8,
        numero: 4,
        estado: '',
        emuso: false,
        finalizado: false
    }
    return (
      <View style={styles.boxContainer}>

        <View style={styles.boxContent}>

            <View style={styles.boxHeader}>
                <Text style={styles.corpo}>Comandas</Text>
            </View>

        <View style={styles.boxBody}>

            <ScrollView style={styles.boxBotoes}>
                <TouchableOpacity style={styles.button2} >
                    { this.state.comandas.map(comanda => 
                    <Comanda key={comanda.id} data={comanda}
                    />) }
                </TouchableOpacity>
            </ScrollView>

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
    backgroundColor: 'red',
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

corpo: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
  },

boxBody: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 70,
    backgroundColor: 'yellow'
},

boxBotoes: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
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
});