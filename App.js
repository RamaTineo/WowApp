import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {styles} from './styles';

export default function App() {
  return (
    <View style= {styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your event" style={styles.input}   />
        <Button title="Add" style={styles.btn}    />
      </View>

      <View style={styles.lista}>
        <Text style={styles.item}>Item</Text>
        <Text style={styles.item}>Item</Text>
        <Text style={styles.item}>Item</Text>
      </View>
    </View>
  );
}


