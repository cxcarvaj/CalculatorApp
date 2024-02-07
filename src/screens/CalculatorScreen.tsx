import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    result,
    previousResult,
    clear,
    buildNumber,
    deleteLastCharacter,
    positiveNegative,
    divide,
    multiply,
    subtract,
    sum,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorResultContainer}>
      {previousResult !== '0' && (
        <Text style={styles.calculatorPreviousResult}>{previousResult}</Text>
      )}
      <Text
        style={styles.calculatorResult}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {result}
      </Text>

      <View style={styles.row}>
        <CalculatorButton label="C" color="#9B9B9B" onPress={clear} />
        <CalculatorButton
          label="+/-"
          color="#9B9B9B"
          onPress={positiveNegative}
        />
        <CalculatorButton
          label="del"
          color="#9B9B9B"
          onPress={deleteLastCharacter}
        />
        <CalculatorButton label="/" color="#FF9427" onPress={divide} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="7" onPress={buildNumber} />
        <CalculatorButton label="8" onPress={buildNumber} />
        <CalculatorButton label="9" onPress={buildNumber} />
        <CalculatorButton label="x" color="#FF9427" onPress={multiply} />
      </View>
      <View style={styles.row}>
        <CalculatorButton label="4" onPress={buildNumber} />
        <CalculatorButton label="5" onPress={buildNumber} />
        <CalculatorButton label="6" onPress={buildNumber} />
        <CalculatorButton label="-" color="#FF9427" onPress={subtract} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="1" onPress={buildNumber} />
        <CalculatorButton label="2" onPress={buildNumber} />
        <CalculatorButton label="3" onPress={buildNumber} />
        <CalculatorButton label="+" color="#FF9427" onPress={sum} />
      </View>

      <View style={styles.row}>
        <CalculatorButton label="0" isWide onPress={buildNumber} />
        <CalculatorButton label="." onPress={buildNumber} />
        <CalculatorButton label="=" color="#FF9427" onPress={calculate} />
      </View>
    </View>
  );
};
