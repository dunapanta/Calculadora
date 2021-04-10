import React from 'react'
import { Text, View } from 'react-native'

import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calcContainer}>
            <Text style={styles.resultadoSuperior}>1,5000.00</Text>
            <Text style={styles.resultado}>1,5000.00</Text>

            <View style={styles.fila}>
                <BotonCalc texto="C" />
                <BotonCalc texto="+/-" />
                <BotonCalc texto="%" />
                <BotonCalc texto="÷" />
            </View>
        </View>
    )
}
