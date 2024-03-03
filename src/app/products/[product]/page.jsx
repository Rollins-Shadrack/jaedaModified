"use client";
import React from "react";
import { useParams } from "next/navigation";
import { clothingProduct } from "@/constants/home";
import Image from "next/image";
import Payment from "@/components/Payment";
import { Card } from "@/components/ui/card";
import Container from "@/components/Container";

const SingleProductDetails = () => {
  const { product } = useParams();
  const productId = product;
  const selectedProduct = clothingProduct.find((product) => product.id === productId);

  return (
    <section className="py-20">
      <Container>
        <div className="lg:flex justify-between">
          <div className="lg:w-5/12 w-full  ">
            <Image src={selectedProduct?.img} width={500} height={200} className="object-fit h-[400px] w-full" />
          </div>
          <div className="lg:w-7/12 w-full">
            <div className="border rounded-xl relative py-14 px-5">
              <div className="flex items-center justify-start mb-5">
                <Image src="/images/star.svg" width={20} height={20} />
                <Image src="/images/star.svg" width={20} height={20} />
                <Image src="/images/star.svg" width={20} height={20} />
                <Image src="/images/star.svg" width={20} height={20} />
                <Image src="/images/star.svg" width={20} height={20} />
                <span className="px-1">{selectedProduct?.rating}</span>
              </div>

              <h3 className="lg:text-4xl font-bold text-2xl my-5">{selectedProduct?.name}</h3>
              <h3 className="lg:text-xl font-semibold text-lg lg:mb-10 mb-5">{selectedProduct?.price}</h3>
              <p className="">{selectedProduct?.desc}</p>
              <Payment />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold">Similar Products</h2>
        <div className="flex overflow-x-auto no-scrollbar space-x-4 ">
          {clothingProduct &&
            clothingProduct.map((card, idx) => (
              <a key={idx} href={`/products/${card.id}`} className="relative">
                <Card className="pb-5 rounded-lg bg-white shadow-xl  flex-shrink-0 h-[150px] min-w-[150px]">
                  <div className="h-full w-full relative">
                    <Image src={card.img} width={150} height={110} className="h-full w-full object-fill" />
                  </div>
                </Card>
              </a>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default SingleProductDetails;
