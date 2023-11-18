import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import he from 'he'


const QuestionBox = (props) => {

const data = props?.sendQuestionData

const {currentQuestionIndex} = useSelector((state)=> state.data)

const getQuestion = data[currentQuestionIndex]?.question
const decodedText = getQuestion && he.decode(getQuestion)



  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{decodedText}</Text>
    </View>
  )
}

export default QuestionBox

const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    width:'100%',
    padding:20,
    backgroundColor:'white',
    borderRadius: 10,
    marginBottom:50,
    
  },
  questionText: {
    fontSize:18,
    fontWeight:"bold",
    textAlign:"center",
  }
})
