import React from "react";

export default function PaperBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper-pattern bg-white text-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        {children}
      </div>
    </div>
  );
}
