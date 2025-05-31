import type { Struct } from '@strapi/types';
import type { Context } from '../../types';
declare const _default: ({ strapi }: Context) => {
    /**
     * Transform one or many GraphQL filters object into a valid Strapi query
     * @param {object | object[]} filters
     * @param {object} contentType
     * @return {object | object[]}
     */
    graphQLFiltersToStrapiQuery(filters: any, contentType: Struct.Schema): any;
};
export default _default;
//# sourceMappingURL=graphql-filters-to-strapi-query.d.ts.map