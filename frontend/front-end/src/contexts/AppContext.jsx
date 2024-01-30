import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { loadStripe } from "@stripe/stripe-js";

const STRIPE_PUB_KEY = import.meta.env.VITE_STRIPE_PUB_KEY || ""


const AppContext = React.createContext(undefined);

const AppContextProvider = ({ children }) => {

  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  const stripePromise = loadStripe(STRIPE_PUB_KEY)

  return (
    <AppContext.Provider
      value={{
     
        isLoggedIn: !isError,
        stripePromise,
      }}
    >
    
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export { AppContextProvider, useAppContext };
