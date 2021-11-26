/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Box, Heading, ScrollView} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import Details from '../components/Details/Details';

const SummaryCardScreen = ({route, navigation}) => {
  const {Budgets} = route.params;

  if (Budgets.length === 0)
    return (
      <Box>
        <Heading textAlign="center">Please enter the budgets first</Heading>
      </Box>
    );

  return (
    <ScrollView>
      {Budgets.map(budget => (
        <Details budgetDetail={budget} key={`budget-item${budget.id}`} />
      ))}
    </ScrollView>
  );
};

export default SummaryCardScreen;
