import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryData } from '../redux/dataSlice';
import { CategoryButton, Loading } from '../components/';

const Home = () => {
//--------------------------------------------------
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.data);
//--------------------------------------------------
  useEffect(() => {
    dispatch(getCategoryData());
  }, []);
//--------------------------------------------------  
  if (isLoading) {
    return <Loading />;
  }
//-------------------------------------------------- 

  return (
    <SafeAreaView style={styles.homeContainer}>

      <View style={styles.letsTextContainer}>
        <Text style={styles.titleText}>Let's Practice</Text>
        <Image style={{ width: 50, height: 50, resizeMode: 'center'}} 
               source={require('../../assets/questions.png')} />
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          data={categories}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
            <CategoryButton data={item}
                            index={index} />
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CDF5FD',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
    paddingLeft: 30,
    flexDirection: 'row',
    color: "tomato",
    textShadowColor: "#5B2E35", 
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 10,
  },
  flatListContainer: {
    flex: 5,
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letsTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    width: '95%',
  },
});
