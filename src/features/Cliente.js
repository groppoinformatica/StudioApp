import React, { Component } from 'react';
import {  View,
    Text,
    StyleSheet,
    Image,
    ListView,
    ScrollView,
 } from 'react-native';
 import ImageBackground from '../layouts/ImageBackground'

export default class Cliente extends Component {
  render() {
    return (
    <View style={styles.boxContainer}>
      
        <View style={styles.boxHeader}>
            <Text style={styles.texto}> Informações do Cliente </Text>
        </View>

        <View style={styles.boxBody}>
            <View style={styles.boxImage}>    
                <Image 
                    style={styles.boxImage}
                    source={require('../../assets/images/BackGroundSalao.jpg')}
                     />

            </View>

            <View style={styles.boxInf}>
                <Text style={styles.corpo}>Nome Cliente </Text>
                <Text style={styles.corpo}>Endereço </Text>
                <Text style={styles.corpo}>Bairro </Text>
                <Text style={styles.corpo}>Telefone </Text>
            </View>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
boxContainer: {
    flex: 1,
    height: 150,
    width: 400,
},

boxHeader:{
    flex: 1,
    marginTop: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#1E90FF',
},

boxBody:{
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
    height: 300,
},

boxImage:{
    flex: 1,
    height: 250,
    width: 150,
    marginLeft: 1,
    marginTop: 1,
},

boxInf:{
    flex: 3,
    height: 150,
    width: 200,
    marginLeft: 2,
},

texto:{
    fontSize: 28,
    color: 'black',
},

corpo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});