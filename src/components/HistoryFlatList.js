import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const HistoryFlatList = (props) => {

const scoreData = props.scoreHistoryData

  return (
    <View style={styles.historyContainer}>

      <FlatList 
      data={scoreData}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index)=> index.toString()}
      renderItem={({item})=> {

            const dateString = item.date

            const dateObject = new Date(dateString)

            const formattedDated = dateObject.toLocaleDateString()
            const formattedTime = dateObject.toLocaleTimeString()

        return(
         <View style={styles.scoresContainer}>
            <Text style={styles.dateText}>Date: {formattedDated} {formattedTime}</Text>
            <Text style={{color: item.score > 0 ? "green" : "red"}}>Score: {item.score}</Text>
         </View>
        )
      }}
      
      />
   
    </View>
  )
}

export default HistoryFlatList

const styles = StyleSheet.create({
    historyContainer: {
        flex:1,
        width:'100%'
    },
    scoresContainer: {
        width:'100%',
        borderBottomWidth:0.5,
        borderColor:"gray",
        borderRadius:10,
        marginVertical:15,
        padding:10,
        paddingHorizontal:30,
        paddingVertical: 15,
        justifyContent:'space-around',
        flexDirection:'row'
    },
    dateText: {
        fontWeight:'bold',
    }
})