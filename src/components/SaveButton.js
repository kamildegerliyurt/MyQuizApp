import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {saveScore} from "../redux/dataSlice/"

const SaveButton = (props) => {

const dispatch = useDispatch();

const handleSaveButton = ()=> {
  dispatch(saveScore())
}


  return (
    <Pressable 
    style={({pressed})=> [{transform: [{scale: pressed ? 0.95 : 1}]},styles.saveButtonContainer]}
    onPress={handleSaveButton}>
       <Text style={styles.saveText}>SaveButton</Text>
    </Pressable>
  )
}

export default SaveButton

const styles = StyleSheet.create({
  saveText: {
    fontWeight:'bold',
    color:'white',
  },
  saveButtonContainer: {
    backgroundColor:'blue',
    width:'50%',
    alignItems:'center',
    marginVertical:10,
    paddingVertical: 12,
    borderRadius: 10,
  }
  
})
