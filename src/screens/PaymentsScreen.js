import {useQuery} from '@apollo/react-hooks';
import {Box, Heading, ScrollView, Stack} from 'native-base';
import React from 'react';
import MovieCard from '../components/PaymentCard/PaymentCard';
import PropTypes from 'prop-types';

const PaymentsScreen = ({colorTitle}) => {
  
    return (
        <Box
      w={{
        base: '100%',
        md: '90%',
      }}
      mt="5"
      mb="5">
      <Heading textAlign="center" color={colorTitle}>
        List of Movies
      </Heading>

      <ScrollView
        w={{
          base: '100%',
          md: '90%',
        }}>
        <Stack
          space={2.5}
          alignSelf="center"
          px="4"
          safeArea
          mt="4"
          w={{
            base: '100%',
            md: '25%',
          }}>
         
        </Stack>
      </ScrollView>
    </Box>
    )
};

PaymentsScreen.propTypes = {
    colorTitle: PropTypes.string.isRequired,
  };
  
  export default PaymentsScreen;