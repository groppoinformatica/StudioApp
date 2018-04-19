import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class Comanda extends Component {
  render() {
    return (
      <View>
        <View style={styles.ComanInfo}>
          <Text style={styles.NumCom}>{this.props.data.Numero}</Text> 
          <Text style={styles.ComanInfo}>{this.props.data.Estado}</Text> 
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
},

NumCom: {
    fontSize: 20,
    color: '#999',
},

ComanInfo: {
    marginLeft: 10,
},
});
