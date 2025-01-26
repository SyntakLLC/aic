import { Hero } from '@/components/Hero';
import { Carousel } from '@/components/carousel/Carousel';
import { carouselImages } from '@/config/carousel';
import { News } from '@/components/News';
import { About } from '@/components/About';
import { HadithBanner } from '@/components/HadithBanner';

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Hero />
      <div className="grid md:grid-cols-2 py-3 sm:py-4 md:py-8 lg:py-12 max-w-7xl mx-auto">
        <News />
        <div className='overflow-hidden'>
          <Carousel images={carouselImages} className='rounded-xl overflow-hidden !h-[200px]' />
          <About />
        </div>
      </div>
      <HadithBanner />
    </div>
  )
}
