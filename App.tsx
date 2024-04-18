import 'react-native-gesture-handler';
import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from './src/constants/theme';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import AppWrapper from './src/navigation/AppWrapper';

export default function App() {
  return (
    <Provider store={store}>
      <GluestackUIProvider config={config}>
        <AppWrapper />
      </GluestackUIProvider>
    </Provider>
  );
}
