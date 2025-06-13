import { useEffect } from "react";
import { PLUGIN_ID } from "../pluginId";
const Initializer = ({ setPlugin }) => {
    useEffect(() => {
        setPlugin(PLUGIN_ID);
    }, [setPlugin]); // add to deps just in case
    return null;
};
export default Initializer;
