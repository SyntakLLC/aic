import { Hero } from '@/components/Hero';
import { Carousel } from '@/components/carousel/Carousel';
import { carouselImages } from '@/config/carousel';

export default function Home() {
  return (
    <Hero />
  )
  // return (
  //   <div className="relative h-[450px]">
  //     {/* Heading with gradient overlay */}
  //     <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
  //       <div className="w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent p-8">
  //         <h1 className="text-5xl font-bold text-white">Welcome to AIC</h1>
  //       </div>
  //     </div>

  //     {/* Carousel */}
  //     <div className="h-full">
  //       <Carousel images={carouselImages} />
  //     </div>
  //   </div>
  // );
}
