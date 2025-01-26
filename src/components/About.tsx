import { aboutContent } from '@/config/content'

export function About() {
  return (
    <div className="h-full p-8 bg-white dark:bg-slate-900">
      <h2 className="text-3xl tracking-tight text-darkGreen dark:text-white mb-8">
        {aboutContent.title}
      </h2>
      <div className="prose dark:prose-invert max-w-none">
        {aboutContent.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gray-600 dark:text-gray-300">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
} 