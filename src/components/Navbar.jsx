'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Container from './Container';
import { usePathname } from 'next/navigation';
import { navbaritems } from '@/constants/navbar';


const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-[999]">
      <nav className={`py-2  ${isSticky ? "sticky top-0 left-0 right-0 border shadow-xl bg-white duration-300 z-[999]" : ""}`}>
        <Container className="flex justify-between items-center text-base ">
          <Link className="" href="/">
            <Image width={120} height={120} src={navbaritems.logo} className=" object-cover" alt="rollinscodes.com" />
          </Link>

          {/* Navbar items for large screens */}
          <ul className="md:flex space-x-12 hidden cursor-pointer">
            {navbaritems.navItems.map(({ link, path }) => (
              <Link
                key={path}
                href={path}
                className={`block text-base text-brandDark hover:text-brandPrimary ${pathname === path && "font-medium text-orange-400"}  whitespace-nowrap`}>
                {link}
              </Link>
            ))}
          </ul>

          {/* menu btns */}
          <div className="md:hidden">
            <DropdownMenu className="">
              <DropdownMenuTrigger asChild>
                <button className="focus:outline-none text-brandDark focus:text-brandSecondDark">
                  <MenuIcon className="h-10 w-10 " />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-4 ">
                <DropdownMenuGroup>
                  {navbaritems.navItems.map(({ link, path }) => (
                    <Link
                      href={path}
                      key={path}
                      className={`block text-base text-brandDark hover:text-brandPrimary  whitespace-nowrap ${pathname === path && "font-medium"}`}>
                      <DropdownMenuItem key={link}>
                        {link}

                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </Link>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
