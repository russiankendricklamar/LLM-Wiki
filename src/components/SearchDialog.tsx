import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, FileText, Calculator, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({ open, onOpenChange }) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] sm:pt-[10vh]">
      <div 
        className="fixed inset-0 bg-zinc-950/50 backdrop-blur-sm transition-opacity" 
        onClick={() => onOpenChange(false)}
      />
      <div className="relative z-50 w-full max-w-lg transform overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-zinc-200 dark:ring-zinc-800 transition-all">
        <Command className="flex h-full w-full flex-col overflow-hidden bg-transparent">
          <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 text-zinc-500 dark:text-zinc-400" />
            <Command.Input 
              autoFocus
              placeholder="Search documentation..." 
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500 dark:text-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
              No results found.
            </Command.Empty>
            
            <Command.Group heading="Documentation" className="px-2 py-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-zinc-700 dark:text-zinc-300">
                <FileText className="mr-2 h-4 w-4" />
                <span>Introduction</span>
              </Command.Item>
              <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-zinc-700 dark:text-zinc-300">
                <Calculator className="mr-2 h-4 w-4" />
                <span>Black-Scholes Model</span>
              </Command.Item>
              <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none aria-selected:bg-zinc-100 dark:aria-selected:bg-zinc-800 aria-selected:text-zinc-900 dark:aria-selected:text-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-zinc-700 dark:text-zinc-300">
                <Code className="mr-2 h-4 w-4" />
                <span>Python Implementation</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
};
