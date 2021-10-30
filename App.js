/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Code,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import HomeScreen from './src/screens/HomeScreen';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/graphql/client';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <AuthProvider>
          <HomeScreen />
        </AuthProvider>
      </ApolloProvider>
    </NativeBaseProvider>
  );
};
export default App;
