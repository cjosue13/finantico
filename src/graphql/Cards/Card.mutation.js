import gql from 'graphql-tag';

export const SAVE_CARD = gql`
  mutation saveCard($input: inputCard) {
    createCard(card: $input) {
      id
      name
      type
      balance
      description
    }
  }
`;
