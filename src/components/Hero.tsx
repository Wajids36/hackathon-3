import Image from "next/image";

    
export default function Hero() {
  return (
   

    <div className="relative w-full bg-gray-50">
      <main className=" flex flex-wrap items-center justify-center bg-[#2A254B] font-white gap-8 p-8 lg:flex-nowrap">
      
        <div className="container px-8 py-8">
          <h2 className="text-2xl font-bold font-white text-white mb-4">
            The furniture brand for the future,<br /> with timeless designs
          </h2>
          <button className="bg-[#4E4D93] text-white border-x-white py-2 pt-4  px-4 rounded hover:bg-gray-500 transition">
            View collection
          </button>
          <p className="text-white mt-8 pt-16">
            A new era in eco-friendly furniture with Avion, the French luxury <br />
            retail brand with nice fonts, tasteful colors, and a beautiful way <br />
            to display things digitally using modern web technologies.
          </p>
        </div>

        <div className='w-[40px] h-[40px]  md:w-[40%] md:h-[580px] flex justify-center items-center'>
             <img src= "Right Image.png" width={400} height={500}alt="right" />
            
            </div>

      </main>
    </div>
  );
}