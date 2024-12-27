import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta3 from '../components/Tajeta3';

export default function Navegador6() {

    const [datos, setdatos] = useState()

    useEffect(() => {
        async function leer(){
            const resp = await fetch('https://api.sampleapis.com/futurama/characters');
            const json = await resp.json();
            setdatos(json);
        }
        leer()
    }, [])
    

  return (
    <View>
      <Text style={{fontSize:40, textAlign: 'center'}}>Personajes</Text>
      <FlatList
      data={datos}
      renderItem={({item}) =>
      <Tarjeta3 datos = {item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})