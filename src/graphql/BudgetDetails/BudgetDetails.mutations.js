import gql from 'graphql-tag';

export const SAVE_BUDGET_DETAIL = gql`
  mutation saveBudgetDetail($input: inputBudgetDetail) {
    createBudgetDetail(budgetDetail: $input) {
      id
      bd_description
    }
  }
`;
