'use client'
import Container from "@/components/Container";
import { socialContent } from "@/constants/home";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="pt-20 py-10 ">
      <div className={`bg-cover bg-center h-[600px]  relative bg-[url('/images/globe.jpg')] bg-no-repeat pb-10 `}>
        <Container className="absolute bg-black bg-opacity-30 top-0 left-0 h-[600px]  w-full grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
          <div className="my-auto w-full">
            <h1 className="text-2xl md:text-5xl font-bold">
              <span className="text-orange-500">Get in Touch</span> <br />
              <span className="text-xl md:text-3xl">Elevate Your Shopping Experience</span>
            </h1>
            <p className="my-3 text-white">
              Whether you have questions about our latest merchandise, need assistance with an order, or simply want to share your feedback, we're
              here for you. Reach out and let us ensure your shopping journey with us is nothing short of exceptional.
            </p>
            <div className="grid grid-cols-7 gap-4 my-5">
              {socialContent &&
                socialContent.map((social, idx) => (
                  <a key={idx} href={social.link} target="blank">
                    <Image src={social.img} width={30} height={30} />
                  </a>
                ))}
            </div>
          </div>

          <Image
            src="/images/hero2.png"
            width={600}
            height={600}
            alt="rollinscodes.com"
            className="w-full object-cover md:h-[500px] h-[300px] my-auto rounded-lg "
          />
        </Container>
      </div>
    </div>
  );
};

export default Hero;
