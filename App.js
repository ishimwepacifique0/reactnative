import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import InputText from './src/component/input/InputText';
import React,{useState} from 'react';


export default function App() {
  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <View >
      <InputText />
      <StatusBar style="auto" />
    </View>
  );
}


