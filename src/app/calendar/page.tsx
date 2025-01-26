export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Community Calendar
            </h1>
            <p className="text-brand-100 text-lg sm:text-xl max-w-2xl mx-auto">
              Stay updated with our prayer times, events, and programs. Join us in building a vibrant Muslim community in Andover.
            </p>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Calendar Header */}
          <div className="bg-brand-50 dark:bg-gray-700 px-6 py-4 border-b border-brand-100 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-brand-900 dark:text-white">
                Event Calendar
              </h2>
              <div className="text-sm text-brand-600 dark:text-brand-300">
                All times are in Eastern Time
              </div>
            </div>
          </div>

          {/* Calendar Iframe */}
          <div className="p-4 sm:p-6">
            <iframe 
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=700&amp;wkst=1&amp;bgcolor=%23db694f&amp;src=YW5kb3ZlcmlzbGFtaWNjZW50ZXIub3JnXzBic3M1YzVmZWF0bTVxMnIxcnU5YzM0dmJvQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23fbdbac&amp;ctz=America%2FNew_York" 
              style={{
                border: 0,
                width: '100%',
                height: '650px',
                borderRadius: '0.5rem',
              }}
              frameBorder="0" 
              scrolling="no"
            />
          </div>

          {/* Calendar Footer */}
          <div className="bg-brand-50 dark:bg-gray-700 px-6 py-4 border-t border-brand-100 dark:border-gray-600">
            <p className="text-sm text-brand-600 dark:text-brand-300 text-center">
              For event inquiries or to add an event, please contact the masjid administration
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 