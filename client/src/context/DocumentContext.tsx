"use client";

import { createContext, useContext, ReactNode } from "react";

interface ExcelDataInterface {
  data: any;
}

const DataContext = createContext<ExcelDataInterface | null>(null);

export const DataProvider = ({
  data,
  children,
}: {
  data: any;
  children: ReactNode;
}) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};
