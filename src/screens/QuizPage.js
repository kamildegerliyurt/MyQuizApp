import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

import {LinearGradient} from "expo-linear-gradient"
import { useDispatch, useSelector } from 'react-redux'
import { getQuestionsData } from '../redux/dataSlice'
import {QuestionBox, AnswerBox, SaveButton, BackButton, Loading} from "../components/"


const QuizPage = ({navigation, route}) => {

//--------------------------------
const total = route.params.dataValue
//--------------------------------
const dispatch = useDispatch();
const { questions, isLoading} = useSelector(state => state.data)
//--------------------------------
useEffect(() => {

  dispatch(getQuestionsData(total))
  
}, [])
//--------------------------------

if(isLoading){
  return <Loading />
}
//--------------------------------

  return (
    <LinearGradient  style={styles.container}
                     colors={["#2193b0", "rgba(109, 213, 237, 0.4)"]}>


    <QuestionBox sendQuestionData={questions}/>
      
    <AnswerBox sendAnswerData={questions}/>

    <SaveButton />

    <BackButton />


    </LinearGradient>
  )
}

export default QuizPage

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    padding:10,
  }
})