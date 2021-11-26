/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-raw-text */
import {
  Box,
  Center,
  HStack,
  Stack,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PaymentsScreen = ({navigation}) => {
  /* const {user} = useAuth();
  const {data, loading, error} = useQuery(GET_BUDGET_DETAILS_USER, {
    variables: {usu_uid: user.uid},
    pollInterval: 500,
  });

  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;

  // const budgetDetails = data?.getBudgetDetailsbyUser; */

  return (
    <Box
      w={{
        base: '100%',
        md: '90%',
      }}
      h="78%">
      {/* budgetDetails.map(budgetDetail => (
            <PaymentCard
              key={`budgetDetauk-${budgetDetail.id}`}
              budgetDetail={budgetDetail}
            />
          )) */}

      <Stack alignItems="center" w="100%">
        <Center>
          <Text fontSize={32} bold>
            Select Option
          </Text>
        </Center>
        <HStack p="5" space="2" alignItems="center">
          <Box w="33%">
            <Pressable onPress={() => navigation.navigate('Income')}>
              <Center
                borderWidth="3"
                borderColor="#5b5b5b"
                rounded="8"
                bg="#f2efef"
                p="1">
                <VStack>
                  <Center>
                    <Text fontSize={20} color="#707070" bold>
                      Incomes
                    </Text>
                  </Center>
                  <Box mt="1" justifyContent="center" alignItems="center">
                    <FontAwesome5
                      color="#707070"
                      name={'file-download'}
                      size={70}
                      solid
                    />
                  </Box>
                </VStack>
              </Center>
            </Pressable>
          </Box>

          <Box w="33%">
            <Pressable onPress={() => navigation.navigate('Expense')}>
              <Center
                borderWidth="3"
                borderColor="#5b5b5b"
                rounded="8"
                bg="#f2efef"
                p="1">
                <VStack>
                  <Center>
                    <Text fontSize={20} color="#707070" bold>
                      Expenses
                    </Text>
                  </Center>
                  <Box mt="1" justifyContent="center" alignItems="center">
                    <FontAwesome5
                      color="#707070"
                      name={'file-upload'}
                      size={70}
                      solid
                    />
                  </Box>
                </VStack>
              </Center>
            </Pressable>
          </Box>

          <Box w="33%">
            <Pressable onPress={() => navigation.navigate('Card')}>
              <Center
                borderWidth="3"
                borderColor="#5b5b5b"
                rounded="8"
                bg="#f2efef"
                p="1">
                <VStack>
                  <Center>
                    <Text fontSize={20} color="#707070" bold>
                      Cards
                    </Text>
                  </Center>

                  <Box mt="1" justifyContent="center" alignItems="center">
                    <FontAwesome5
                      color="#707070"
                      name={'credit-card'}
                      size={70}
                      solid
                    />
                  </Box>
                </VStack>
              </Center>
            </Pressable>
          </Box>
        </HStack>
        <HStack p="5" space="2" alignItems="center">
        <Box w="100%">
            <Pressable onPress={() => navigation.navigate('Balance')}>
              <Center
                borderWidth="3"
                borderColor="#5b5b5b"
                rounded="8"
                bg="#f2efef"
                p="1">
                <VStack>
                  <Center>
                    <Text fontSize={20} color="#707070" bold>
                      Balance
                    </Text>
                  </Center>
                  <Box mt="1" justifyContent="center" alignItems="center">
                    <FontAwesome5
                      color="#707070"
                      name={'balance-scale-right'}
                      size={70}
                      solid
                    />
                  </Box>
                </VStack>
              </Center>
            </Pressable>
          </Box>
        </HStack>
      </Stack>
    </Box>
  );
};

PaymentsScreen.propTypes = {};

export default PaymentsScreen;
