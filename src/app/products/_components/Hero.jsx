'use client'
import React from 'react'
import Carousel from 'nuka-carousel';
import Image from 'next/image';
import { productBannerImages } from '@/constants/home';
import Container from '@/components/Container';

const Hero = () => {
  const params = {
    wrapAround: true,
    slidesToShow: 1,
    autoplay: true,
    autoplayInterval: 6000, 
    renderCenterLeftControls: ({ previousSlide }) => null, 
    renderCenterRightControls: ({ nextSlide }) => null,
  }
  return (
    <Container className="pt-20 ">
      <Carousel className="w-full mx-auto " {...params}>
        {productBannerImages &&
          productBannerImages.map((image, idx) => (
            <Image key={idx} height={400} width={400} src={image} className="h-[400px] lg:h-[500px] w-full object-fit rounded-xl" alt="rollinscodes.com" />
          ))}
      </Carousel>
    </Container>
  );
}

export default Hero