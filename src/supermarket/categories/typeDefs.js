export const categoryTypeDef = `
  type User {
      userId: String!
      name: String!
      email: String!
      age: Int!
      phoneNumber: Int!
  }
  input UserInput {
    userId: String!
    name: String!
    email: String!
    age: Int!
    phoneNumber: Int!
  }`;

export const categoryQueries = `
      allUsers: [User]!
      userById(userId: String!): User!
  `;

export const categoryMutations = `
    createUser(user: UserInput!): User!
`;
