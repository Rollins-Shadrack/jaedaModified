import Container from '@/components/Container'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const News = () => {
  return (
    <section id="news" className="my-10 py-10 bg-gray-100">
      <Container>
        <h1 className="font-bold ">Latest News</h1>
        <h1 className="font-bold text-xl lg:text-3xl my-5">Stay Informed with Our Latest Updates</h1>
        <p className="">Our experts keeping you up to date with our ever changing industry</p>

        <div className="md:flex justify-between md:space-x-10">
          <div className="lg:w-6/12 relative  my-4  gap-4 mx-auto">
            <div className="flex gap-2">
              <div className="flex flex-col space-y-2">
                <div className="">
                  <Image src="/images/hero2.png" width={500} height={400} className="object-cover h-full w-full rounded-l-xl" alt="jaeda" />
                </div>
                <div className="flex justify-end gap-2">
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div className="bg-black w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <Image
                      src="/images/hero3.png"
                      className="object-cover h-full w-full rounded-b-xl"
                      alt="rollinscodes.com"
                      height={640}
                      width={626}
                    />
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="mx-auto">
                <div className="flex flex-col gap-2">
                  <div className="">
                    <div className="bg-black w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"></div>
                  </div>
                  <div className="">
                    <Image
                      src="/images/hero4.png"
                      width={547}
                      height={573}
                      className="object-cover h-full w-full rounded-r-xl shadow-xl"
                      alt="rollinscodes.com"
                    />
                  </div>
                  <div>
                    <div className="p-4 lg:p-7 shadow-xl rounded-r-xl bg-white w-full leading-5">
                      <strong className="block font-bold text-black-500 text-xl lg:text-3xl">Latest</strong>
                      <span className="">News</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-6/12 w-full mx-auto">
            <Card className="rounded-xl">
              <div className="flex items-center justify-center py-5">
                <div className="h-[150px] w-[150px] shadow-xlrounded-full flex items-center justify-center">
                  <Image src="/images/chaidiamond.png" width={200} height={200} className="h-[130px] w-[130px] rounded-full" alt="rollinscodes.com" />
                </div>
              </div>
              <h1 className="font-bold text-xl lg:text-3xl text-center mb-5">Partnership with Chai Diamond Investment Ltd</h1>
              <p className="px-5 text-center tracking-wide mb-5">
                Jaeda and Associates is proud to announce the partnership with Chai Diamond investment Ltd. We are contracted to dispose land for
                current ongoing projects in MURANGA COUNTY & BOMET COUNTY
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default News