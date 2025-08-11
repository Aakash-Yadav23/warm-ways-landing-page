import React from 'react';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export const Enterprises = () => {
  const logosDir = path.join(process.cwd(), 'public', 'image', 'logos');
  let logoFiles: string[] = [];
  try {
    logoFiles = fs
      .readdirSync(logosDir)
      .filter((file) => /\.(svg|png|jpe?g|webp)$/i.test(file));
  } catch (e) {
    logoFiles = [];
  }

  return (
    <div className="w-full py-8 sm:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="h-px flex-1 border-t border-dashed border-border hidden sm:block" />
          <p className="text-xs sm:text-sm text-foreground/70 whitespace-nowrap text-center sm:text-left">
            Adopted by renowned, trusted, and leading enterprises
          </p>
          <div className="h-px flex-1 border-t border-dashed border-border hidden sm:block" />
        </div>

        <div className="mt-6 sm:mt-8 flex flex-wrap gap-6 sm:gap-8 md:gap-15 items-center justify-center">
          {logoFiles.map((file) => {
            const name = file.replace(/\.[^/.]+$/, '');
            return (
              <Image
                key={file}
                src={`/image/logos/${file}`}
                alt={`${name} logo`}
                width={24}
                height={24}
                className="h-4 sm:h-5 md:h-6 opacity-60 hover:opacity-100 transition-opacity"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
