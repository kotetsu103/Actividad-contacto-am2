import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Tarjeta2 from '../components/Tarjeta2'
import datos from '../assets/data/musica.json'

export const Navegador4 = () => {
  return (
    <View>
    <Text style={{fontSize:40, textAlign: 'center'}}>Sountrack</Text>
    <FlatList
      data={datos.musica}
      renderItem={({item}) =>
      <Tarjeta2 musica = {item}/>
  }
    />
  </View>
  )
}

const styles = StyleSheet.create({})
