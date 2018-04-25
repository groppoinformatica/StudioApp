import React, { Component } from 'react';
import {  View,
     Text, 
     ScrollView, 
     TouchableOpacity, 
     Image,
     TextInput,
     StyleSheet, } from 'react-native';

import Comanda from './Comanda'

export default class ListaComanda extends Component {
    state = {
        comandas: [
            {
                id: 1,
                numero: 1,
                estado: 'Em Aberto',
                emUso: true,
                finalizado: false,
            },
            {
                id: 2,
                numero: 2,
                estado: 'Livre',
                emUso: false,
                finalizado: false,
            },
            {
                id: 3,
                numero: 3,
                estado: 'Finalizada',
                emUso: false,
                finalizado: true,
            },
            {
                id: 4,
                numero: 4,
                estado: 'Em Aberto',
                emUso: true,
                finalizado: false,
            },
            {
                id: 5,
                numero: 5,
                estado: 'Livre',
                emUso: false,
                finalizado: false,
            },
        ]
    }
  render() {
    return (
      <View style={styles.boxContainer}>

        <View style={styles.boxContent}>

            <View style={styles.boxHeader}>
                <View style={styles.boxHeaderInf}>
                    <Text style={styles.corpo2}>Comandas</Text>
                </View>

                <View style={styles.boxHeaderInf}>
                    <TextInput
                        placeholder= 'Pesquisa de Comanda'
                        style={styles.corpo}
                    />
                </View>

                <View style={styles.boxHeaderInf}>
                    <Text style={styles.corpo2}>Disponiveis - 2 </Text>
                    <Text style={styles.corpo2}>Ocupadas - 3 </Text>
                </View>
            </View>

            <View style={styles.boxBody}>

                <ScrollView contentContainerStyle={styles.boxBotoes}>
                    { this.state.comandas.map(com => 
                        <Comanda key={com.id} data={com}/>
                    ) }
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
    backgroundColor: '#FFF',
    flexDirection: 'column',
},
  
boxContent: {
    flex: 1, 
    alignItems: 'stretch',
},

boxHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 23,
    borderRadius: 3,
    borderColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFAFA',
},

boxHeaderInf: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 2,
    borderRadius: 5,
    borderColor: 'black',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 2,
    backgroundColor: '#DCDCDC'
},

corpo: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
    width: 270,
  },

  corpo2: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
  },

boxBody: {
    flex: 3,
    flexDirection: 'column',
    padding: 10,
    marginBottom: 70,
    borderColor: '#000',
    borderRadius: 3,
    backgroundColor: '#DCDCDC'
},

boxBotoes: {
    flex: 1,
    flexDirection: 'row',
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