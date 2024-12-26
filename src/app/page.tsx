import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Ceramics from "@/components/Ceramics";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Outlets from "@/components/Outlets";
import Footer from "@/components/Footer";
import ProductListing from "@/Productlisting/page";


   
   
   
   
export default function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Brands />
    <Ceramics /> 
    <Products />
    <Benefits />  
    <Outlets /> 
    <Footer />
    <ProductListing />
  
    </>
  );
}
  

