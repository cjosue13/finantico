/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Box, Center, HStack, Pressable, Stack, Text, VStack} from 'native-base';
import React from 'react';

const Card = ({navigation, Card}) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Summary-Card', {
          Budgets: Card.Budgets,
        })
      }>
      <Center
        borderWidth="3"
        borderColor="#5b5b5b"
        rounded="8"
        bg="#f2efef"
        p="1"
        w="100%">
        <HStack space={2} alignItems="center">
          <VStack w="50%" p="2">
            <Box>
              <Text bold fontSize={14} color="black">
                Name:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="black">
                  {Card.name}
                </Text>
              </Text>
            </Box>

            <Box>
              <Text bold fontSize={14} color="black">
                Description:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="black">
                  {Card.description}
                </Text>
              </Text>
            </Box>
          </VStack>
          <VStack w="50%">
            <Box>
              <Text bold fontSize={14} color="black">
                Type:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="black">
                  {Card.type === 'C' ? 'Credit' : 'Debit'}
                </Text>
              </Text>
            </Box>
          </VStack>
        </HStack>
      </Center>
    </Pressable>
  );
};

export default Card;
