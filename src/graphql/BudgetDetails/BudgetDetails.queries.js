import gql from 'graphql-tag';

export const GET_BUDGET_DETAILS_USER = gql`
  query getBudgeDetails($usu_uid: String) {
    getBudgetDetailsbyUser(usu_uid: $usu_uid) {
      id
      bd_description
      bd_date
      bd_paymentType
      bd_paymentAmount
      bd_type
    }
  }
`;
