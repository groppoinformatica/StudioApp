import React, { Component } from 'react';
import {  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, } from 'react-native';

export default class Comanda extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button2}>
            <Text style={styles.NumCom}>{this.props.data.numero}</Text>
            <Text style={styles.ComanInfo}>{this.props.data.estado}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  padding: 20,
  backgroundColor: '#FFF',
  marginBottom: 20,
  borderRadius: 5,
  flexDirection: 'column',
  alignItems: 'center',
  width: 200,
  height: 150,
},

NumCom: {
  fontSize: 36,
  color: '#999',
},

ComanInfo: {
  fontSize: 22,
},

button2: {
  alignItems: 'center',
  height: 110,
  width: 180,
  borderRadius: 3,
  borderColor: '#000',
  color: 'black',
  backgroundColor: '#FFFFFF',
  marginTop: 20,
  fontSize: 22,
  borderColor: '#000',
  borderRadius: 3,
  justifyContent: 'space-between',
},
});
