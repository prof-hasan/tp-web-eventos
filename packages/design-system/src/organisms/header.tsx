'use client';

import { MagnifyingGlassIcon, SunIcon } from '@radix-ui/react-icons';
import { cn } from '../utils';
import { Button, Select, SelectContent, SelectItem, SelectTrigger, Logo } from '../atoms';
import { InputIcon } from '../molecules';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { UserEntity } from '@repo/events-domain/user-types';

type HeaderProps = {
  user?: UserEntity;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = '', user }) => {
  const [category, setCategory] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  const onValueChange = (value: string) => {
    setCategory(value);
    router.push(`/events/${value}`);
  };

  const onClickLogo = () => {
    router.push('/');
  };

  const onClickCreateEvent = () => {
    router.push('/events/create');
  }

  const onClickSignIn = () => {
    router.push('/auth/signin');
  }

  useEffect(() => {
    const path = pathname.split('/')[2];
    if (path) {
      setCategory(path);
    } else {
      setCategory('');
    }
  }, [pathname]);

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
      <div className={cn('flex items-center justify-center gap-4', className)}>
        {user ? (
          <Button
            className={cn('w-40')}
            variant='primary'
            onClick={onClickCreateEvent}
          >
            Criar Evento
          </Button>
        ) : (
          <Button
            className={cn('w-40')}
            variant='primary'
            onClick={onClickSignIn}
          >
            Entrar
          </Button>
        )}
        <Select
          value={category}
          onValueChange={(value) => onValueChange(value)}
        >
          <SelectTrigger
            className={cn('w-40')}
            placeholder={'Categorias'}
          />
          <SelectContent>
            <SelectItem value='music'>Música</SelectItem>
            <SelectItem value='movies'>Cinema</SelectItem>
            <SelectItem value='theater'>Teatro</SelectItem>
          </SelectContent>
        </Select>
        <InputIcon
          className={cn('w-80')}
          icon={<MagnifyingGlassIcon />}
        />
      </div>
    </div>
  );
};
