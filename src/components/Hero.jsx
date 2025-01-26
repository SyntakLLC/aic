import Image from 'next/image'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'


const HEADER = "Welcome to Andover Islamic Center"
const SUB_HEADER = "We are a community of Muslims in Andover, MA, dedicated to providing a welcoming and inclusive environment for all."


export function Hero() {
  return (
    <div className="overflow-hidden bg-[#0A1110] dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            <div className="relative">
              <p className="inline bg-gradient-to-r from-emerald-200 via-green-400 to-emerald-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                {HEADER}
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                {SUB_HEADER}
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/">Get started</Button>
                <Button href="/" variant="secondary">
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              {/* <HeroBackground className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" /> */}
            </div>
            <div className="relative">
              <Image
                className="absolute -top-64 -right-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-40 -right-44"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-300 via-emerald-300/70 to-green-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-300 via-emerald-300/70 to-green-300 opacity-10" />
              <div className="relative rounded-2xl bg-[#0A1110]/80 ring-1 ring-white/10 backdrop-blur pb-2">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-emerald-300/0 via-emerald-300/70 to-emerald-300/0" />
                <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-green-400/0 via-green-400 to-green-400/0" />
                <div className="pl-4 pt-4">
                  <table className="w-full text-slate-200 mb-4">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 text-left border-b border-slate-700">Prayer</th>
                        <th className="py-2 px-4 text-left border-b border-slate-700">Iqama Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b border-slate-700/50">Fajr</td>
                        <td className="py-2 px-4 border-b border-slate-700/50">06:15 AM</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-slate-700/50">Dhuhr</td>
                        <td className="py-2 px-4 border-b border-slate-700/50">01:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-slate-700/50">Asr</td>
                        <td className="py-2 px-4 border-b border-slate-700/50">02:30 PM</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-slate-700/50">Maghrib</td>
                        <td className="py-2 px-4 border-b border-slate-700/50">04:50 PM</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-slate-700/50">Isha</td>
                        <td className="py-2 px-4 border-b border-slate-700/50">07:30 PM</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Jumua</td>
                        <td className="py-2 px-4">01:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
