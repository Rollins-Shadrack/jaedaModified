'use client'
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { socialContent } from "@/constants/home";
import AboutSheet from "./AboutSheet";
import Container from "@/components/Container";


const Hero = () => {
  return (
    <section id="home" className="pt-20 py-10">
      <Container>
        <div className="lg:flex justify-between items-center ">
          <div className="lg:w-6/12 mb-10 lg:mb-0 lg:px-5">
            <h4 className="text-4xl lg:text-5xl  text-black-700 mb-7 font-bold">Find the Best in Fashion, Home and More</h4>
            <p className="my-2 text-gray-500">Discover endless choices and unleash your shopping desires at your one-stop multi-category paradise</p>
            <div className="flex   items-center space-x-14 my-10">
              <AboutSheet />
            </div>
            <div className="grid grid-cols-7 gap-4 my-5">
              {socialContent &&
                socialContent.map((social, idx) => (
                  <a key={idx} href={social.link} target="blank">
                    <Image src={social.img} width={30} height={30} />
                  </a>
                ))}
            </div>
          </div>
          <div className="lg:w-6/12 space-y-2 ">
            <div className="flex space-x-2 items-stretch">
              <div className=" w-7/12 ">
                <Image src="/images/hero4.png" width={397} height={20} alt="opensaas" className="object-cover w-full h-full rounded-2xl" />
              </div>
              <div className=" w-5/12 self-end space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="">
                    <Image src="/images/hero3.png" width={437} height={437} alt="opensaas" className="object-cover w-full h-full rounded-2xl" />
                  </div>
                  <div className="bg-black rounded-2xl rounded-tr-[200px]"></div>
                </div>
                <Image src="/images/hero2.png" width={374} height={392} alt="opensaas" className="object-cover w-full h-full rounded-2xl" />
              </div>
            </div>
            <div className="flex space-x-2">
              <div className=" w-5/12 self-end space-y-2">
                <Image src="/images/hero5.png" width={374} height={392} alt="opensaas" className="object-cover w-full h-full rounded-2xl" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-black rounded-2xl rounded-bl-[200px]"></div>
                  <div>
                    <Image src="/images/hero.png" alt="opensaas" width={394} height={394} className="object-cover w-full h-full rounded-2xl" />
                  </div>
                </div>
              </div>
              <div className=" w-7/12">
                <Image src="/images/hero1.png" width={446} height={446} alt="opensaas" className="object-cover w-full h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
