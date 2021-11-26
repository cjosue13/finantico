/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Box, Center, Heading, ScrollView} from 'native-base';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Details from '../components/Details/Details';

const SummaryCardScreen = ({route, navigation}) => {
  const {Budgets} = route.params;

  const [list, setList] = useState(Budgets);
  if (list.length === 0)
    return (
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}>
          <Heading textAlign="center">Please enter the Budgets first</Heading>
        </Center>
      </Box>
    );

  return (
    <ScrollView bg="white">
      {list.map(budget => (
        <Details
          setList={setList}
          budgetDetail={budget}
          key={`budget-item${budget.id}`}
        />
      ))}
    </ScrollView>
  );
};

export default SummaryCardScreen;
