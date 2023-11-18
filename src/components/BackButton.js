import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setClearData } from '../redux/dataSlice';


const BackButton = (props) => {
//-----------------------------------
const dispatch = useDispatch();
//-----------------------------------
const navigation = useNavigation();

const handleBackButton = ()=> {
  dispatch(setClearData())
   
  navigation.navigate("Tabs",
  {
    screen: "Home",
  })
   
}
//-----------------------------------

  return (
    <Pressable 
    style={({pressed})=> [{transform: [{scale: pressed ? 0.95 : 1}]}]}
    onPress={handleBackButton}>
        <AntDesign name="leftcircle" size={32} color="black" />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({})