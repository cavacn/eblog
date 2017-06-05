import * as koa from 'koa';
import {graphqlKoa} from 'graphql-server-koa';
import * as koaRouter from 'koa-router';
import * as koaBody from 'koa-bodyparser';
import {GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";

const app = new koa();
const router = new koaRouter();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            login: {
                args: {
                    userName: {
                        type: GraphQLString
                    }
                },
                type: GraphQLString,
                resolve(){
                    return 'success';
                }
            }
        }
    })
});

app.use(koaBody());

router.get('/graphql', graphqlKoa({schema}));
router.post('/graphql', graphqlKoa({schema}));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
