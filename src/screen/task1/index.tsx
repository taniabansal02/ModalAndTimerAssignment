import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import Strings from '../../assets/strings';

const Task1 = () => {
  const [isActive, setIsActive] = useState(false);
  const [num, setNum] = useState('');
  const [counting, setCounting] = useState([]);
  const arr: any = [];
  const onHandle = (num) => {
    setIsActive(true);
    if (num != '') {
      for (let i = 1; i <= num; i++) {
        arr.push(i);
      }
    }
    setCounting(arr);
  };
console.log(isActive);
  const onClear = () => {
    setIsActive(false);
    setCounting([]);
    setNum('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder= {Strings.ENTER_NO}
        keyboardType="numeric"
        value={num}
        onChangeText={val => setNum(val)}
        returnKeyType="next"
        maxLength={4}
        style={styles.input}
      />
     
      <View style={styles.button}>
        <TouchableOpacity onPress={() => onHandle(num)}>
          <Text style={styles.text}> {Strings.PRESS} </Text>
        </TouchableOpacity>
      </View>
      {isActive && counting.length > 0 ? (
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <Text>{counting + ' '}</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={onClear}>
              <Text style={styles.text}>{Strings.CLOSE} </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};
export default Task1;
