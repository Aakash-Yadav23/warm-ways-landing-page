import React from 'react';

const Slider = () => {
  const leftScrollTexts = [
    'Personalized Engagement',
    'Customer Retention',
    'Seamless Integrations',
    'Real-Time Reports',
    'Personalized Engagement',
    'Customer Retention',
    'Seamless Integrations',
    'Real-Time Reports',
  ];

  const rightScrollTexts = [
    'Personalized Engagement',
    'Cost-Effective',
    'Smart Spending',
    'Data-Driven Decisions',
    'Increased Efficiency',
    'Cost-Effective',
    'Smart Spending',
    'Data-Driven Decisions',
  ];
  return (
    <div>
      <div className="my-12 w-full mx-auto max-w-7xl sm:mt-16 md:mt-20 space-y-4 sm:space-y-6">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Top row scrolls left */}
          <div className="logo-marquee">
            <div className="logo-marquee-track left">
              <div className="logo-marquee-group">
                {leftScrollTexts.map((text, index) => (
                  <div
                    key={`top-a-${index}`}
                    className="px-3 sm:px-4 bg-gray-100 py-2 sm:py-3 rounded-full"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700 whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="logo-marquee-group" aria-hidden>
                {leftScrollTexts.map((text, index) => (
                  <div
                    key={`top-b-${index}`}
                    className="px-3 sm:px-4 bg-gray-100 py-2 sm:py-3 rounded-full"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700 whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row scrolls right */}
          <div className="logo-marquee">
            <div className="logo-marquee-track right">
              <div className="logo-marquee-group">
                {rightScrollTexts.map((text, index) => (
                  <div
                    key={`bottom-a-${index}`}
                    className="px-3 sm:px-4 bg-gray-100 py-2 sm:py-3 rounded-full"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700 whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="logo-marquee-group" aria-hidden>
                {rightScrollTexts.map((text, index) => (
                  <div
                    key={`bottom-b-${index}`}
                    className="px-3 sm:px-4 bg-gray-100 py-2 sm:py-3 rounded-full"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-medium text-gray-700 whitespace-nowrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
