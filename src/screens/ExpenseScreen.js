import {useQuery} from '@apollo/client';
import {Box, Center, Heading, ScrollView} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import Details from '../components/Details/Details';
import Loading from '../components/Loading/Loading';
import {useAuth} from '../context/AuthContext';
import {GET_PAYMENTS_BY_TYPE_AND_USER} from '../graphql/BudgetDetails/BudgetDetails.queries';

const ExpenseScreen = ({navigation}) => {
  const {user} = useAuth();
  const {data, error, loading} = useQuery(GET_PAYMENTS_BY_TYPE_AND_USER, {
    variables: {
      input: {
        bd_type: 'E',
        usu_uid: user.uid,
      },
    },
    pollInterval: 500,
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

  const items = data.payments;

  if (items.length === 0)
    return (
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}>
          <Heading textAlign="center">Please enter the Budgets first</Heading>
        </Center>
      </Box>
    );

  return (
    <ScrollView bg="white">
      {items.map(item => (
        <Details budgetDetail={item} key={`budget-item-expense${item.id}`} />
      ))}
    </ScrollView>
  );
};

export default ExpenseScreen;
