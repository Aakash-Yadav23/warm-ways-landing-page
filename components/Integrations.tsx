'use client';

import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import Image from 'next/image';

export default function Integrations() {
  const integrations = [
    'Slack',
    'HubSpot',
    'Mailchimp',
    'Salesforce',
    'Google Analytics',
    'Zapier',
    'Shopify',
    'WordPress',
    'Facebook Ads',
    'Google Ads',
    'LinkedIn',
    'Twitter',
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto rounded-xl bg-[#d7dfe469] px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2 items-center mx-auto bg-white w-fit p-1 rounded-full">
        <div className="flex gap-2 items-center border rounded-full w-fit p-1">
          <Book size={15} />
          <span className="text-sm">Integrations</span>
        </div>
      </div>
      <div className="mx-auto w-fit flex gap-3 flex-col my-8">
        <p className="text-6xl text-center">Integrates with</p>
        <span className="text-center text-sm">
          Seamlessly integrate with your favorite tools
        </span>
      </div>

      <div className="relative w-full  mx-auto">
        <Image
          src="/image/intergration.png"
          alt="Stats preview"
          width={1000}
          height={900}
          className="w-full h-auto rounded-xl"
          priority
        />
      </div>
    
    </section>
  );
}
