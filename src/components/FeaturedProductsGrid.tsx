import FeaturedProductsGridClient from "@/components/FeaturedProductsGridClient";
import { getFeaturedProducts } from "@/lib/products";

export default async function FeaturedProductsGrid() {
  const products = await getFeaturedProducts();
  return <FeaturedProductsGridClient products={products} />;
}
