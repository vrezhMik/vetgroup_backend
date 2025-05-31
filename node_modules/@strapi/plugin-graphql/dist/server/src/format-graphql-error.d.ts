import { type GraphQLFormattedError } from 'graphql';
/**
 * The handler for Apollo Server v4's formatError config option
 *
 * Intercepts specific Strapi error types to send custom error response codes in the GraphQL response
 */
export declare function formatGraphqlError(formattedError: GraphQLFormattedError, error: unknown): GraphQLFormattedError;
//# sourceMappingURL=format-graphql-error.d.ts.map