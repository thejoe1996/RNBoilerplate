import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Actions as NavigationActions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  headerButton: {
    fontSize: 24,
    padding: 12,
  },
  headerIconContainer: {
    alignItems: 'center',
  },
});

export const backButton = () => (
  <TouchableOpacity onPress={() => NavigationActions.pop()}>
    <View style={styles.headerIconContainer}>
      <Icon name="arrow-left" style={styles.headerButton} />
    </View>
  </TouchableOpacity>
);
