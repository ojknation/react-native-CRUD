import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({navigation, title}) {
    
    const openMenu = () => {
      navigation.openDrawer()
    }

    return (
      <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
          <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
          <View style={styles.headerTitle}>
              <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
              <Text style={styles.headerText}>{title}</Text>
          </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: 'row'
    }
})
