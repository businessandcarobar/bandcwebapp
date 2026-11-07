'use client';

import { useState } from 'react';
import { categories } from '@/data/dummyArticles';

export default function CategoryFilter() {
  const [selected, setSelected] = useState<string>('All');

  return (
    <div
      role="group"
      aria-label="Filter stories by category"
      className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {categories.map((category) => {
        const isActive = category === selected;
        return (
          <button
            key={category}
            type="button"
            onClick={() => setSelected(category)}
            aria-pressed={isActive}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'border-primary bg-primary text-white'
                : 'border-border bg-surface text-text-secondary hover:border-primary hover:text-primary'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
