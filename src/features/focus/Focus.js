import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {Button } from '../../components/Button.js';
import {fontSizes, spacing} from '../../utils/sizes';
import {colors} from '../../utils/colors'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>

          <TextInput style={ { flex: 1, marginRight: spacing.lg } } 
         onSubmitEditing = {
           ({ nativeEvent }) => {
              setSubject(nativeEvent.text); 
            }}
            
          />
          <Button 
          size={50}
           title = "+" 
           onPress = {() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {  
    color: colors.white,
    fontWeight: 'bold',
    fontSize: spacing.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: "row",
    alignItems: "center"
  },
});
