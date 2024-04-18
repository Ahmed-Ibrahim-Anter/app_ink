import {memo} from 'react';
import {Box, HStack, VStack, Image, Text, Icon} from '@gluestack-ui/themed';
import weatherImage from '../assets/images/weather.png';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';

import CardFooter from '../components/CardFooter';

const WeatherCard = ({item: {date, city, temperature, icon}}) => {
  return (
    <VStack w="90%" alignSelf="center" mt="$4" mb="$8" flex={1}>
      <Box minHeight={180}>
        <Image
          source={weatherImage}
          alt="weather"
          w="100%"
          h="100%"
          rounded="$lg"
        />
        <HStack
          zIndex={300}
          position="absolute"
          left={10}
          top={10}
          alignItems="center">
          <Image source={{uri: icon}} size="xs" alt={city} />

          <Text color="#FFC600">{temperature}</Text>
        </HStack>
      </Box>
      <HStack w="100%" justifyContent="space-between" mt="$1" px="$.5">
        <CardFooter as={FontAwesome6} name="location-dot" text={city} />
        <HStack>
          <CardFooter as={Feather} name="calendar" text={date} />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default memo(WeatherCard);
