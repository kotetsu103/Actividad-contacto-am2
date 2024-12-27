import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pagina2Screen() {
const usuario = [
  {
    nombre: "Juan Pablo",
    edad:23
  },
  {
    nombre: "Ana Cruz",
    edad:24
  },
  {
    nombre: "Jose Guerra",
    edad:19
  }
]

  return (
    <View>
      <Text style={{fontSize:40, textAlign: 'center'}}>Usuarios</Text>
      <FlatList
      data= {usuario}
      renderItem={({item}) =>
        <View>
          <Text>{item.nombre}</Text>
          <Text>{item.edad}</Text>
        </View>
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({})