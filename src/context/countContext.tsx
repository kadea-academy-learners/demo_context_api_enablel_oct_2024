import React from "react";

interface ICountContext {
  count: number;
  increment: () => void;
  decrement: () => void;
}
export const CountContext = React.createContext<ICountContext | null>(null);
