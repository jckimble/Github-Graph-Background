import { GraphQLClient, gql } from "graphql-request";

const query = gql`
  {
    viewer {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

export const getContributions = (token: string): Promise<any> =>
  new Promise((resolve, reject) => {
    const client = new GraphQLClient("https://api.github.com/graphql", {
      headers: { Authorization: "Bearer " + token },
    });
    client
      .request(query)
      .then((data) => {
        const cal = data.viewer.contributionsCollection.contributionCalendar;
        resolve(cal);
      })
      .catch(reject);
  });
