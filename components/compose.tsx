import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from '../styles';

interface IComposeMessage {
  updateInput: (msg: string) => void;
  send: () => void;
  value: string;
}
const Compose = ({updateInput, send, value}: IComposeMessage) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          onChangeText={(msg: string) => updateInput(msg)}
          blurOnSubmit={false}
          placeholder="Write Something"
          multiline
          value={value}
        />
      </View>
      <TouchableOpacity
        style={[styles.submit, styles.send]}
        onPress={send}
        disabled={value.trim() === ''}>
        <Text>{'=>'}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Compose;
