import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';

import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';

enum Opeadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const lastOperation = useRef<Opeadores>();

  const clean = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const setNumber = (numText: string) => {
    // Punto decimal existente
    if (numero.includes('.') && numText === '.') return;
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numText === '.') return setNumero(numero + numText);
      // Evaluar si es otro cero y hay otro punto
      if (numText === '0' && numero.includes('.'))
        return setNumero(numero + numText);
      //Evaluar si es diferente de cero y no tiene un punto
      if (numText !== '0' && !numero.includes('.')) return setNumero(numText);
      //Evitar 0000.0
      if (numText === '0' && !numero.includes('.')) return setNumero(numero);
    }
    setNumero(numero + numText);
  };

  const positiveNegative = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const btnDelete = () => {
    if (
      numero.length === 1 ||
      (numero.length === 2 && numero.startsWith('-'))
    ) {
      console.log('Numero', numero);
      return setNumero('0');
    }
    setNumero(numero.substr(0, numero.length - 1));
  };

  const changeUpNum = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    changeUpNum();
    lastOperation.current = Opeadores.dividir;
  };

  const btnMultiplicar = () => {
    changeUpNum();
    lastOperation.current = Opeadores.multiplicar;
  };

  const btnRestar = () => {
    changeUpNum();
    lastOperation.current = Opeadores.restar;
  };

  const btnSumar = () => {
    changeUpNum();
    lastOperation.current = Opeadores.sumar;
  };

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
        <BotonCalc texto="+" color="#FF9427" action={clean} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" zeroButton action={setNumber} />
        <BotonCalc texto="." action={setNumber} />
        <BotonCalc texto="=" color="#FF9427" action={btnSumar} />
      </View>
    </View>
  );
};
