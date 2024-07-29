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
      data-testid='footer'
      className={cn('flex flex-col gap-4 bg-[#2D2327] py-2 px-4 text-white', className)}
    >
      <FooterTop />
      <hr />
      <FooterColumns />
      <hr />
      <FooterBottom />
    </div>
  );
};
