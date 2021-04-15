import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Button {
  texto: string;
  color?: string;
  zeroButton?: boolean;
  action: (numText: string) => void;
}

export const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  zeroButton = false,
  action
}: Button) => {

  return (
    <TouchableOpacity onPress={() => action(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: zeroButton ? 170 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  botonTexto: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
    padding: 10,
  },
});
