import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

const NotFoundPage = () => <div>Page Not Found</div>;

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
