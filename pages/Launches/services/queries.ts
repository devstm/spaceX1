import { gql } from '@apollo/client';

export const LAUNCHES_QUERY = gql`
  {
    launchesPast {
      id
      details
      launch_date_local
      launch_date_unix
      launch_date_utc
      launch_success
      launch_year
      launch_site {
        site_name
      }
      mission_id
      mission_name
      rocket {
        rocket_name
        rocket_type
        first_stage {
          cores {
            reused
            land_success
          }
        }
        fairings {
          reused
        }
        rocket {
          country
          description
          diameter {
            feet
            meters
          }
          mass {
            kg
            lb
          }
          cost_per_launch
          success_rate_pct
        }
      }
      ships {
        model
        name
      }
      upcoming
    }
  }
`;
