import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../hooks/";

import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
   //get path
   const path = useLocation().pathname;
   //color conditional
   const isDark = useMemo(() => path !== "/" && path !== "/about", [path]);

   //-----------------

   //fetch projects API
   const PROJECT_ID = "mx1yrmh1";
   const DATASET = "production";

   let QUERY = encodeURIComponent('*[_type == "product"]');

   // Compose the URL for your project's endpoint and add the query
   let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

   const { data, isLoading } = useFetch(PROJECT_URL);

   console.log(data);
   const contextValue = {
      isDark,
      data,
      isLoading,
   };

   return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
