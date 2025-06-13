"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    // Force Strapi GraphQL to use introspection and playground
    const extensionService = strapi.plugin('graphql').service('extension');
    extensionService.use(({ nexus }) => {
        return {
            config: {
                apolloServer: {
                    introspection: true,
                    playground: true, // For Apollo Studio (modern alternative to Playground)
                },
            },
        };
    });
};
