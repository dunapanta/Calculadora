import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';

import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    clean,
    positiveNegative,
    btnDelete,
    btnDividir,
    setNumber,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  } = useCalculadora();

  return (
    <View style={styles.calcContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoSuperior}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        {/* #2D2D2D GO #FF9427 naranja #9B9B9B */}
        <BotonCalc texto="C" color="#9B9B9B" action={clean} />
        <BotonCalc texto="+/-" color="#9B9B9B" action={positiveNegative} />
        <BotonCalc texto="del" color="#9B9B9B" action={btnDelete} />
        <BotonCalc texto="÷" color="#FF9427" action={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" action={setNumber} />
        <BotonCalc texto="8" action={setNumber} />
        <BotonCalc texto="9" action={setNumber} />
        <BotonCalc texto="x" color="#FF9427" action={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" action={setNumber} />
        <BotonCalc texto="5" action={setNumber} />
        <BotonCalc texto="6" action={setNumber} />
        <BotonCalc texto="-" color="#FF9427" action={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" action={setNumber} />
        <BotonCalc texto="2" action={setNumber} />
        <BotonCalc texto="3" action={setNumber} />
        <BotonCalc texto="+" color="#FF9427" action={btnSumar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" zeroButton action={setNumber} />
        <BotonCalc texto="." action={setNumber} />
        <BotonCalc texto="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};
