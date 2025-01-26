import { newsContent } from '@/config/content'

export function News() {
  return (
    <div className="h-full p-8 bg-white dark:bg-slate-900">
      <h2 className="text-3xl tracking-tight text-darkGreen dark:text-white mb-8">
        {newsContent.title}
      </h2>
      <div className="space-y-8">
        {newsContent.items.map((item, index) => (
          <div key={index} className="prose dark:prose-invert max-w-none">
            <div className="text-sm text-brand-600 dark:text-brand-400 mb-1">
              {item.date}
            </div>
            <h3 className="text-xl font-semibold text-darkGreen dark:text-white mt-0 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-0">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 