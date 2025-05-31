/// <reference types="lodash" />
import type { Core } from '@strapi/types';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => import("lodash").Dictionary<{
    fieldName: string;
    strapiOperator: string;
    add(t: import("nexus/dist/core").ObjectDefinitionBlock<string>, type: string): void;
}>;
export default _default;
//# sourceMappingURL=index.d.ts.map