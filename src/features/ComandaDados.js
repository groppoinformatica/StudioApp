import React, { Component } from 'react';
import {  View,
  Text,
  StyleSheet,
  TouchableOpacity,
 } from 'react-native';

import Cliente from './Cliente'
import Profissional from './Profissional'
import Servicos from './Servicos'

export default class ComandaDados extends Component {
  render() {
    return (
      <View style={styles.boxContainer}>
        
        <View style={styles.boxHeader}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Agendamento
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Agendamento
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Agendamento
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                Agendamento
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.boxBody}>

          {/* Dividindo o corpo em duas parte */ }
          <View style={styles.divBody}>
            {/* Chamando informacoes do profissional */}
            <View style={styles.divEntidade}>
              <Profissional/>
            </View>

            {/* Informções do Cliente */ }
            <View style={styles.divEntidade}>
              <Cliente/>
            </View>

          </View>

          {/* Dividindo o corpo em duas parte */ }
          <View style={styles.divBody}>
            
            <View style={styles.divFooter}>
              <Servicos/>
            </View>

            <View style={styles.divFooter}>

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
},
    
boxHeader:{
    flex: 1,
    marginTop: 23,
    flexDirection: 'row',
    backgroundColor: 'orange',
},
    
boxBody:{
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
    alignItems: 'stretch'
},

button:{
  justifyContent: 'center',
  height: 100,
  width: 100,
  fontSize: 16,
},

buttonText: {
  fontWeight: 'bold',
  color: 'black',
  fontSize: 22,
},

divBody: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
},

divEntidade: {
  flex: 1,
  backgroundColor: 'white',
},

divFooter: {
  flex: 1,
  backgroundColor: 'white',
},
});
