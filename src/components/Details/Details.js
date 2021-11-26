/* eslint-disable react-native/no-raw-text */
import {Box, Center, HStack, Stack, Text, useToast, VStack} from 'native-base';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useMutation} from '@apollo/client';
import {UPDATE_BUDGET_DETAIL} from '../../graphql/BudgetDetails/BudgetDetails.mutations';
import {StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Details = ({budgetDetail}) => {
  const [updateBudget] = useMutation(UPDATE_BUDGET_DETAIL);
  const toast = useToast();
  const [isSelected, setSelection] = useState(
    budgetDetail.paid !== 'N' ? true : false,
  );

  const save = async value => {
    try {
      await updateBudget({
        variables: {
          input: {
            id: budgetDetail.id,
            paid: value ? 'Y' : 'N',
          },
        },
      });

      toast.show({
        title: 'Budget Detail updated successfully!',
        placement: 'bottom',
      });
    } catch (error) {
      toast.show({
        title: error,
        placement: 'bottom',
      });
    }
  };

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
            <Box>
              <Text bold fontSize={14} color="black">
                Card:&nbsp;&nbsp;
                <Text mt="2" fontSize={12} color="black">
                  {budgetDetail?.Card?.name}
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
            <HStack mt="1">
              <Text bold fontSize={14} color="black" mr="2">
                Finished:
              </Text>
              <CheckBox
                value={isSelected}
                onValueChange={newValue => {
                  save(newValue);
                  setSelection(newValue);
                }}
                style={styles.checkbox}
              />
            </HStack>
          </VStack>
        </HStack>
      </Stack>
    </Center>
  );
};

Details.propTypes = {
  budgetDetail: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
  },
});

export default Details;
