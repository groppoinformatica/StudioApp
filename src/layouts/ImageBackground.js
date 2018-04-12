import React, { Component } from 'react'
import {  View, Image, StyleSheet} from 'react-native'

export default class ImageBackground extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/FundoCabeleireiro.jpg')} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    image: {
        flex: 1,
        resizeMode:'stretch'
    }
})