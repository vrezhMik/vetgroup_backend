import { PLUGIN_ID } from "./pluginId";
import Initializer from "./components/Initializer";
import { PluginIcon } from "./components/PluginIcon";

const plugin = {
  register(app: any) {
    app.addMenuLink({
      to: `/plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: PLUGIN_ID,
      },
      Component: async () => {
        const component = await import("./pages/App");
        return component.default;
      },
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID,
    });
  },

  async registerTrads({ locales }: { locales: string[] }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await import(
            `./translations/${locale}.json`
          );
          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      }),
    );
  },
};

export default plugin;
