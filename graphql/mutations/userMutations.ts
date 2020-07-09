import gql from 'graphql-tag';

export const RegisterCustomer = gql`
    mutation RegisterCustomerAccount($input: RegisterCustomerInput!) {
        registerCustomerAccount(input: $input)
    }
`;
