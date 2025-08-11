import React from 'react';
import fs from 'fs';
import path from 'path';

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
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 border-t border-dashed border-border" />
          <p className="text-sm text-foreground/70 whitespace-nowrap">
            Adopted by renowned, trusted, and leading enterprises
          </p>
          <div className="h-px flex-1 border-t border-dashed border-border" />
        </div>

        <div className="mt-8 flex gap-15 items-center justify-center">
          {logoFiles.map((file) => {
            const name = file.replace(/\.[^/.]+$/, '');
            return (
              <img
                key={file}
                src={`/image/logos/${file}`}
                alt={`${name} logo`}
                className="h-6  opacity-60 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
