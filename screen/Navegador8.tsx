import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta4 from '../components/Tarjeta4'

export default function Navegador8() {

const [Genero, setGenero] = useState("")
const [datos, setdatos] = useState([])

useEffect(() => {
    async function leer(){
    const resp = await fetch('https://randomuser.me/api/?results=20');
    const json = await resp.json();
    setdatos(json.results);
  }
  leer()
}, [])

  return (
    <View>
      <Text style={{fontSize:40, textAlign: 'center'}}>Personajes</Text>
      <TextInput
            placeholder='Ingresar Temperatura'
            keyboardType='email-address'
            style={styles.buscar}
            onChangeText={(texto)=> setGenero(texto)}

      />
      <FlatList
        data={datos}
        renderItem={({item}) =>
        <Tarjeta4 results = {item}/>
    }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buscar:{
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    fontSize:30, 
    height:50,
    width:"100%"
  }
})