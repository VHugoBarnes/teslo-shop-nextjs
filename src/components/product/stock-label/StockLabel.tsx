"use client";

import { getStockBySlug } from "@/actions";
import { Subtitle } from "@/components";
import React from "react";

interface Props {
  slug: string
};

export function StockLabel({ slug }: Props) {
  const [stock, setStock] = React.useState(-1);

  React.useEffect(() => {
    async function fetchData() {
      const { stock } = await getStockBySlug(slug);

      setStock(stock === null ? 0 : stock);
    };

    fetchData();
  }, [slug]);

  return (
    <>
      <Subtitle className="flex items-center space-x-1">
        <span>Stock:</span>
        {
          stock === -1
            ? (
              <div className="w-8 h-8 bg-gray-200 animate-pulse"></div>
            )
            : (
              <span>{stock}</span>
            )
        }
      </Subtitle>
    </>
  );
};