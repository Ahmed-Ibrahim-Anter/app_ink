import {useEffect, useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Heading,
  StatusBar,
  useToast,
  FlatList,
} from '@gluestack-ui/themed';
import LeftArrow from '../components/LeftArrow';
import WeatherCard from '../components/WeatherCard';
import AppSpinner from '../components/AppSpinner';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWeatherData} from '../utils/fetchWeatherData';
import {weatherSelectors} from '../redux/weather';

/* ------------------------------------ x ----------------------------------- */
const headingStyle = {
  color: '$white',
  fontSize: '$3xl',
  sx: {fontFamily: 'Poppins-Medium'},
};
/* ------------------------------------ x ----------------------------------- */

const AppWeather = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const data = useSelector(weatherSelectors.selectAll);
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    fetchWeatherData(dispatch, () => setLoading(false), toast);
  }, []);
  return (
    <VStack flex={1}>
      <StatusBar backgroundColor="#D25F5F" barStyle="light-content" />
      {loading ? (
        <AppSpinner show={loading} />
      ) : (
        <>
          <Box h="$1/6" bg="#D25F5F">
            <HStack
              position="absolute"
              left={40}
              top={40}
              alignItems="center"
              space="lg">
              <LeftArrow
                onPress={() => navigation.goBack()}
                bg="#6455CC"
                hover="rgba(183, 186, 228, 0.4)"
              />
              <Heading {...headingStyle}>App Weather</Heading>
            </HStack>
          </Box>
          <VStack h="$5/6">
            <FlatList
              data={data}
              renderItem={({item}) => <WeatherCard item={item} />}
              keyExtractor={item => item.id + '#'}
            />
          </VStack>
        </>
      )}
    </VStack>
  );
};

export default AppWeather;
