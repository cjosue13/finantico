/* eslint-disable react-native/no-raw-text */
import {Box, Center, HStack, Stack, Text, VStack} from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

const Details = ({budgetDetail}) => {
  return (
    <Center mt="5%" ml="5%" mr="5%" flex={1}>
      <Stack alignItems="center" bg="#01234c">
        <HStack space={2} alignItems="center">
          <VStack w="50%">
            <Box>
              <Text bold fontSize={14} color="white">
                Date:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="white">
                  {new Date(budgetDetail.bd_date).toDateString()}
                </Text>
              </Text>
            </Box>
            <Box>
              <Text bold fontSize={14} color="white">
                Amount:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="white">
                  ₡{budgetDetail.bd_paymentAmount}
                </Text>
              </Text>
            </Box>
          </VStack>
          <VStack w="50%">
            <Box>
              <Text bold fontSize={14} color="white">
                Document Type:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="white">
                  {budgetDetail.bd_type === 'I' ? 'Income' : 'Expense'}
                </Text>
              </Text>
            </Box>
            <Box>
              <Text bold fontSize={14} color="white">
                Payment Type:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="white">
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
