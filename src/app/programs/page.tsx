import { weeklyPrograms, programCategories, displayDays } from '@/config/programs'

function getProgramsForDay(day: string) {
  return weeklyPrograms.filter(program => program.day === day)
}

function ProgramIcon({ icon }: { icon: string }) {
  return (
    <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center">
      {icon === 'book' && (
        <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )}
      {icon === 'users' && (
        <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
      {icon === 'clock' && (
        <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      {icon === 'microphone' && (
        <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )}
    </div>
  )
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-darkGreen">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-900 to-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Weekly Programs
          </h1>
        </div>
      </div>

      {/* Weekly Calendar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {displayDays.map(day => {
            const programs = getProgramsForDay(day)
            return (
              <div key={day} className="border border-emerald-100 dark:border-emerald-900/30 rounded-lg">
                <div className="px-4 py-3 border-b border-emerald-100 dark:border-emerald-900/30">
                  <h3 className="font-medium text-emerald-900 dark:text-emerald-100">
                    {day}
                  </h3>
                </div>
                <div className="p-4 min-h-[120px]">
                  {programs.length === 0 ? (
                    <p className="text-sm text-gray-500 dark:text-gray-400">No scheduled events</p>
                  ) : (
                    <div className="space-y-4">
                      {programs.map((program, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <ProgramIcon icon={program.icon} />
                          <div>
                            <h4 className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                              {program.title}
                            </h4>
                            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                              {program.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Program Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-semibold text-emerald-900 dark:text-white mb-6">
          Program Details
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {weeklyPrograms.map((program, index) => (
            <div 
              key={index}
              className="border border-emerald-100 dark:border-emerald-900/30 rounded-lg p-5"
            >
              <div className="flex items-start space-x-4">
                <ProgramIcon icon={program.icon} />
                <div>
                  <h3 className="text-lg font-medium text-emerald-900 dark:text-white mb-1">
                    {program.title}
                  </h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-3">
                    {program.day}s {program.time}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border border-emerald-100 dark:border-emerald-900/30 rounded-lg p-6">
          <div className="flex items-center justify-center space-x-2 text-sm text-emerald-700 dark:text-emerald-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>All programs are open to everyone. For questions, please contact the masjid administration.</span>
          </div>
        </div>
      </div>
    </div>
  )
} 