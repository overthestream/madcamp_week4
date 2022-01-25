import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
      <TextInput></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
