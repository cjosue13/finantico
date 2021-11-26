/* eslint-disable react/prop-types */
import {Box, Heading, ScrollView, VStack} from 'native-base';
import React from 'react';
import Card from '../Card/Card';

const ListCards = ({Cards, navigation}) => {
  if (Cards.length === 0)
    return (
      <Box>
        <Heading textAlign="center">Please enter the cards first</Heading>
      </Box>
    );

  return (
    <ScrollView>
      <Box mt="5">
        <Heading textAlign="center">Available Cards</Heading>
      </Box>
      <VStack p="5" space="2" alignItems="center">
        {Cards.map(card => (
          <Card
            key={`card-list-item${card.id}`}
            Card={card}
            navigation={navigation}
          />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default ListCards;
