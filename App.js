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
import { ApolloProvider } from '@apollo/client';
import { client } from './src/graphql/client';
import { AuthProvider } from './src/context/AuthContext';
import Navigation from './src/components/Navigation/Navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </ApolloProvider>
    </NativeBaseProvider>
  );
};
export default App;
