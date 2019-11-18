import React from 'react';
import { StyleSheet, Text, View, Input, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style = { styles.inputContainer }>
          <Input style = { styles.inputNome }/>
      </View>

      <View style = { styles.inputContainer }>
          <Input style = { styles.inputEmail }/>
      </View>

      <View style = { styles.inputContainer }>
          <Input style = { styles.inputTel }/>
      </View>

      <View style = { styles.inputContainer }>
          <Input style = { styles.inputSenha }/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {

  },
  inputNome: {

  },
  inputEmail: {

  },
  inputTel: {

  },
  inputSenha: {

  },
});