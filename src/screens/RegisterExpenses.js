/* eslint-disable react-native/no-raw-text */
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  ScrollView,
  Stack,
  Text,
  TextArea,
  useToast,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useAuth} from '../context/AuthContext';
import {useMutation} from '@apollo/client';
import {SAVE_BUDGET_DETAIL} from '../graphql/BudgetDetails/BudgetDetails.mutations';

const budgetDetailState = {
  bd_description: '',
  bd_date: new Date(),
  bd_paymentType: 'F',
  bd_paymentAmount: '1500',
  bd_type: 'F',
  usu_uid: '',
};

const validationsState = {
  description: false,
};

const RegisterExpenses = () => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [budgetDetail, setBudgetDetail] = useState(budgetDetailState);
  const [validations, setValidations] = useState(validationsState);
  const [loading, setLoading] = useState(false);
  const {user} = useAuth();
  const [saveBudgetDetail] = useMutation(SAVE_BUDGET_DETAIL);
  const toast = useToast();
  0;
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || budgetDetail.year;
    setShow(false);
    setBudgetDetail({...budgetDetail, bd_date: currentDate});
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  useEffect(() => {
    if (loading) handleAddBudgetDetail();
  }, [loading]);

  const handleAddBudgetDetail = async () => {
    validations.description = false;

    if (budgetDetail.bd_description.trim() === '') {
      validations.description = true;
    }

    if (!validations.description) {
      try {
        await saveBudgetDetail({
          variables: {
            input: {...budgetDetail, usu_uid: user.uid},
          },
        });
        toast.show({
          title: 'Budget Detail saved successfully!',
          placement: 'bottom',
        });

        setBudgetDetail(budgetDetailState);
      } catch (error) {
        toast.show({
          title: error,
          placement: 'bottom',
        });
      }
      setValidations({...validationsState});
    } else {
      setValidations({...validations});
    }

    setLoading(false);
  };

  return (
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
        <Heading textAlign="center">Register Expense</Heading>

        <Box>
          <FormControl isInvalid={validations.description} mb="5">
            <FormControl.Label>
              <Text>Description:</Text>
            </FormControl.Label>
            <TextArea
              h={20}
              value={budgetDetail.bd_description}
              placeholder="Description..."
              w={{
                base: '100%',
                md: '25%',
              }}
              onChangeText={text =>
                setBudgetDetail({...budgetDetail, bd_description: text})
              }
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Year:</Text>
            </FormControl.Label>
            <Box>
              <Input
                name="date"
                value={budgetDetail.bd_date.toISOString().slice(0, 10)}
                onFocus={showDatepicker}
              />
            </Box>
            <Box>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={budgetDetail.bd_date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </Box>
          </FormControl>
        </Box>

        <Button
          mt="5"
          bg="#01234c"
          _pressed={{bg: '#06182e'}}
          onPress={() => setLoading(true)}>
          <Text color="#ffffff">Save Expense</Text>
        </Button>
      </Stack>
    </ScrollView>
  );
};

export default RegisterExpenses;
