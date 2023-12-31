import Head from "next/head";
import {
   Container,
   Heading,
   Table,
   Tbody,
   Td,
   Thead,
   Tr,
   Spinner,
} from "@chakra-ui/react";

import { useProducts } from "@/features/product/useProducts";

export default function Home() {
   const { data: products, isLoading } = useProducts();

   // menampilkan data hasil dari fetchProducts
   const renderProducts = () => {
      return products.map((product) => {
         return (
            <Tr key={product.id}>
               <Td>{product.id}</Td>
               <Td>{product.name}</Td>
               <Td>{product.price}</Td>
               <Td>{product.description}</Td>
               <Td>{product.image}</Td>
            </Tr>
         );
      });
   };

   return (
      <>
         <Head>
            <title>Next App Data Fetching</title>
            <meta name="description" content="Generated by create next app" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main>
            <Container maxW="1200px" minH="100vh">
               <Heading>Read Data</Heading>
               <Table>
                  <Thead>
                     <Tr>
                        <Td>ID</Td>
                        <Td>Name</Td>
                        <Td>Price</Td>
                        <Td>Description</Td>
                        <Td>Image</Td>
                     </Tr>
                  </Thead>
                  <Tbody>{renderProducts()}</Tbody>
               </Table>
               {isLoading ? (
                  <Spinner
                     pos="absolute"
                     left="48%"
                     top="30%"
                     thickness="5px"
                     speed="0.65s"
                     emptyColor="gray.200"
                     color="blue.700"
                     size="xl"
                  />
               ) : null}
            </Container>
         </main>
      </>
   );
}
