import type { Context } from '../../types';
declare const _default: (context: Context) => {
    entityToResponseEntity: (entity: {
        [key: string]: unknown;
        [key: number]: unknown;
        [key: symbol]: unknown;
        id: import("@strapi/types/dist/data").ID;
    }) => {
        id: import("@strapi/types/dist/data").ID;
        attributes: {
            [key: string]: unknown;
            [key: number]: unknown;
            [key: symbol]: unknown;
            id: import("@strapi/types/dist/data").ID;
        };
    };
    entitiesToResponseEntities: import("lodash/fp").LodashMap1x1<{
        [key: string]: unknown;
        [key: number]: unknown;
        [key: symbol]: unknown;
        id: import("@strapi/types/dist/data").ID;
    }, {
        id: import("@strapi/types/dist/data").ID;
        attributes: {
            [key: string]: unknown;
            [key: number]: unknown;
            [key: symbol]: unknown;
            id: import("@strapi/types/dist/data").ID;
        };
    }>;
    graphqlScalarToOperators(graphqlScalar: string): boolean;
    graphQLFiltersToStrapiQuery(filters: any, contentType: import("@strapi/types/dist/struct").Schema): any;
    strapiScalarToGraphQLScalar(strapiScalar: string): any;
};
export default _default;
//# sourceMappingURL=index.d.ts.map