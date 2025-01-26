import { hadithContent } from '@/config/content'

export function HadithBanner() {
  return (
    <div className="bg-gradient-to-br from-brand-900 to-brand-800 text-white py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Arabic Text */}
        <p className="text-2xl sm:text-3xl md:text-4xl leading-relaxed font-arabic" dir="rtl">
          {hadithContent.arabic}
        </p>
        
        {/* Arabic Source */}
        <p className="text-sm sm:text-base text-brand-200 font-arabic" dir="rtl">
          {hadithContent.source}
        </p>
        
        {/* English Translation */}
        <div className="pt-6 border-t border-brand-700">
          <p className="text-lg sm:text-xl leading-relaxed text-brand-50 italic">
            {hadithContent.translation}
          </p>
          <p className="text-sm text-brand-200 mt-2">
            {hadithContent.reference}
          </p>
        </div>
      </div>
    </div>
  )
} 