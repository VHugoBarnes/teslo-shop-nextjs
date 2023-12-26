import { ProductGrid, Subtitle, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <div className="space-y-2">
      <Title>Shop</Title>
      <Subtitle>Men, Women, Child</Subtitle>

      <ProductGrid products={products} />
    </div>
  );
}