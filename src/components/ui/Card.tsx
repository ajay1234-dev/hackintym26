import React from 'react';
import { cn } from './Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gradient?: boolean;
}

export function Card({ className, children, gradient = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6 overflow-hidden relative",
        gradient && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-hack-neonCyan/10 before:to-hack-neonPurple/10 before:z-0",
        className
      )}
      {...props}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
