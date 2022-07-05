import { createContext, useState } from "react";

// 定义公用参数，方法
export const useNetworkTypeController = () => {
  let [networkType, setNetworkType] = useState("none");
  return {
    networkType,
    setNetworkType,
  };
};

// 定义的参数，方法类型规定
export interface NetworkType {
  networkType: string;
  setNetworkType: (value: string) => void;
}

// 建一个context用来共享参数和方法
export const networkTypeContext = createContext<NetworkType>({
  networkType: "none",
  setNetworkType: (value: string) => {
    return value
  },
});
