import gql from 'graphql-tag';

export const SAVE_BUDGET_DETAIL = gql`
  mutation saveBudgetDetail($input: inputBudgetDetail) {
    createBudgetDetail(budgetDetail: $input) {
      id
      bd_description
    }
  }
`;

export const UPDATE_BUDGET_DETAIL = gql`
  mutation updateBudgetDetail($input: budgetUpdate) {
    updateBudgetDetail(input: $input) {
      id
      bd_description
    }
  }
`;
