/* eslint-disable react-native/no-raw-text */
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Radio,
  ScrollView,
  Stack,
  Text,
  TextArea,
  useToast,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useAuth} from '../context/AuthContext';
import {useMutation, useQuery} from '@apollo/client';
import {SAVE_BUDGET_DETAIL} from '../graphql/BudgetDetails/BudgetDetails.mutations';
import Loading from '../components/Loading/Loading';
import RNPickerSelect from 'react-native-picker-select';
import {GET_CARDS_BY_USER} from '../graphql/Cards/Cards.queries';
import PushNotification from 'react-native-push-notification';

const budgetDetailState = {
  bd_description: '',
  bd_date: new Date(),
  bd_paymentType: 'F',
  bd_paymentAmount: '',
  bd_type: 'E',
  paid: 'N',
  card: undefined,
};

const validationsState = {
  description: false,
  amount: false,
};

const RegisterBudgetDetailScreen = () => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [budgetDetail, setBudgetDetail] = useState(budgetDetailState);
  const [validations, setValidations] = useState(validationsState);
  const [saving, setSaving] = useState(false);
  const {user} = useAuth();
  const {data, error, loading} = useQuery(GET_CARDS_BY_USER, {
    variables: {usu_uid: user.uid},
    pollInterval: 500,
  });
  const [saveBudgetDetail] = useMutation(SAVE_BUDGET_DETAIL);
  const toast = useToast();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || budgetDetail.bd_date;
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
    if (saving) handleAddBudgetDetail();
  }, [saving]);

  const handleAddBudgetDetail = async () => {
    validations.description = false;
    validations.amount = false;

    if (budgetDetail.bd_description.trim() === '') {
      validations.description = true;
    }
    if (budgetDetail.bd_paymentAmount.trim() === '') {
      validations.amount = true;
    }

    if (!validations.description && !validations.amount) {
      try {
        await saveBudgetDetail({
          variables: {
            input: budgetDetail,
          },
        });

        toast.show({
          title: 'Budget Detail saved successfully!',
          placement: 'bottom',
        });

        const card = data.getCardsByUser.find(
          card => budgetDetail.card === card.id,
        );

        console.log(card);

        PushNotification.localNotificationSchedule({
          channelId: 'finantico_id', // (required)
          channelName: 'Finantico',
          title: `Recordatorio de tu tarjeta ${card.name}`,
          message:
            'Revisa la aplicación debido a que tienes cercana una acción en tu tarjeta',
          date: new Date(Date.now() + 60 * 1000), // in 60 secs
          allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

          /* Android Only Properties */ 
          repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
        }); 

        setBudgetDetail(budgetDetailState);
      } catch (error) {
        toast.show({
          title: error,
          placement: 'bottom',
        });
      }
      setValidations(validationsState);
    } else {
      setValidations({...validations});
    }

    setSaving(false);
  };

  if (error)
    return (
      <Box>
        <Heading textAlign="center">An unexpected error has occurred</Heading>
      </Box>
    );

  if (loading || saving) return <Loading />;

  const cards = data.getCardsByUser.map(card => ({
    key: `card-${card.id}`,
    label: card.name,
    inputLabel: card.name,
    value: card.id,
  }));

  if (cards.length === 0)
    return (
      <Box>
        <Heading textAlign="center">Please enter the cards first</Heading>
      </Box>
    );

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
        <Heading textAlign="center">Register Budget Detail</Heading>

        <Box>
          <FormControl>
            <FormControl.Label>
              <Text>Document Type:</Text>
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={budgetDetail.bd_type}
              onChange={nextValue => {
                setBudgetDetail({...budgetDetail, bd_type: nextValue});
              }}>
              <Radio value="E" my={1}>
                Expense
              </Radio>
              <Radio value="I" my={1}>
                Income
              </Radio>
            </Radio.Group>
          </FormControl>
        </Box>

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
              <Text>Date:</Text>
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

        <Box>
          <FormControl isInvalid={validations.amount} mb="5">
            <FormControl.Label>
              <Text>Amount:</Text>
            </FormControl.Label>
            <Input
              value={budgetDetail.bd_paymentAmount}
              type="number"
              name="amount"
              placeholder="Amount..."
              onChangeText={text =>
                setBudgetDetail({...budgetDetail, bd_paymentAmount: text})
              }
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormControl.Label>
              <Text>Payment Type:</Text>
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={budgetDetail.bd_paymentType}
              onChange={nextValue => {
                setBudgetDetail({...budgetDetail, bd_paymentType: nextValue});
              }}>
              <Radio value="F" my={1}>
                Permanent
              </Radio>
              <Radio value="V" my={1}>
                Variable
              </Radio>
            </Radio.Group>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <FormControl.Label>
              <Text>Select a Card:</Text>
            </FormControl.Label>
            <RNPickerSelect
              onValueChange={value =>
                setBudgetDetail({...budgetDetail, card: value})
              }
              items={cards}
              value={budgetDetail.card}
            />
          </FormControl>
        </Box>

        <Button
          mt="5"
          mb="5"
          bg="#01234c"
          _pressed={{bg: '#06182e'}}
          onPress={() => setSaving(true)}>
          <Text color="#ffffff">Save Budget Detail</Text>
        </Button>
      </Stack>
    </ScrollView>
  );
};

export default RegisterBudgetDetailScreen;
