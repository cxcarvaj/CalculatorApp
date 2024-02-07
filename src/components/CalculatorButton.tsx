import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  label: string;
  color?: string;
  isWide?: boolean;
  onPress: (actionText: string) => void;
}

export const CalculatorButton = ({
  label,
  color = '#2D2D2D',
  isWide = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(label)}>
      <View
        style={{
          ...styles.calculatorButton,
          backgroundColor: color,
          width: isWide ? 180 : 80,
        }}>
        <Text style={styles.calculatorButtonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  calculatorButton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  calculatorButtonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
});
