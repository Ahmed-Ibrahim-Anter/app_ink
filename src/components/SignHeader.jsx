import React, {memo} from 'react';
import {
  Heading,
  StatusBar,
  VStack,
  ImageBackground,
} from '@gluestack-ui/themed';
import headerImage from '../assets/images/background.png';
import LeftArrow from './LeftArrow';
const headingStyle = {
  color: '$white',
  fontSize: '$3xl',
  sx: {fontFamily: 'Poppins-Bold'},
};

const SignHeader = ({text, onPress}) => {
  return (
    <>
      <StatusBar backgroundColor="$white" barStyle="dark-content" />
      <ImageBackground
        source={headerImage}
        sx={{flex: 1, justifyContent: 'center'}}>
        <VStack
          space="2xl"
          position="absolute"
          zIndex={1000}
          left={40}
          top={40}>
          <LeftArrow
            onPress={onPress}
            bg="#b7bae4"
            hover="rgba(183, 186, 228, 0.4)"
          />
          <VStack space="sm">
            <Heading {...headingStyle}>{text}</Heading>
            <Heading {...headingStyle}>account</Heading>
          </VStack>
        </VStack>
      </ImageBackground>
    </>
  );
};

export default memo(SignHeader);
