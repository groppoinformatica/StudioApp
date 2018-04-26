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
    marginTop: 33,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'yellow',
},

boxBody:{
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'pink',
},

boxImage:{
    flex: 1,
    height: 150,
    width: 200,
    marginLeft: 1,
},

boxInf:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
},

texto:{
    fontSize: 28,
    color: 'black',
},
});