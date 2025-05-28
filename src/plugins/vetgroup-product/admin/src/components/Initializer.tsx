import { useEffect } from "react";
import { PLUGIN_ID } from "../pluginId";

const Initializer = ({ setPlugin }: { setPlugin: (id: string) => void }) => {
  useEffect(() => {
    setPlugin(PLUGIN_ID);
  }, [setPlugin]); // add to deps just in case

  return null;
};

export default Initializer;
