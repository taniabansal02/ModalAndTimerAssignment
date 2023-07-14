import React, {useContext} from 'react';
import {TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '../../root';
import {styles} from './style';
import Button from '../../components/button';
import Strings from '../../assets/strings';
import { colors } from '../../assets/theme/color';

const Screen1 = () => {
  const navigation = useNavigation();
  const navigateToScreen2 = () => {
    navigation.navigate('Screen2');
  };

  const {text, setText} = useContext(AppContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={Strings.ENTER_TEXT}
        value={text}
        placeholderTextColor={colors.black}
        onChangeText={val => setText(val)}
      />

      <Button
        title={Strings.GO_TO_SCREEN1}
        fun={() => navigateToScreen2()}
      />
    </View>
  );
};

export default Screen1;
