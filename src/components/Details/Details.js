/* eslint-disable react-native/no-raw-text */
import {Box, Center, HStack, Stack, Text, VStack} from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

const Details = ({budgetDetail}) => {
  return (
    <Center mt="5%" ml="5%" mr="5%" flex={1}>
      <Stack
        p="2"
        alignItems="center"
        borderWidth="3"
        borderColor="#5b5b5b"
        rounded="8"
        bg="#f2efef">
        <HStack space={2} alignItems="center">
          <VStack w="50%">
            <Box>
              <Text bold fontSize={14} color="black">
                Date:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="black">
                  {new Date(budgetDetail.bd_date).toDateString()}
                </Text>
              </Text>
            </Box>
            <Box>
              <Text bold fontSize={14} color="black">
                Amount:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="black">
                  ₡{budgetDetail.bd_paymentAmount}
                </Text>
              </Text>
            </Box>
          </VStack>
          <VStack w="50%">
            <Box>
              <Text bold fontSize={14} color="black">
                Document Type:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="black">
                  {budgetDetail.bd_type === 'I' ? 'Income' : 'Expense'}
                </Text>
              </Text>
            </Box>
            <Box>
              <Text bold fontSize={14} color="black">
                Payment Type:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="black">
                  {budgetDetail.bd_paymentType === 'F'
                    ? 'Permanent'
                    : 'Variable'}
                </Text>
              </Text>
            </Box>
          </VStack>
        </HStack>
      </Stack>
    </Center>
  );
};

Details.propTypes = {
  budgetDetail: PropTypes.object.isRequired,
};

export default Details;
