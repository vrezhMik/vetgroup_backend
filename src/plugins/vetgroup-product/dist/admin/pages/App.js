import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
const NotFoundPage = () => React.createElement("div", null, "Page Not Found");
const App = () => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { index: true, element: React.createElement(HomePage, null) }),
        React.createElement(Route, { path: "*", element: React.createElement(NotFoundPage, null) })));
};
export default App;
