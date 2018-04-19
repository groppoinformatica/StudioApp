import React, { Component } from 'react';
import {  View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import Comanda from './src/features/Comanda'

export default class ListaComanda extends Component {
    state = {
        modalVisible: false,
        comandas: [
            {
                id: 1,
                Numero: 1,
                Estado: 'Em Aberto',
            },
            {
                id: 2,
                Numero: 2,
                Estado: 'Livre',
            },
            {
                id: 3,
                Numero: 3,
                Estado: 'Finalizada'
            },
            {
                id: 4,
                Numero: 4,
                Estado: 'Em Aberto',
            },
            {
                id: 5,
                Numero: 5,
                Estado: 'Livre',
            },
        ]
    }
  render() {
    return (
      <View style={styles.boxContainer}>

        <View style={styles.boxContent}>

            <View style={styles.boxHeader}>
                <Text style={styles.corpo}>Comandas</Text>
            </View>

        <View style={styles.boxBody}>

            <ScrollView>
                { this.state.comandas.map(comanda => 
                <Comanda key={comanda.id} data={comanda}
                />) }
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
    flex: 3,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 70,
    backgroundColor: 'yellow'
},
});