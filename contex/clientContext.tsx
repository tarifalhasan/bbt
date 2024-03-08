"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

interface ClientContextProps {
  headerTab: string;
  setHeader: React.Dispatch<React.SetStateAction<string>>;
}

const ClientContext = createContext<ClientContextProps | undefined>(undefined);

interface ClientProviderProps {
  children: ReactNode;
}

export const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  const [headerTab, setHeader] = useState("nft");

  const value = {
    headerTab,
    setHeader,
  };

  return (
    <ClientContext.Provider value={value}>{children}</ClientContext.Provider>
  );
};

export const useClient = (): ClientContextProps => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient must be used within a ClientProvider");
  }
  return context;
};
