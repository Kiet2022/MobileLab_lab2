import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './Style';

export default App = () => {
  return (
    <View style={styles.container_main}>
      <View style={styles.container_result}>
        <Text>test</Text>
      </View>

      <View style={styles.container_keyboard}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button_param}>
            <Text style={styles.buttonText_default}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param}>
            <Text style={styles.buttonText_default}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param}>
            <Text style={styles.buttonText_default}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_operation}>
            <Text style={styles.buttonText_operate}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button_param}>
            <Text style={styles.buttonText_default}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param}>
            <Text style={styles.buttonText_default}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param}>
            <Text style={styles.buttonText_default}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_operation}>
            <Text style={styles.buttonText_operate}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button_param}>
            <Text style={styles.buttonText_default}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param}>
            <Text style={styles.buttonText_default}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_param}>
            <Text style={styles.buttonText_default}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_operation}>
            <Text style={styles.buttonText_operate}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
            <TouchableOpacity style={styles.button_param2}>
              <Text style={styles.buttonText_default}>0</Text>
            </TouchableOpacity>
   
          <TouchableOpacity style={styles.button_operation}>
            <Text style={styles.buttonText_operate}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_cal}>
            <Text style={styles.buttonText_cal}>=</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row} >
          <View style={styles.button_operation}>
          <Text style={styles.buttonText_operate}>C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
