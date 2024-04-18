import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Center} from '@gluestack-ui/themed';

export default function AppSpinner({show}) {
  const animation = useRef(null);

  return (
    <Center flex={1}>
      <Center flex={1}>
        <LottieView
          autoPlay={show}
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: 'rgba(0, 0, 0, 0.001)',
          }}
          source={require('../assets/images/Animation.json')}
        />
      </Center>

      {show && (
        <Center
          sx={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.01)',
          }}
        />
      )}
    </Center>
  );
}
