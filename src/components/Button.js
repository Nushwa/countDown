import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Button = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity 
    style={[styles(size).radius, style]}
    onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title} </Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: 10,
      backgroundColor: 'gray',
      padding: 20
    },
    text: {
      color: '#fff',
      fontSize: size / 3,
    },
  });
