import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Pagina1Screen({navigation} : any) {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [ciudad, setCiudad] = useState("")

  function datosAlert(){
    Alert.alert("Mensaje", "El nombre del usuario es: "+ nombre)
    setNombre(""); setCiudad("")
  }


  return (
    <ImageBackground
      source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gVk1oRVScfOL2SPFKd3Le26PE8DY_NIXcQ&s" }}
      style={styles.img}
    >
      <View style={styles.contenedor}>
        <TextInput
          placeholder='INGRESAR NOMBRE'
          placeholderTextColor={'white'}
          style={styles.input}
          onChangeText={ (texto)=> setNombre(texto) }
          value= {nombre}
        />

        <TextInput
          placeholder='INGRESAR EDAD'
          style={styles.input}
          placeholderTextColor={'white'}
          keyboardType='numeric'
          onChangeText={ (texto)=> setEdad(+texto)}
        />

        <TextInput
          placeholder='INGRESAR CIUDAD'
          style={styles.input}
          placeholderTextColor={'white'}
          onChangeText={ (texto)=> setCiudad(texto) }
        />

        <Button 
          title='ACEPTAR' 
          onPress={()=> datosAlert()}
          color={'green'}
        />
        <Button 
          title='regresar' 
          onPress={()=> navigation.navigate("Welcome")}
          color={'green'}
        />

      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode:'contain'

  },
  input: {
    fontSize: 30,
    height: 55,
    width: "80%",
    color: '#00cc29',
    backgroundColor: "#222a24",
    opacity: 0.95,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal:20
    
  },
  contenedor:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:"99%"
  },
  

})