import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { BlurView } from 'expo-blur';

import {Home, Progress} from "../screens/"
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={{headerShown: false, 
                         tabBarShowLabel: false, 
                            tabBarStyle:{
                                          position:"absolute",
                                          backgroundColor:"#687EFF",
                                          borderTopLeftRadius:20,
                                          borderTopRightRadius:20,
                                        },
                                        tabBarBackground: () => (
                                          <BlurView intensity={80}
                                                    style={{...StyleSheet.absoluteFillObject,
                                                            borderTopLeftRadius:20,
                                                            borderTopRightRadius:20,
                                                            overflow:"hidden",
                                                            backgroundColor: "transparent",}}/>
                           )
                            }}>

        <Tab.Screen name='Home'
                    component={Home}
                    options={{tabBarIcon:({focused})=> (<AntDesign name="home" 
                                                                   size={focused ? 27 : 24} 
                                                                   color={focused ? "#B6FFFA" : "white"} />)}}/>



        <Tab.Screen name='Progress'
                    component={Progress}
                    options={{tabBarIcon:({focused})=> (<MaterialIcons name="leaderboard" 
                                                                       size={focused ? 27 : 24} 
                                                                       color={focused ? "#B6FFFA" : "white"} />)}}/>                                                            


    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})