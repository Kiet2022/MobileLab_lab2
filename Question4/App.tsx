import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from './Style';

export default App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = num => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = operator => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };
  return (
    <View style={styles.container_main}>
      <View style={styles.container_result}>
        <Text style={styles.resultText}>{displayValue}</Text>
      </View>

      <View style={styles.container_keyboard}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button_param} onPress={() => handleNumberInput('7')}>
            <Text style={styles.buttonText_default}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param} onPress={() => handleNumberInput('8')}>
            <Text style={styles.buttonText_default}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param} onPress={() => handleNumberInput('9')}>
            <Text style={styles.buttonText_default}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_operation} onPress={() => handleOperatorInput('/')}>
            <Text style={styles.buttonText_operate}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button_param} onPress={() => handleNumberInput('4')}>
            <Text style={styles.buttonText_default}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param} onPress={() => handleNumberInput('5')}>
            <Text style={styles.buttonText_default}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param} onPress={() => handleNumberInput('6')}>
            <Text style={styles.buttonText_default}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_operation} onPress={() => handleOperatorInput('*')}>
            <Text style={styles.buttonText_operate}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button_param} onPress={() => handleNumberInput('1')}>
            <Text style={styles.buttonText_default}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param} onPress={() => handleNumberInput('2')}>
            <Text style={styles.buttonText_default}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param} onPress={() => handleNumberInput('3')}>
            <Text style={styles.buttonText_default}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_operation} onPress={() => handleOperatorInput('-')}>
            <Text style={styles.buttonText_operate}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button_param2} onPress={() => handleNumberInput('0')}>
            <Text style={styles.buttonText_default}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_operation} onPress={() => handleOperatorInput('+')}>
            <Text style={styles.buttonText_operate}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_cal} onPress={handleEqual}>
            <Text style={styles.buttonText_cal}>=</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button_operation} onPress={handleClear}>
            <Text style={styles.buttonText_operate}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
