import React from 'react'
import { clothingProduct } from '@/constants/home'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Container from '@/components/Container'
import Link from 'next/link'

const ProductsSection = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {clothingProduct &&
            clothingProduct.map((card, idx) => (
              <Link href={`/products/${card.id}`} key={idx} className="overflow-visible h-[200px]">
                <Card className="pb-5 rounded-lg bg-white  mt-5 w-full lg:w-[180px] h-[170px] shadow-xl relative">
                  <div className="h-full w-full relative">
                    <Image src={card.img} width={150} height={110} className="h-full w-full object-fill" alt="rollinscodes.com" />
                    <div className="flex items-center justify-center absolute -bottom-10 w-full">
                      <div className=" w-4/5 bg-white rounded-xl text-gray-600 font-bold shadow-xl flex flex-col items-center py-2">
                        <p className="truncate">{card.name}</p>
                        <p className="">{card.price}</p>
                      </div>
                    </div>
                  </div>
                  <button className="absolute top-0 right-0 text-xs bg-black text-white rounded-l-xl px-3 py-1">Buy Now</button>
                </Card>
              </Link>
            ))}
        </div>
      </Container>
    </section>
  );
}

export default ProductsSection