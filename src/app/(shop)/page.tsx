export const revalidate = 60; // 60 seconds

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Subtitle, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string
  }
};

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page: page });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <div className="space-y-2">
      <Title>Shop</Title>
      <Subtitle>Men, Women, Child</Subtitle>

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}