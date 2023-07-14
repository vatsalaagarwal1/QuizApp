import 'react-native-gesture-handler';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Home  from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';
import Title from './components/title';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';


const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
};
export default App 
const styles = StyleSheet.create({
  container:{
    paddingTop: 15,
    paddingHorizontal: 16,
  },
});