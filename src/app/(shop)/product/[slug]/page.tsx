export const revalidate = 604800; // 7 days

import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector, StockLabel, Subtitle, Text, Title } from "@/components";
import { getProductBySlugWithImages } from "@/actions";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { AddToCard } from "./ui/AddToCard";

type PropsMetadata = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: PropsMetadata, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug;

  const { product } = await getProductBySlugWithImages({ slug: slug });

  if (product === null) {
    return {
      title: "Product not found | Teslo Shop"
    };
  }

  return {
    metadataBase: new URL("http://localhost:8080"),
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      // images: product.images.map(image => (`/products/${image}`)),
      description: product.description
    },
  };
}

interface PropsComponent {
  params: {
    slug: string
  }
};

export default async function ProductPage({ params }: PropsComponent) {
  const { slug } = params;
  const { product } = await getProductBySlugWithImages({ slug: slug });

  if (product === null) {
    notFound();
  }

  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-3 px-0 sm:px-10">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile slideshow */}
        <ProductMobileSlideShow title={product.title} images={product.images} className="block md:hidden" />

        {/* Desktop slideshow */}
        <ProductSlideShow title={product.title} images={product.images} className="hidden md:block" />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-4 space-y-4">
        <StockLabel slug={product.slug} />
        <Title>{product.title}</Title>
        <Text>${product.price}</Text>

        <AddToCard product={product} />

        {/* Description */}
        <Subtitle>
          Description
        </Subtitle>

        <Text className="font-light leading-relaxed">
          {product.description}
        </Text>
      </div>
    </div>
  );
};