'use client';

import { MagnifyingGlassIcon, SunIcon } from '@radix-ui/react-icons';
import { cn } from '../../utils';
import { Button, Select, SelectContent, SelectItem, SelectTrigger, Logo } from '../../atoms';
import { InputIcon } from '../../molecules';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { UserEntity } from '@repo/events-domain/user-types';
import { EventsCategoryEntity } from '../../../../domain-events/src/category';

type HeaderProps = {
  user?: UserEntity;
  categories?: EventsCategoryEntity[];
  className?: string;
};

export const HeaderHome: React.FC<HeaderProps> = ({ className = '', categories, user }) => {
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
  };

  const onClickSignIn = () => {
    router.push('/auth/signin');
  };

  const onClickLogout = () => {
    router.push('/api/auth/signout');
  };

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
      <div className={cn('relative flex w-full items-center justify-center gap-4', className)}>
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
            {categories?.map((category) => (
              <SelectItem
                key={category.id}
                value={category.id}
              >
                {category.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <InputIcon
          className={cn('w-80')}
          icon={<MagnifyingGlassIcon />}
        />
        {user && (
          <Button
            className='absolute right-2'
            onClick={onClickLogout}
          >
            {' '}
            Logout{' '}
          </Button>
        )}
      </div>
    </div>
  );
};