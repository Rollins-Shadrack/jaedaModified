'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerContent } from '@/constants/footer'
import {ChevronRight, MapPin, PhoneCall, Facebook,Twitter, Linkedin} from 'lucide-react'
import Container from './Container'


const Footer = () => {
  return (
    <footer role="contentinfo" className="py-10 bg-white">
      <Container>
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-4 inline-block">
              <Image src={footerContent.about.logo} width={150} height={120} className="" />
            </Link>
            <p className="leading-relaxed mb-7">{footerContent.about.description}</p>
          </div>
          <div className=" w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLinks.map((footerLink, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-heading mb-5">{footerLink.heading}</h3>
                  <ul className="p-0 m-0">
                    {footerLink.links.map((link, idxx) => (
                      <li key={idxx} className="mb-3">
                        <Link href={link.href} className="group-flex items-center duration-300 transition-all ease-in-out hover:text-primary">
                          <span>{link.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <ChevronRight className="text-xl  absolute" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-heading mb-5">{footerContent.contact.heading}</h3>
            <p className="leading-relaxed mb-7">{footerContent.contact.description}</p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <MapPin className="text-xl text-primary" />
                <span>{footerContent.contact.address.street}</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <PhoneCall className="text-xl text-primary" />
                <span>{footerContent.contact.address.phone}</span>
              </li>
              <li className="flex items-start space-x-10 mb-5">
                <a href="https://www.facebook.com/people/Jaeda-Associates/100068246903727" target="blank">
                  <Facebook className="text-2xl" />
                </a>
                <a href="https://twitter.com/JaedaAssociates" target="blank">
                  <Twitter className="text-2xl" />
                </a>
                <a href="https://www.linkedin.com/company/jaeda-associates/about/?viewAsMember=true" target="blank">
                  <Linkedin className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center  border-t border-gray-200">
          <p>
            {footerContent.copyright.labelOne}
            {"  "} {footerContent.copyright.labelTwo}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer