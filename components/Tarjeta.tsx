import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'

export default function Tarjeta(props: any) {
    console.log(props.informacion.name);

    function detalles(nombre:string){
        Alert.alert("Advertencia", "El personaje se llama " + nombre)

    }


  return (
    <TouchableOpacity
    style={styles.container}
    onPress={()=> detalles(props.informacion.name)}
    >
        <Text>{props.informacion.name}</Text>
        <View style={styles.fila}>
        <Image
        source={{uri:props.informacion.image}}
        style={styles.img}
        />
        <Text style={styles.descripcion}>{props.informacion.description}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    img:{
        height:150,
        width:150,
        resizeMode:'contain'
    },
    fila:{
        flexDirection:"row"
    },
    container:{
        backgroundColor:'#f1e419',
        margin:10,
        borderRadius:10
    },
    descripcion:{
        flex:1,
        padding:10,
    }
})