import AboutUs from "./_components/AboutUs";
import Hero from "./_components/Hero";
import News from "./_components/News";
import Products from "./_components/Products";
import Services from "./_components/Services";

export const metadata = {
  title: 'Jaeda & Associates',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
  <>
  <Hero/>
  <AboutUs/>
  <Services/>
  <Products/>
  <News/>
  </>
  )
}
