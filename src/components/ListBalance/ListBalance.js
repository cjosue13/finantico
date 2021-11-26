/* eslint-disable react/prop-types */
import {Box, Heading, ScrollView, VStack} from 'native-base';
import React from 'react';
import CardBalance from '../CardBalance/CardBalance';

const ListBalance = ({Cards}) => {
  if (Cards.length === 0)
    return (
      <Box bg="white">
        <Heading textAlign="center">Please enter the cards first</Heading>
      </Box>
    );

  return (
    <ScrollView bg="white">
      <Box mt="5">
        <Heading textAlign="center">Summary</Heading>
      </Box>
      <VStack p="5" space="2" alignItems="center">
        {Cards.map(card => (
          <CardBalance key={`card-list-item${card.id}`} Card={card} />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default ListBalance;
