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
import Loading from '../components/Loading/Loading';
import {useAuth} from '../context/AuthContext';
import {SAVE_CARD} from '../graphql/Cards/Card.mutation';
import {useMutation} from '@apollo/client';

const initialState = {
  usu_uid: '',
  name: '',
  type: 'C',
  description: '',
  balance: '',
};

const RegisterCardScreen = () => {
  const [state, setState] = useState(initialState);
  const [saving, setSaving] = useState(false);
  const {user} = useAuth();
  const toast = useToast();
  const [saveCard] = useMutation(SAVE_CARD);

  useEffect(() => {
    if (saving) handleAddCard();
  }, [saving]);

  const save = async (isCredit) => {
    try {
      await saveCard({
        variables: {
          input: {
            ...state,
            usu_uid: user.uid,
            balance: isCredit ? state.balance : null,
          },
        },
      });
      toast.show({
        title: 'Card saved successfully!',
        placement: 'bottom',
      });

      setState({...initialState});
    } catch (error) {
      toast.show({
        title: error,
        placement: 'bottom',
      });
    }
  };

  const handleAddCard = async () => {
    if (state.type === 'D') {
      if (
        state.description.trim() !== '' &&
        state.name.trim() !== '' &&
        state.balance.trim() !== ''
      ) {
        await save(false);
      }
    } else {
      if (state.description.trim() !== '' && state.name.trim() !== '') {
        await save(true);
      }
    }

    setSaving(false);
  };

  if (saving) return <Loading />;

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
        <Heading textAlign="center">Register Cards</Heading>

        <Box>
          <FormControl>
            <FormControl.Label>
              <Text>Type Card:</Text>
            </FormControl.Label>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={state.type}
              onChange={nextValue => {
                setState({...state, type: nextValue});
              }}>
              <Radio value="C" my={1}>
                Credit
              </Radio>
              <Radio value="D" my={1}>
                Debit
              </Radio>
            </Radio.Group>
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Name:</Text>
            </FormControl.Label>
            <Box>
              <Input
                name="name"
                value={state.name}
                onChangeText={text => setState({...state, name: text})}
              />
            </Box>
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Description:</Text>
            </FormControl.Label>
            <TextArea
              h={20}
              value={state.description}
              placeholder="Description..."
              w={{
                base: '100%',
                md: '25%',
              }}
              onChangeText={text => setState({...state, description: text})}
            />
          </FormControl>
        </Box>

        <Box>
          <FormControl mb="5">
            <FormControl.Label>
              <Text>Amount:</Text>
            </FormControl.Label>
            <Input
              value={state.balance}
              type="number"
              name="amount"
              placeholder="Amount..."
              onChangeText={text => setState({...state, balance: text})}
            />
          </FormControl>
        </Box>

        <Button
          mt="5"
          mb="5"
          bg="#01234c"
          _pressed={{bg: '#06182e'}}
          onPress={() => setSaving(true)}>
          <Text color="#ffffff">Save Card</Text>
        </Button>
      </Stack>
    </ScrollView>
  );
};

export default RegisterCardScreen;
