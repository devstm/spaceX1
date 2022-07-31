import { gql } from '@apollo/client';

export const MISSIONS_QUERY = gql`
  query Query {
    missionsResult {
      data {
        name
        description
        manufacturers
        id
        twitter
        website
        wikipedia
        payloads {
          id
          payload_mass_kg
          payload_mass_lbs
          payload_type
          reused
          nationality
          manufacturer
        }
      }
    }
  }
`;
