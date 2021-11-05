/* eslint-disable react-native/no-raw-text */
import {useQuery} from '@apollo/react-hooks';
import {Box, Heading, ScrollView, Stack} from 'native-base';
import React from 'react';

import PropTypes from 'prop-types';
import {GET_BUDGET_DETAILS_USER} from '../graphql/BudgetDetails/BudgetDetails.queries';
import {useAuth} from '../context/AuthContext';

const PaymentsScreen = ({colorTitle}) => {
  const {user} = useAuth();
  const {data, loading, error} = useQuery(GET_BUDGET_DETAILS_USER, {
    variables: {usu_uid: user.uid},
    pollInterval: 500,
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  console.log(data);

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
          }}></Stack>
      </ScrollView>
    </Box>
  );
};

PaymentsScreen.propTypes = {
  colorTitle: PropTypes.string.isRequired,
};

export default PaymentsScreen;
