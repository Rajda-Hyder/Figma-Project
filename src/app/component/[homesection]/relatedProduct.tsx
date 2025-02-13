import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface Product {
  _id:string;
  id: string;
  name: string;
  imagePath: string;
  price: number;
  category: string;
}


export default function RelatedProducts({ currentCategory, currentProductId }: { currentCategory: string; currentProductId: string }) {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        //  Fetch products that match the category and exclude the current product
        const fetchedProducts = await client.fetch<Product[]>(
          `*[_type == "product" && category == $category && _id != $id]{
            _id,
            id,
            name,
            imagePath,
            price,
            category
          }`,
          { category: currentCategory, id: currentProductId }
        );

        setRelatedProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    fetchRelatedProducts();
  }, [currentCategory, currentProductId]);

  if (relatedProducts.length === 0) {
    return null; // No related products, so don't display the section
  }

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold my-10 font-poppins text-center justify-center">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <Link href={`/Shop/${product.id}`}>
              <Image src={product.imagePath} 
              alt={product.name} 
              width={200} 
              height={200} 
              className="object-contain w-full h-40" />
              <h3 className="mt-2 text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">Rs. {product.price}</p>
              <p className="text-gray-600">{product.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
