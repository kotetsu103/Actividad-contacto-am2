import { useState } from "react"
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function Tarjeta4(props: any) { 
 
    const [modalVisible, setModalVisible] = useState(false) 
 
    function detalles(nombre: string) { 
        setModalVisible(true) 
    } 
 
    return ( 
        <View> 
            <TouchableOpacity style={styles.container} 
                onPress={() => detalles(props.results.name.first)}> 
                <Text style={styles.titulo}>{props.results.name.first}</Text>  
                <View style={styles.fila}>
                <Image source={{ uri: props.results.picture.thumbnail}} style={styles.modalImg2} />
                <Text style={styles.titulo}> Genero: {props.results.gender}</Text> 
                </View>
            </TouchableOpacity> 
            <Modal 
                animationType="slide" 
                transparent={true} 
                visible={modalVisible} 
                onRequestClose={() => setModalVisible(false)} 
            > 
                <View style={styles.modalContainer}> 
                    <View style={styles.modalContent}> 
                        <Text style={styles.modalTitle}>Detalles del usuario</Text> 
                        <Image source={{ uri: props.results.picture.large}} style={styles.modalImg} /> 
                        <Text style={styles.modalText}>Nombre completo: {props.results.name.first} {props.results.name.last}</Text> 
                        <Text style={styles.modalText}>Genero: {props.results.gender}</Text> 
                        <Text style={styles.modalText}>Cuidad: {props.results.location.city}</Text>
                        <Text style={styles.modalText}>Edad: {props.results.dob.age}</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}> 
                            <Text style={styles.modalButtonText}>Cerrar</Text> 
                        </TouchableOpacity> 
                    </View> 
                </View> 
            </Modal> 
        </View> 
    ) 
} 
 
const styles = StyleSheet.create({ 
    container: { 
        backgroundColor: '#f8b800', 
        margin: 10, 
        borderRadius: 20 
    }, 
    img: { 
        height: 120, 
        width: 120, 
        resizeMode: "contain", 
        borderRadius: 10 
    },
    fila: { 
        flexDirection: "row", 
        padding: 10 
    }, 
    descripcion: { 
        flex: 1, 
        padding: 10, 
        fontSize: 15, 
    }, 
    titulo: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#333', 
        textAlign: 'center', 
        padding: 10 
    }, 
    modalContainer: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    }, 
    modalContent: { 
        backgroundColor: '#fff', 
        borderRadius: 10, 
        padding: 20, 
        width: '80%' 
    }, 
    modalTitle: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#333', 
        textAlign: 'center' 
    }, 
    modalText: { 
        fontSize: 16, 
        color: '#666', 
        padding: 10 
    }, 
    modalButton: { 
        backgroundColor: '#7ff02d', 
        padding: 10, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }, 
    modalButtonText: { 
        fontSize: 16, 
        color: '#fff' 
    }, 
    modalImg: { 
        height: 180, 
        width: 180, 
        resizeMode: "contain", 
        borderRadius: 10, 
        marginBottom: 20, 
        alignSelf: 'center' 
    }, 
    modalImg2: { 
        height: 75, 
        width: 75, 
        resizeMode: "contain", 
        borderRadius: 10, 
        marginBottom: 20, 
        alignSelf: 'center' 
    }
})