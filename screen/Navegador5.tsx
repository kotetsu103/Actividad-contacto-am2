import React, { useEffect, useState } from 'react'
import { Button, Text, View, StyleSheet, Alert } from 'react-native';

function Navegador5() {

    const [numero1, setnumero1]= useState(0)
    const [numero2, setnumero2]= useState(0)
 
    function aunmentar (){
        setnumero1(numero1 + 1)
    }

    function aunmentar2 (){
        setnumero2(numero2 + 1)
    }

    useEffect(()=>{
        if(numero1<0){
            Alert.alert("Error"),
            setnumero1(0)
        }
        if(numero2<0){
            Alert.alert("Error"),
            setnumero2(0)
        }
    }, [numero1, numero2])
  return (
    <View style={styles.container}>
        <View style={styles.fila}>
            <Button title='<='
            onPress={()=> setnumero1(numero1 - 1)}/>
            <Text style={styles.txt}>{numero1}</Text>
            <Button title='=>'
            onPress={()=> aunmentar()}/>
        </View>
        <View style={styles.fila}>
            <Button title='<='
            onPress={()=> setnumero2(numero2 - 1)}/>
            <Text style={styles.txt}>{numero2}</Text>
            <Button title='=>'
            onPress={()=> aunmentar2()}/>
        </View>

        <View style={styles.line}/>

        <Text style={styles.txt}>Suma: {numero1+numero2}</Text>
        <Text style={styles.txt}>Resta: {numero1 - numero2}</Text>
        <Text style={styles.txt}>Multiplicacion: {numero1 * numero2}</Text>
        <Text style={styles.txt}>Division: {numero1 / numero2}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    fila:{
        flexDirection:'row'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    txt:{
        fontSize: 30,
        alignItems: 'center'
    },
    line:{
        width:'90%',
        height:5,
        margin:10,
        backgroundColor:'black'
    }
})

export default Navegador5