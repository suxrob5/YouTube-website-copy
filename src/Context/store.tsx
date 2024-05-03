"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const GlobalContext = createContext({
  pageItems: "",
  setpageItems: "",
  dataContext: "",
  setdataContext: "",
  inputVal: "",
  setinputVal: "",
});

interface ValueType {
  pageItems: any;
  setpageItems: any;
  setdataContext: any;
  dataContext: any;
  inputVal: string;
  setinputVal: any;
}

export const GlobalContextProvider = ({ children }: any) => {
  const [pageItems, setpageItems] = useState<null | Object>(null);
  const [dataContext, setdataContext] = useState<null | Object>(null);
  const [inputVal, setinputVal] = useState<string>("");

  const value: ValueType = {
    pageItems,
    setpageItems,
    dataContext,
    setdataContext,
    inputVal,
    setinputVal,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
