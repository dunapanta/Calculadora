import { useRef, useState } from "react";

enum Opeadores {
    sumar,
    restar,
    multiplicar,
    dividir,
  }

export const useCalculadora = () => {
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
  
    const calcular = () => {
      const num1 = Number(numero);
      const num2 = Number(numeroAnterior);
  
      if( num1 === 0 && num2 === 0) {
          return setNumero('0');
      } 
  
      switch (lastOperation.current) {
        case Opeadores.sumar:
          setNumero(`${num1 + num2}`);
          break;
  
        case Opeadores.restar:
          setNumero(`${num2 - num1}`);
          break;
  
        case Opeadores.multiplicar:
          setNumero(`${num2 * num1}`);
          break;
  
        case Opeadores.dividir:
          if(num1 === 0) {
              return(setNumero('Error'))
          }
          setNumero(`${num2 / num1}`);
          break;
  
      }
  
      setNumeroAnterior('0');
    };

    return {
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
    }
}
