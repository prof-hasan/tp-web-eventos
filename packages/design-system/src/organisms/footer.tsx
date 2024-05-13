'use client';
import { type ComponentProps } from 'react';
import { FooterBottom } from '../atoms';
import { FooterTop, FooterColumns } from '../molecules';
import { cn } from '../utils';

type FooterProps = ComponentProps<'input'> & {
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn('mt-4 flex flex-col gap-4 bg-[#2D2327] p-2 text-white')}>
      <FooterTop />
      <hr />
      <FooterColumns />
      <hr />
      <FooterBottom />
    </div>
  );
};
