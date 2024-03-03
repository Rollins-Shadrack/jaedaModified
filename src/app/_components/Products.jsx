"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { clothingProduct } from "@/constants/home";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from '@/components/ui/card';
import Link from "next/link";
import Payment from "@/components/Payment";
import Container from "@/components/Container";

const Products = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef(null);

useEffect(() => {
  setIsEnd(sliderRef.current?.swiper.isEnd);
  setIsBeginning(sliderRef.current?.swiper.isBeginning);
}, [slideIndex]);

 const prevHandler = useCallback(() => {
   if (!sliderRef.current) return;
   sliderRef.current.swiper.slidePrev();
 }, [sliderRef]);

 const nextHandler = useCallback(() => {
   if (!sliderRef.current) return;
   sliderRef.current.swiper.slideNext();
 }, [sliderRef]);
  return (
    <section id="products" className="my-10">
      <Container className="overflow-x-hidden">
        <div className="lg:flex justify-between items-center mb-10">
          <div className="lg:w-6/12 mb-5 lg:mb-0">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-5">Products</h1>
            <p className="">
              Diverse offerings, from fashionable threads to vast landscapes and sturdy containers. Your one-stop shop for endless possibilities
            </p>
          </div>
          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3">
              <div
                onClick={prevHandler}
                className={`${
                  isBeginning === true ? "opacity-30 bg-[#E1E7EA] cursor-auto" : "opacity-100 hover:bg-primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}>
                <ChevronLeft
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isBeginning === true ? "group-hover:!text-primary" : "group-hover:text-white"
                  }`}
                />
              </div>
              <div
                onClick={nextHandler}
                className={`${
                  isEnd === true ? "opacity-30 bg-[#E1E7EA] cursor-auto" : "opacity-100 hover:bg-primary"
                } group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}>
                <ChevronRight
                  className={`text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${
                    isEnd === true ? "group-hover:!text-primary" : "group-hover:text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-bold">Clothes</h3>
        <Swiper
          breakpoints={{
            640: { width: 640, slidesPerView: 2 },
            768: { width: 768, slidesPerView: 2 },
            968: { width: 968, slidesPerView: 4 },
          }}
          ref={sliderRef}
          speed={700}
          spaceBetween={10}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          className="z-50 py-32 mb-10 relative flex items-stretch !overflow-visible before:count-[''] before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light ">
          {clothingProduct &&
            clothingProduct.map((card, idx) => (
              <SwiperSlide key={idx} className="overflow-visible h-[200px]">
                <Card className="pb-5 rounded-lg bg-white  mt-5 w-full lg:w-[220px] h-[170px] shadow-xl relative">
                  <a href={`/products/${card.id}`}>
                    <div className="h-full w-full relative">
                      <Image src={card.img} width={150} height={110} className="h-full w-full object-fill" alt="rollinscodes.com" />
                      <div className="flex items-center justify-center absolute -bottom-10 w-full">
                        <div className=" w-4/5 bg-white rounded-xl text-gray-600 font-bold shadow-xl flex flex-col items-center py-2">
                          <p className=" ">{card.name}</p>
                          <p className="">{card.price}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  {/* <button className="absolute top-0 right-0 text-xs bg-black text-white rounded-l-xl px-3 py-1">Buy Now</button> */}
                  <Payment />
                </Card>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className=" flex justify-end">
          <Link href={"/products"} className="px-5 py-2 bg-black text-white rounded-xl">
            View All
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Products;
