import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const AboutSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-black text-white px-5 py-2 rounded-xl">About Us</SheetTrigger>
      <SheetContent className="bg-white sm:max-w-lg max-sm:w-full overflow-y-auto no-scrollbar">
        <SheetHeader>
          <SheetTitle>About Us</SheetTitle>
          <SheetDescription>Discover the heart behind our journey - where passion meets purpose</SheetDescription>
        </SheetHeader>
        <div className="my-6">
          <h3 className="font-bold tracking-wide text-xl">Our Mission:</h3>
          <p className="tracking-wide ">
            Through the provision of context-specific technical support, Jaeda & associates Ltd enables development and emergency-oriented
            organizations to accomplish their vision, purpose and objectives
          </p>
        </div>

        <div className="my-6">
          <h3 className="font-bold tracking-wide text-xl">Our Vision:</h3>
          <p className="tracking-wide ">
            Being a pemier global consulting firm that provides state-of-the-art monitoring, assessing and research services focused on specifically
            assisting our clients in obtaining pertinent data that can be applied to program enhancement
          </p>
        </div>

        <div className="my-6">
          <h3 className="font-bold tracking-wide text-xl">Core Values:</h3>
          <p className="tracking-wide ">
            Jaeda & associates Ltd. upholds honesty, professional ethics, inclusivity, responsiveness and responsibility in order to successfully
            carry out our purpose
          </p>
        </div>

        <div className="my-6">
          <h3 className="font-bold tracking-wide text-xl">Registration:</h3>
          <p className="tracking-wide ">
            Our registration number under the Companies Act of Kenya is PVT-KAUZ3MM9. We conduct business both domestically and abroad
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AboutSheet;
