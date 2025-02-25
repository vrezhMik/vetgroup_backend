import { gql } from "@apollo/client";

export const LOGIN_FRAGMENT = gql`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        documentId
      }
    }
  }
`;

export const USER_FRAGMENT = gql`
  query GetVetgroupUsers($id: ID!) {
    vetgroupUsers(filters: { user: { documentId: { eq: $id } } }) {
      user {
        first_name
        last_name
        company
      }
    }
  }
`;

export const CHANGE_PASSWORD_FRAGMENT = gql`
  mutation ChangePassword(
    $old_password: String!
    $new_password: String!
    $confirm_password: String!
  ) {
    changePassword(
      currentPassword: $old_password
      password: $new_password
      passwordConfirmation: $confirm_password
    ) {
      user {
        documentId
      }
    }
  }
`;
