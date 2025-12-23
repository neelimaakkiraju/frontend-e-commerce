import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[50vh] grid place-items-center animate-fade-in">
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin" />
        <p className="text-sm text-gray-600">Loading, please wait…</p>
      </div>
    </div>
  );
}
