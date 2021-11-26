import gql from 'graphql-tag';

export const GET_CARDS_BY_USER = gql`
  query getCardsByUser($usu_uid: String) {
    getCardsByUser(usu_uid: $usu_uid) {
      id
      name
      type
      balance
      description
      Budgets {
        id
        bd_description
        bd_date
        bd_paymentType
        bd_paymentAmount
        bd_type
        paid
        Card{
          name
        }
      }
    }
  }
`;
