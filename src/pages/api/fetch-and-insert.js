import axios from 'axios'; // For making HTTP requests
import client from "../../sanity/lib/sanityClient"; // Import Sanity client

export default async function handler(req, res) {
  try {
    // Check if data already exists in Sanity
    const existingProducts = await client.fetch(`*[_type == "product"]`);
    if (existingProducts.length > 0) {
      console.log("Data already exists in Sanity. Skipping API fetch...");
      return res.status(200).json({ message: "Data already exists in Sanity. No new data fetched." });
    }

    // Fetch data from the API
    console.log("Fetching data from API...");
    const { data } = await axios.get('https://template-0-beta.vercel.app/api/product');
    console.log("Fetched data:", data);

    // Insert each product into Sanity
    for (const product of data) {
      console.log("Inserting product:", product.name);
      await client.create({
        _type: 'product',
        _id:product._id,
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      });
    }

    res.status(200).json({ message: "Data fetched and inserted successfully!" });
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ error: "Failed to fetch or insert data" });
  }
}
