'use client';
import { type ComponentProps } from 'react';
import { cn } from '../utils';
import { FooterBottom, FooterColumns, FooterTop } from './footer-components';

type FooterProps = ComponentProps<'input'> & {
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div
      aria-label='Footer'
      className={cn('flex flex-col gap-4 bg-[#2D2327] p-2 text-white', className)}
    >
      <FooterTop />
      <hr />
      <FooterColumns />
      <hr />
      <FooterBottom />
    </div>
  );
};
