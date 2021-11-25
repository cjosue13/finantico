/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-raw-text */
import {Box, Center, HStack, Pressable, Text} from 'native-base';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {useAuth} from '../context/AuthContext';
import PaymentsScreen from './PaymentsScreen';
import RegisterBudgetDetailScreen from './RegisterBudgetDetailScreen';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({navigation}) => {
  const [selected, setSelected] = useState(0);
  const {logout} = useAuth();
  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Box position="absolute" right={0} mt="5">
        <Image
          size={150}
          resizeMode={'contain'}
          borderRadius={100}
          source={require('../assets/FINANTICO.png')}
          style={{width: 80, height: 80}}
          alt="Alternate Text"
        />
      </Box>
      <Center position="relative" flex={1}>
        {/*<Icon name="eye-slash" size={100} color="#900" solid/>;*/}
        {selected === 0 && <PaymentsScreen navigation={navigation} />}
        {/* selected === 1 && <FavoriteScreen /> */}
        {selected === 1 && <RegisterBudgetDetailScreen />}
      </Center>
      <HStack bg="#01234c" alignItems="center" safeAreaBottom>
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(0)}>
          <Center>
            <Text bold color="white" fontSize={18}>
              Payment
            </Text>
          </Center>
        </Pressable>
        {/* <Pressable
            cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}>
            <Center>
              <Text bold color="white" fontSize={18}>
                Favorites
              </Text>
            </Center>
          </Pressable> */}
        <Pressable
          opacity={selected === 1 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}>
          <Center>
            <Text bold color="white" fontSize={18}>
              Budget Detail
            </Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => logout()}>
          <Center>
            <Text bold color="white" fontSize={18}>
              Logout
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default HomeScreen;
