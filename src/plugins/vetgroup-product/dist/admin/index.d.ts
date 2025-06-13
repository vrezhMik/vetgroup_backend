declare const plugin: {
    register(app: any): void;
    registerTrads({ locales }: {
        locales: string[];
    }): Promise<{
        data: any;
        locale: string;
    }[]>;
};
export default plugin;
