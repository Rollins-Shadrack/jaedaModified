"use client";
import React, { useEffect, useState } from "react";
import { servicesContent } from "@/constants/home";
import Image from "next/image";
import Container from "@/components/Container";

const Services = () => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (servicesContent) {
      setActiveTab(Object.keys(servicesContent)[0]);
    }
  }, [servicesContent]);
  return (
    <section id="services" className="py-10">
      <Container>
        <h1 className="font-bold text-gray-500 ">Our Services</h1>
        <h1 className="font-semibold text-lg lg:text-xl my-5">
          {" "}
          Empowering Growth: <span className="text-gray-500">From Imports to Business Brilliance, We've got you covered</span>
        </h1>

        <div className="flex cursor-pointer space-x-5 overflow-x-auto no-scrollbar">
          {Object.keys(servicesContent).map((tab) => (
            <div
              key={tab}
              className={`px-5 py-2 w-fit shadow-xl whitespace-nowrap  rounded-xl ${
                activeTab === tab ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => setActiveTab(tab)}>
              {tab}
            </div>
          ))}
        </div>
        <p className="text-gray-500 my-5">Market Better, Collaborate Smarter and Sell Faster</p>

        {servicesContent[activeTab] && (
          <div className="lg:flex justify-between mt-10 space-x-5">
            <div className="lg:w-7/12 w-full relative">
              <h3 className="text-base font-bold uppercase ">{servicesContent[activeTab].title}</h3>

              <div className="flex justify-between  items-center">
                <div className="w-2/12">
                  <Image src={servicesContent[activeTab].icon} width={48} height={48} className="object-cover" />
                </div>
                <div className="w-10/12">
                  <h1 className="text-lg lg:text-xl font-bold my-4">{servicesContent[activeTab].desc}</h1>
                </div>
              </div>

              <p className="">{servicesContent[activeTab].addInfo}</p>
            </div>
            <div className="lg:w-5/12 w-full">
              <img src={servicesContent[activeTab].img} alt="jaeda" className="w-full object-cover h-100 rounded-xl" />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Services;
