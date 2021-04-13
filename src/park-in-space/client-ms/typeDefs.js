export const clientTypeDef = `
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

export const clientQueries = `
      allUsers: [User]!
      userById(userId: String!): User!
  `;

export const clientMutations = `
    createUser(user: UserInput!): User!
    deleteUser(userId: String!): User!
    updateUser(user: UserInput!): User!
    deleteAllUsers: String
`;
