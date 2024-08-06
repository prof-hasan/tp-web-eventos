'use client';

import { SunIcon } from '@radix-ui/react-icons';
import { cn } from '../../utils';
import { Button, Logo } from '../../atoms';
import { useRouter } from 'next/navigation';
import { UserEntity } from '@repo/events-domain/user-types';

type HeaderProps = {
  user?: UserEntity;
  className?: string;
};

export const HeaderNoButton: React.FC<HeaderProps> = ({ className = '' }) => {
  const router = useRouter();

  const onClickLogo = () => {
    router.push('/');
  };

  const onClickSignUp = () => {
    router.push('/auth/signup');
  }

  return (
    <div
      className={cn('border-b-2 border-slate-200 bg-slate-50 py-2')}
      data-testid='header'
      aria-label='Header'
    >
      <Logo
        className='hover:cursor-pointer'
        img={<SunIcon className={cn('h-20 w-20')} />}
        onClick={onClickLogo}
      />
    </div>
  );
};
