import React from 'react';
import { StyleSheet, Text, View } from "react-native"
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Button } from '../components/Button';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>
        Home
      </Text>
      <Button text="Login" onPress={NavigationActions.login} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home