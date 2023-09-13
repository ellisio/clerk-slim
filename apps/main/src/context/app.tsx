"use client";

import { useBoolean, UseBooleanCallbacks } from "@snowtrek/utils";
import { createContext, ReactNode, useContext } from "react";

export const AppContext = createContext({
  sidebarOpen: false,
  setSidebar: {} as UseBooleanCallbacks,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebar] = useBoolean(false);

  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
