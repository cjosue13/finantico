import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useAuth} from '../../context/AuthContext';
import {Box, Center} from 'native-base';
import RegisterScreen from '../../screens/RegisterScreen';
import LoginScreen from '../../screens/LoginScreen';
import HomeScreen from '../../screens/HomeScreen';

const Navigation = () => {
  const [login, setLogin] = useState(true);
  const {user, setUser} = useAuth(null);

  auth().onAuthStateChanged(function (user) {
    if (user) {
      setUser(user);
      /*user.getIdToken().then(function (idToken) {
        });*/
    }
  });

  return (
    <Center bg="#01234c" flex={1} px="3">
      <Box h="90%" w="100%" alignItems="flex-start">
        {user ? (
          <HomeScreen />
        ) : login ? (
          <LoginScreen setLogin={setLogin} />
        ) : (
          <RegisterScreen setLogin={setLogin} />
        )}
      </Box>
    </Center>
  );
};

export default Navigation;
