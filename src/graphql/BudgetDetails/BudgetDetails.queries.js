import gql from 'graphql-tag';

export const GET_BUDGET_DETAILS_BY_CARD = gql`
  query getBudgetDetailsbyCard($card: Int) {
    getBudgetDetailsbyCard(card: $card) {
      bd_description
      bd_date
      bd_paymentType
      bd_paymentAmount
      bd_type
      paid
      Card {
        name
        type
        balance
        description
      }
    }
  }
`;
