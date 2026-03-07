import React from 'react';
import { cn } from './Button';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className, ...props }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-32 w-full flex flex-col items-center justify-center relative", className)}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl z-10">
        {children}
      </div>
    </section>
  );
}
