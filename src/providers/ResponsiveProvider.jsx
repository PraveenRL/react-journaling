import { createContext, useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const ResponsiveContext = createContext(null);

const ResponsiveProvider = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const value = useMemo(() => ({ isMobile }), [isMobile]);
  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;
