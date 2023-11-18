import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryButton = (props) => {

const index = props.index
const data = props.data
const name = props.data.name

const colors = ["#0079FF", "green", "orange", "#F94C66", "#EA047E", "tomato"]
const randomColor = index % colors.length


const navigation = useNavigation();

const handleButtonData = ()=> {
    navigation.navigate("QuizPage",
    {
        dataValue: data.id
    })
}



  return (
    <Pressable style={({pressed})=> [{transform: [{scale: pressed ? 0.90 : 1}],backgroundColor: colors[randomColor]},styles.buttonStyle]}
               onPress={handleButtonData}>
         <Text style={styles.categoryText}>{name}</Text>
    </Pressable>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
    buttonStyle:{
        borderWidth:0.2,
        margin:8,
        width:150, 
        height:150,
        alignContent:'center',
        justifyContent:'center',
        padding:5,
        borderRadius:10,
    },
    categoryText: {
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    }
})
