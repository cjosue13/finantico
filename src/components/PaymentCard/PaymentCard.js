/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Flex, HStack, Text} from 'native-base';
import Details from '../Details/Details';

const MovieCard = ({budgetDetail}) => {
  const [open, setOpen] = useState(false);
  return (
    <HStack w="100%">
      <Box w="100%" bg="#01234c" p="1" borderRadius="10">
        <HStack>
          <Box ml="5">
            <Text
              textAlign="left"
              color="white"
              fontWeight="medium"
              fontSize={15}>
              {budgetDetail.bd_description}
            </Text>
          </Box>
        </HStack>

        {open && <Details budgetDetail={budgetDetail} />}

        <Flex>
          <Text
            mt="2"
            mr="5%"
            fontSize={12}
            fontWeight="medium"
            color="#7eb2c9"
            textAlign="right"
            onPress={() => setOpen(!open)}>
            {open ? 'Close' : 'View more info'}
          </Text>
        </Flex>
      </Box>
    </HStack>
  );
};

MovieCard.propTypes = {
  budgetDetail: PropTypes.object.isRequired,
};

export default MovieCard;
