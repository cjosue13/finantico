import {useQuery} from '@apollo/client';
import {Box, Center, Heading} from 'native-base';
import React from 'react';
import ListCards from '../components/ListCards/ListCards';
import Loading from '../components/Loading/Loading';
import {useAuth} from '../context/AuthContext';
import {GET_CARDS_BY_USER} from '../graphql/Cards/Cards.queries';

const CardScreen = ({navigation}) => {
  const {user} = useAuth();
  const {data, error, loading} = useQuery(GET_CARDS_BY_USER, {
    variables: {usu_uid: user.uid},
  });

  if (error)
    return (
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}>
          <Heading textAlign="center">An unexpected error has occurred</Heading>
        </Center>
      </Box>
    );

  if (loading)
    return (
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}>
          <Loading />
        </Center>
      </Box>
    );

  const cards = data.getCardsByUser;

  return <ListCards navigation={navigation} Cards={cards} />;
};

export default CardScreen;
