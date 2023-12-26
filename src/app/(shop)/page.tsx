import { ProductGrid, Subtitle, Text, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <div className="space-y-2">
      <Title>Hello World</Title>
      <Subtitle>Subtitle</Subtitle>
      <Text>This is a text</Text>

      <ProductGrid products={products} />
    </div>
  );
}