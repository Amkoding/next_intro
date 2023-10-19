"use client"

import { useEffect, useState } from "react";

import ProductItem from "../component/ProductList";
import ProductCard from "../component/ProductCard";

import { type Product } from "../future/types";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const product = await fetch("/api/products", {
          method: "get",
        });
        const result = await product.json();
        setProducts(result.data);
      } catch (error) {
        console.error("Feil under henting av produkter:", error);
      }
    };
  
    getProducts();
  }, []);

  return (
    <main className=" ">
      <ProductCard>
        {products.length ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          ))
        ) : (
          <p>Ingen produkter tilgjengelig</p>
        )}
      </ProductCard>
    </main>
  );
}