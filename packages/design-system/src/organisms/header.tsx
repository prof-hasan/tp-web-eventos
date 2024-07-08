'use client';

import { MagnifyingGlassIcon, SunIcon } from '@radix-ui/react-icons';
import { cn } from '../utils';
import { Button, Select, SelectContent, SelectItem, SelectTrigger, Logo } from '../atoms';
import { InputIcon } from '../molecules';
import { useEffect, useState } from 'react';

type HeaderProps = {
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [category, setCategory] = useState<string>('Categorias');

  const onValueChange = (value: string) => {
    console.log(value);
    setCategory(value);
  };

  return (
    <div
      className={cn('border-b-2 border-slate-200 bg-slate-50 py-2')}
      data-testid='header'
      aria-label='Header'
    >
      <Logo img={<SunIcon className={cn('h-20 w-20')} />} />
      <div className={cn('flex items-center justify-center gap-4', className)}>
        <Button
          className={cn('w-40')}
          variant='primary'
        >
          Criar Evento
        </Button>
        <Select
          onValueChange={(value) => onValueChange(value)}
        >
          <SelectTrigger
            className={cn('w-40')}
            placeholder={category}
          />
          <SelectContent>
            <SelectItem value='musica'>Música</SelectItem>
            <SelectItem value='cinema'>Cinema</SelectItem>
            <SelectItem value='teatro'>Teatro</SelectItem>
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
