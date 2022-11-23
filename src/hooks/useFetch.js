import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

export const useFetch = (query, params) => {
   const [state, setState] = useState({
      data: null,
      isLoading: true,
      hasError: null,
   });

   const [data, setData] = useState(null);
   const [isLoading, setLoading] = useState(true);
   const [hasError, setHasError] = useState(null);

   const getFetch = async () => {
      setState({
         ...state,
         isLoading: true,
      });

      const data = await client.fetch(query, params);

      setState({
         data,
         isLoading: false,
         hasError: null,
      });
   };

   useEffect(() => {
      getFetch();
   }, [query, params]);

   return {
      data: state.data || {},
      isLoading: state.isLoading,
      hasError: state.hasError,
   };
};
