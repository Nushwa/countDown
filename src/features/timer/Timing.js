import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components/Button';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingbtn}>
        <Button
          size={75}
          title="10"
          onPress={() => {
            onChangeTime(10);
          }}
        />
      </View>

      <View style={styles.timingbtn}>
        <Button
          size={75}
          title="15"
          onPress={() => {
            onChangeTime(15);
          }}
        />
      </View>

      <View style={styles.timingbtn}>
        <Button
          size={75}
          title="20"
          onPress={() => {
            onChangeTime(20);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingbtn: {
    flex: 1,
    alignItems: 'center',
  },
});
