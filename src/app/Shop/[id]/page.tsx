// // app/shop/[id]/page.tsx (Server Component)

 import { client } from "@/sanity/lib/client";
 import ProductDetailClient from "@/app/component/productdetailclient"; // Import the Client Component

 interface Product {
   _id: string;
   id: string;
   name: string;
   imagePath: string;
   price: number;
   description: string;
   stockLevel: number;
   category: string;
 }
 interface PageProps{
  params: { id: string };
 }

 // Generate Metadata Dynamically
 export async function generateMetadata({ params }: { params: Awaited<PageProps['params']> }) {
  const {id} =  params; // Await params since Next.js expects a Promise

  // Fetch product data for metadata
   const product = await client.fetch<Product>(
     `*[_type == "product" && id == $id][0]`,
     { id }
   );

   return {
     title: product ? `${product.name} - Product Details` : "Product Not Found",
     description: product?.description || "No description available.",
     openGraph: {
     images: product?.imagePath? [product.imagePath] : [],
     },
     };
    }
   

// Main Page Component
export default async function ProductPage({ params }: PageProps) {
  console.log("Params received:", params);

  const { id } = params;
  console.log("Fetching product with id:", id);

  // Fetch product data
  const product = await client.fetch<Product>(
    `*[_type == "product" && id == $id][0]`,
    { id } // Ensure id is a string
  );
  console.log("Fetched product:", product);

   if (!product) {
     return <p>Product not found</p>;
   }

 // Pass product data to the Client Component
 return <ProductDetailClient product={product} />;
 }
