import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Button {
    texto: string
}

export const BotonCalc = ({ texto } :Button) => {
    return (
        <View style={styles.boton}>
            <Text style={styles.botonTexto}>{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto:{
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: '300',
        padding: 10
    }
});