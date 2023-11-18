import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {HistoryFlatList} from "../components/"

import { useDispatch, useSelector } from 'react-redux'
import { getScoresStorage } from '../redux/progressSlice'

const Progress = () => {
//------------------------------------------------------
const dispatch = useDispatch();
const {scores}  = useSelector(state => state.progress)
console.log("saved Scores Data: ", scores)
//------------------------------------------------------

useEffect(() => {
  dispatch(getScoresStorage())
}, [])
//------------------------------------------------------


  return (
    <SafeAreaView style={styles.progressContainer}>
    
      <View style={styles.scoreTextContainer}>

        <Text style={styles.scoreText}>Score History</Text>
        <Image style={{ width: 60, height: 60, resizeMode: 'center'}} 
               source={require('../../assets/answers.png')} />

      </View>

        


      <HistoryFlatList scoreHistoryData={scores}/>

    </SafeAreaView>
  )
}

export default Progress

const styles = StyleSheet.create({
  progressContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#CDF5FD',
  },
   scoreText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
    color: "tomato",
    textShadowColor: "#EEF296", 
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
   },
   scoreTextContainer: {
    flexDirection:"row",
    alignItems: 'center',
    justifyContent:"center",
    width: '95%',
   }
})