import { useContext } from "react";
import { ResponsiveContext } from "../providers/ResponsiveProvider";

export const useResponsive = () => {
  return useContext(ResponsiveContext);
};
