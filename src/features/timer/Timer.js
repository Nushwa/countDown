import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { Countdown } from '../../components/Countdown';
import { Button } from '../../components/Button';
import { ProgressBar } from 'react-native-paper';
import { Timing } from './Timing';

import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { useKeepAwake } from 'expo-keep-awake';

const DEFAULT_TIME = 0.1;

const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
     const interval = setInterval( () => Vibration.vibrate(), 500);
     setTimeout(()=> clearInterval(interval), 5000);
    } else {
      Vibration.vibrate(5000);
    }
  };   
   
  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd(); 
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: spacing.md }}>
        <Text style={styles.title}> Focusing on : </Text>

        <Text style={styles.task}> {focusSubject} </Text>
      </View>

      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.btnWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.btnWrapper}>
        {isStarted ? (
          <Button title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <Button title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.clearSubject}> 
      <Button title= "-" 
      size={50}
      onPress={() => clearSubject() }/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubject:{
    paddingBottom: 25,
    paddingLeft: 15,
    flexDirection: 'row'
  }
});

export default Timer;
