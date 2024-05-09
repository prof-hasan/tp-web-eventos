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
    <div className={cn('flex flex-col gap-4 bg-[#2D2327] text-white p-2 mt-4')} >
        <FooterTop />
        <hr />
        <FooterColumns />
        <hr />
        <FooterBottom />
    </div>
  );
};
