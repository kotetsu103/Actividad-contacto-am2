import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function ventanaInicio({navigation} : any) {
  const [nombre, setNombre] = useState("")
  const [carrera, setCarrera] = useState("")
  const [semestre, setSemestre] = useState("")

  function datosAlert(){
    Alert.alert("Mensaje", "El nombre del usuario es: "+ nombre)
    setNombre(""); setSemestre(""); setCarrera("")
  }


  return (
    <ImageBackground
      source={{ uri: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg" }}
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
          placeholder='INGRESAR CARRERA'
          placeholderTextColor={'white'}
          style={styles.input}
          onChangeText={ (texto)=> setCarrera(texto) }
          value= {nombre}
        />

        <TextInput
          placeholder='INGRESAR SEMESTRE'
          style={styles.input}
          placeholderTextColor={'white'}
          onChangeText={ (texto)=> setSemestre(texto) }
        />

        <TouchableOpacity
        onPress={()=> navigation.navigate("Drawer")}>
          <Image source={require("../assets/entrada-de-puerta-abierta.png")}
          style={styles.img2}/>
        </TouchableOpacity>

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
  img2:{
    width: 100,
    height:100
  }
})