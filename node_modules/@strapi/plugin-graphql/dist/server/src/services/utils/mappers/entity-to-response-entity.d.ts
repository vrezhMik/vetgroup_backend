import type { Data } from '@strapi/types';
declare const _default: () => {
    entityToResponseEntity: (entity: {
        [key: string]: unknown;
        [key: number]: unknown;
        [key: symbol]: unknown;
        id: Data.ID;
    }) => {
        id: Data.ID;
        attributes: {
            [key: string]: unknown;
            [key: number]: unknown;
            [key: symbol]: unknown;
            id: Data.ID;
        };
    };
    entitiesToResponseEntities: import("lodash/fp").LodashMap1x1<{
        [key: string]: unknown;
        [key: number]: unknown;
        [key: symbol]: unknown;
        id: Data.ID;
    }, {
        id: Data.ID;
        attributes: {
            [key: string]: unknown;
            [key: number]: unknown;
            [key: symbol]: unknown;
            id: Data.ID;
        };
    }>;
};
export default _default;
//# sourceMappingURL=entity-to-response-entity.d.ts.map