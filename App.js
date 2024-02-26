import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, ScrollView } from 'react-native';
import InputText from './src/component/input/InputText';
import React,{useState} from 'react';
import PostSFetch from './src/component/fetchApi/fetchApi';
import PopularityMovies from './src/component/fetchApi/popular';


export default function App() {
  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <ScrollView >
      <PostSFetch />
      <PopularityMovies />
      <StatusBar style="auto" />
    </ScrollView>
  );
}


