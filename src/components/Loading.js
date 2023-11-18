import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Image } from 'react-native';

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: false,
    });

    const fadeOut = Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: false,
    });

    const sequenceAnimation = Animated.sequence([fadeIn, fadeOut]);

    const loop = () => {
      Animated.loop(sequenceAnimation).start(() => {
        // Optionally, you can add a callback function to handle completion
        // For example, setLoading(false); // Set loading to false when animation completes
      });
    };

    if (loading) {
      loop();
    }

    // Clean up the animation when the component unmounts
    return () => {
      fadeAnim.removeAllListeners();
    };
  }, [fadeAnim, loading]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.loadingContainer, { opacity: fadeAnim }]}>
        <Image style={styles.image} source={require('../../assets/loadingIMG.png')}/>
        <Text>Loading...</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Use an rgba color with reduced opacity
    padding: 20,
    borderRadius: 10,
    alignItems:'center',
  },
  image:{
    width:150,
    height:150,
    resizeMode:'contain'
  }
});

export default Loading;