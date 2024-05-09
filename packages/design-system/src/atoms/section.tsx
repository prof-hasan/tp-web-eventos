import React from 'react';
import { cn } from '../utils';

type SectionProps = React.ComponentProps<'section'> & {
  caption: string;
  className?: string;
  children?: React.ReactNode;
  title: string;
  variant?: 'primary' | 'secondary';
};

const baseSectionStyle = ({ variant }: SectionProps) => {
  return cn({
    'bg-[--background-color-1]': variant === 'primary',
    'bg-[--background-color-2]': variant === 'secondary',
  });
};

export const Section: React.FC<SectionProps> = ({ caption, className = '', children, title, variant, ...props }) => {
  const sectionProps: SectionProps = { caption: '', className, children, title: '', variant };
  return (
    <section
      className={cn(baseSectionStyle(sectionProps), className)}
      {...props}
    >
      <div>
        <p className={cn('text-center font-[Roboto] text-[16px] uppercase text-[--primary-color]')}>{caption}</p>
        <h2 className={cn('text-center font-[Roboto] text-[32px] text-[--secundary-color]')}>{title}</h2>
        {children}
      </div>
    </section>
  );
};
