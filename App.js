import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Tabs from './src/navigation/Tabs';
import { QuizPage } from './src/screens';

import { Provider } from 'react-redux';
import store from './src/redux/store';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>

          <Stack.Screen name='Tabs' component={Tabs}/>
          <Stack.Screen name='QuizPage' component={QuizPage}/>

        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  );
}
