import { SizeSelector, Subtitle, Text, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string
  }
};

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find(p => p.slug === slug);

  if (product === undefined) {
    notFound();
  }

  return (
    <div className="grid grid-col-1 md:grid-cols-3 gap-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        Hi
      </div>

      {/* Detalles */}
      <div className="col-span-1 p-5 space-y-4">
        <Title>{product.title}</Title>
        <Text>${product.price}</Text>

        {/* Size selector */}
        <SizeSelector availableSizes={product.sizes} selectedSize={product.sizes[0]} />

        {/* Quantity Selector */}

        {/* Button */}
        <button className="btn-primary">
          Add to cart
        </button>

        {/* Description */}
        <Subtitle>
          Description
        </Subtitle>

        <Text className="font-light">
          {product.description}
        </Text>
      </div>
    </div>
  );
};