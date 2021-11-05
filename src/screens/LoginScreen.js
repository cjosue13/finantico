/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from 'native-base';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useAuth} from '../context/AuthContext';
import {Image} from 'react-native';

const initialState = {
  mail: '',
  password: '',
};

const LoginScreen = ({setLogin}) => {
  const [user, setUser] = useState(initialState);
  const {login} = useAuth();

  const validate = () => {
    if (user.mail?.trim() !== '' && user.password?.trim() !== '') {
      login(user.mail, user.password);
    } else {
      alert('You must fill in all the fields');
    }
  };

  return (
    <Center flex={1} w="100%">
      <Box alignItems="center">
        <Heading alignText="center" color="#ffffff">
          LogIn
        </Heading>
      </Box>
      <Box mt="5" mb="30">
        <Image
          size={150}
          resizeMode={'contain'}
          borderRadius={100}
          source={require('../assets/FINANTICO.png')}
          style={{width: 150, height: 150}}
          alt="Alternate Text"
        />
      </Box>

      <Stack
        space={2.5}
        alignSelf="center"
        px="4"
        safeArea
        mt="4"
        w={{
          base: '100%',
        }}>
        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text color="#ffffff">Email</Text>
            </FormControl.Label>
            <Input
              value={user.mail}
              onChangeText={text => setUser({...user, mail: text})}
              color="#ffffff"
              placeholder="Email..."
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text color="#ffffff">Password</Text>
            </FormControl.Label>
            <Input
              color="#ffffff"
              placeholder="Password..."
              value={user.password}
              type="password"
              onChangeText={text => setUser({...user, password: text})}
            />
          </FormControl>
        </Box>

        <Box mb="5" mt="5" alignItems="center">
          <Text color="#ffffff" onPress={() => setLogin(false)}>
            You do not have an account yet?
          </Text>
        </Box>

        <Button bg="#7eb2c9" onPress={() => validate()}>
          <Text color="#ffffff">Log In</Text>
        </Button>
      </Stack>
    </Center>
  );
};

LoginScreen.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default LoginScreen;
