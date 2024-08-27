'use client';

import { AvatarIcon, MagnifyingGlassIcon, SunIcon } from '@radix-ui/react-icons';
import { cn } from '../../utils';
import { Button, Select, SelectContent, SelectItem, SelectTrigger, Logo } from '../../atoms';
import { InputIcon } from '../../molecules';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { UserEntity } from '@repo/events-domain/user-types';
import { revalidatePath } from 'next/cache';

type HeaderProps = {
  user?: UserEntity | null;
  className?: string;
};

export const HeaderHome: React.FC<HeaderProps> = ({ className = '', user }) => {
  const [category, setCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const pathname = usePathname();

  // console.log('HeaderHome', { category, search, pathname });

  const onCategoryValueChange = (value: string) => {
    setCategory(value);
    router.push(`/events/category/${value}`);
  };

  const onSearchEventName = () => {
    if (!search) return;
    setSearch('');
    router.push(`/events/search?name=${search}`);
  };

  const onClickLogo = () => {
    router.push('/');
  };

  const onClickAvatar = () => {
    if (!user) {
      router.push('/auth/signin');
      return;
    }
    router.push(`/user/profile/${encodeURIComponent(user?.id)}`);
  };

  useEffect(() => {
    const path = pathname.includes('category') ? pathname.split('/')[3] : undefined;
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
      <div className={cn('flex w-full items-center justify-center py-2')}>
        <AvatarIcon
          className='h-10 w-10 hover:cursor-pointer'
          onClick={onClickAvatar}
        />
      </div>
      <div className={cn('flex w-full flex-wrap items-center justify-center gap-4 p-1', className)}>
        <Select
          value={category}
          onValueChange={(value) => onCategoryValueChange(value)}
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
          value={search}
          icon={<MagnifyingGlassIcon />}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => {
            onSearchEventName();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearchEventName();
            }
          }}
        />
      </div>
    </div>
  );
};
