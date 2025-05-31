import { GraphQLFieldResolver, GraphQLResolveInfo } from 'graphql';
import type { Core } from '@strapi/types';
declare const createPoliciesMiddleware: (resolverConfig: any, { strapi }: {
    strapi: Core.Strapi;
}) => (resolve: GraphQLFieldResolver<any, any>, parent: any, args: any, context: any, info: GraphQLResolveInfo) => Promise<unknown>;
export { createPoliciesMiddleware };
//# sourceMappingURL=policy.d.ts.map