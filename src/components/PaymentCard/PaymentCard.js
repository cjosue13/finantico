/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Flex, HStack, Image, Text} from 'native-base';

const MovieCard = ({movie}) => {
  const [open, setOpen] = useState(false);
  return (
    <HStack w="100%">
      <Box w="100%"  bg="#0025FA" p="1" borderRadius="25">
        <HStack>
          <Box>
          </Box>
          <Box ml="5">
            <Text
              textAlign="left"
              color="#000000"
              fontWeight="medium"
              fontSize={15}>
              Pagar el telefono en Gollo
            </Text>
          </Box>
        </HStack>

        <Flex>
          <Text
            mb="2"
            mt="1"
            fontSize={12}
            fontWeight="medium"
            color="#7eb2c9"
            textAlign="left"
            ml="5"
            onPress={() => setOpen(!open)}>
            {open ? 'Close' : 'View more info'}
          </Text>
        </Flex>
      </Box>
    </HStack>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
