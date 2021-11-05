/* eslint-disable react-native/no-raw-text */
import {Box, Text, VStack} from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';

const Details = ({budgetDetail}) => {
  return (
    <VStack mt="5%" ml="5%" mr="5%" bg="#01234c">
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
  );
};

Details.propTypes = {
  budgetDetail: PropTypes.object.isRequired,
};

export default Details;
