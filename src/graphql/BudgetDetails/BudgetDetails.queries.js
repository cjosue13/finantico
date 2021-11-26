import gql from 'graphql-tag';

export const GET_BUDGET_DETAILS_BY_CARD = gql`
  query getBudgetDetailsbyCard($card: Int) {
    getBudgetDetailsbyCard(card: $card) {
      id
      bd_description
      bd_date
      bd_paymentType
      bd_paymentAmount
      bd_type
      paid
      Card {
        id
        name
        type
        balance
        description
      }
    }
  }
`;

export const GET_PAYMENTS_BY_TYPE_AND_USER = gql`
  query getBudgetDetailsbyTypeAndUser($input: inputCardType) {
    payments: getBudgetDetailsbyTypeAndUser(input: $input) {
      id
      bd_description
      bd_date
      bd_paymentType
      bd_paymentAmount
      bd_type
      paid
      Card {
        id
        name
        type
        balance
        description
      }
    }
  }
`;
