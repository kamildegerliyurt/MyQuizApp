import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import {setCorrectAnswer, setIncorrectAnswer} from "../redux/dataSlice/"

import {Loading} from "./Loading"

const AnswerBox = (props) => {

const data = props?.sendAnswerData
//----------------------------------------
const dispatch = useDispatch();
//----------------------------------------
const {currentQuestionIndex, score, isLoading} = useSelector((state)=> state.data)

console.log("Question Index: " , currentQuestionIndex)
console.log("Score: ", score)
//----------------------------------------
const inCorrectAnswer = data[currentQuestionIndex]?.incorrect_answers
console.log("AnswerBox 22.Line:", inCorrectAnswer)
const correctAnswer = data[currentQuestionIndex]?.correct_answer
console.log("AnswerBox 24.Line:", correctAnswer)
//----------------------------------------
const array = data && inCorrectAnswer &&  [correctAnswer, ...inCorrectAnswer]
const shuffledArray =  array?.sort(()=> Math.random() - 0.5)
console.log("AnswerBox 26.Line:" , shuffledArray)
//----------------------------------------
const [ifTrue, setIfTrue]= useState(null)
//----------------------------------------
const handleAnswersButton = (value)=> {
      const checkIfTrue = value === correctAnswer

        setIfTrue(checkIfTrue)
        
        checkIfTrue ? dispatch(setCorrectAnswer())
                    : dispatch(setIncorrectAnswer())
}
//----------------------------------------
if (isLoading) {
  return <Loading />
}
//----------------------------------------

  return (
    <View style={styles.container}>

      {
        shuffledArray?.map((value,index)=>{
          return(
            <Pressable style={({pressed})=> [{transform: [{scale: pressed ? 0.95 : 1}]}, styles.buttonStyle]}
                       onPress={()=> handleAnswersButton(value)}
                       key={index}>
            
                <Text style={styles.optionsText}>{value}</Text>

            </Pressable>
          )
        })
      }
      


    </View>
  )
}

export default AnswerBox

const styles = StyleSheet.create({
  container: {
    width:"100%",
  },
  buttonStyle:{
    borderWidth:1,
    borderRadius:10,
    width:'100%',
    paddingVertical:12,
    alignItems:'center',
    backgroundColor:'white',
    marginVertical:10,
  },
  optionsText:{
    fontWeight:'bold',
  }
})