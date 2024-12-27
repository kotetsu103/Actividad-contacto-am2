import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BottomSheetAndroid } from '@react-navigation/stack/lib/typescript/commonjs/src/TransitionConfigs/TransitionPresets'

export default function Navegador7() {

    const [kelvin, setkelvin] = useState(0)
    const [celsius, setcelsius] = useState(0)
    const [fahrenheit, setfahrenheit] = useState(0)

    useEffect(() => {
      if(celsius > 100){
        Alert.alert("Se ha superado el punto de ebullicion del agua")
      }

    }, [celsius])
    

    function calcular() {
      setcelsius(kelvin - 273.15)
      setfahrenheit((((kelvin - 273.15) * 9) / 5) + 32)
    }

  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Ingresar Temperatura'
      keyboardType='numeric'
      style={{fontSize:30, height:50,width:"75%"}}
      onChangeText={(texto)=> setkelvin(+texto)}
      />
      <Button title="calcular" color={'green'} onPress={()=> calcular()}></Button>
      <View style={styles.line}/>
      <Text style={styles.txt}>Grados fahrenheit: {celsius}</Text>
      <Text style={styles.txt}>Grados celsius: {fahrenheit}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    txt:{
        fontSize: 30,
        alignItems: 'center'
    },
    line:{
        width:'90%',
        height:5,
        margin:10,
        backgroundColor:'black'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        width:"80%"
    }
})