import {Box, Center, HStack, Text, VStack} from 'native-base';
import React from 'react';

const CardBalance = ({Card}) => {
  let incomes = 0,
    expenses = 0;

  Card.Budgets.forEach(budget => {
    if (budget.paid !== 'N') {
      if (budget.bd_type !== 'I') {
        expenses += +budget.bd_paymentAmount;
      } else {
        incomes += +budget.bd_paymentAmount;
      }
    }
  });

  const total = incomes - expenses;

  return (
    <Center
      borderWidth="3"
      borderColor="#5b5b5b"
      rounded="8"
      bg={total < 0 ? '#f96161' : '#f2efef'}
      p="1"
      w="100%">
      <HStack space={2} alignItems="center">
        <VStack w="50%" p="2">
          <Box>
            <Text bold fontSize={16} color="black">
              Name:&nbsp;&nbsp;
              <Text mt="2" fontSize={16} color="black">
                {Card.name}
              </Text>
            </Text>
          </Box>

          <Box>
            <Text bold fontSize={16} color="black">
              Type:&nbsp;&nbsp;
              <Text mt="2" fontSize={16} color="black">
                {Card.type === 'C' ? 'Credit' : 'Debit'}
              </Text>
            </Text>
          </Box>
        </VStack>
        <VStack w="50%">
          <Box>
            <Text bold fontSize={20} color="black">
              Incomes:&nbsp;&nbsp;
              <Text mt="2" fontSize={20} color="black">
                ₡{incomes}
              </Text>
            </Text>
          </Box>
          <Box>
            <Text bold fontSize={18} color="black">
              Expenses:&nbsp;&nbsp;
              <Text mt="2" fontSize={18} color="black">
                ₡{expenses}
              </Text>
            </Text>
          </Box>
          <Box>
            <Text bold fontSize={18} color="black">
              Total:&nbsp;&nbsp;
              <Text mt="2" fontSize={18} color="black">
                ₡{total}
              </Text>
            </Text>
          </Box>
        </VStack>
      </HStack>
    </Center>
  );
};

export default CardBalance;
