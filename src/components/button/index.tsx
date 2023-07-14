import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

interface Props {
  title: string;
  fun ?: any,
  height ?: any,
  width ?: any,
  mrgBtm ?: any,
}

const Button = ({title, fun, mrgBtm}: Props) => {
  return (
    <View style={styles.btnView}>
      <TouchableOpacity style={[styles.button, {marginBottom: mrgBtm}]} onPress={fun}>
        <Text style={styles.txt}>{title} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
