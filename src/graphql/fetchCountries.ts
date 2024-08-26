import { gql, GraphQLClient } from "graphql-request";
import { env } from "app/config/env";

const endpoint = env.ENDPOINT;
const client = new GraphQLClient(endpoint);

export const fetchCountries = async () => {
  const query = gql`
    query {
      countries {
        name
        code
        capital
        emoji
        continent {
          name
        }
        languages {
          name
        }
        currencies
      }
    }
  `;
  const data: any = await client.request(query);
  return data?.countries;
};
