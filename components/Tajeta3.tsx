import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'

export default function Tarjeta3(props: any) {


    function detalles(nombre:string){
        Alert.alert("Advertencia", "El personaje se llama " + nombre)

    }


  return (
    <TouchableOpacity
    style={styles.container}
    onPress={()=> detalles(props.informacion.name.first)}
    >
        <View style={styles.fila}>
        <Image source={{ uri: props.informacion.images.main }} style={styles.img} /> 
        <Text style={styles.descripcion}>{props.informacion.name.first}</Text>
        <Text style={styles.descripcion}>{props.informacion.name.middle}</Text>
        <Text style={styles.descripcion}>{props.informacion.name.last}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    fila:{
        flexDirection:"row"
    },
    container:{
        backgroundColor:'#9519f1',
        margin:10,
        borderRadius:10
    },
    descripcion:{
        flex:1,
        padding:1,
    },
    img: { 
        height: 120, 
        width: 120, 
        resizeMode: "contain", 
        borderRadius: 10 
    }, 
})