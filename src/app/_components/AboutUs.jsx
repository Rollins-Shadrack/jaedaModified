import Container from "@/components/Container";
import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-10 bg-gray-100">
      <Container>
        <div className="lg:flex items-center ">
          <div className="lg:w-5/12 w-full text-gray-500">
            <h1 className="font-bold ">About Us</h1>
            <h1 className="font-bold text-3xl lg:text-5xl my-5">Uncover Our Story</h1>
          </div>
          <div className="lg:w-7/12 w-full text-gray-700">
            <p className="tracking-wide text-lg">
              Since its founding in 2019, Jaeda and associates Limited has grown to become one of Kenyas top business, actively engaged in the
              production and distribution of clothing, goods merchandising, Import support, facilities management, land sales, training and
              development and financial advisory services
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
