import { axiosInstance } from "@/libs/axios";
import { useEffect, useState } from "react";

export const useProducts = () => {
   const [products, setProducts] = useState([]); //menyimpan data response DATA
   const [isLoading, setIsLoading] = useState(false); //menyimpan state Loading

   const fetchProducts = async () => {
      setIsLoading(true);
      try {
         setTimeout(async () => {
            const productResponse = await axiosInstance.get("/products");
            setProducts(productResponse.data);
            setIsLoading(false);
         }, 1500);
      } catch (error) {
         console.log(error);
      }
   };

   // hook
   useEffect(() => {
      fetchProducts();
   }, []);

   return {
      data: products,
      isLoading: isLoading,
   };
};
