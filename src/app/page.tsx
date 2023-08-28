import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import React from "react";
import Brands from "@/views/Brands";
import Wrapper from "@/components/shared/Wrapper";
import { Subscribe } from "@/views/Subscribe";

export default function page() {
  return (
    <Wrapper>
      <div>
        <Hero />

        <ProductList />
        <Subscribe />
      </div>
    </Wrapper>
  );
}
