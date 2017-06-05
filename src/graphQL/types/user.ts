import {
    GraphQLID, GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType, GraphQLString
} from 'graphql';

export const User = new GraphQLObjectType({
    name: "User",
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID),
            description: 'User ID'
        },
        userName: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'User Name'
        },
        passWord: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'Password'
        },
        lastLogin: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'lastLogin Time',
            resolve(){

            }
        }
    }
})