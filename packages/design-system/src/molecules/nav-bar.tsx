import { type ReactNode } from 'react';
import { cn } from '../utils';
import { Button, Select, SelectContent, SelectItem, SelectTrigger } from '../atoms';
import { InputIcon } from './';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

type NavBarProps = {
  className?: string;
};

export const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
  return (
    <nav className={cn('flex items-center justify-center gap-4 border-b-2 border-slate-200 bg-slate-50 py-2')}>
      <Button
        variant='primary'
        className={cn('w-40')}
      >
        Criar Evento
      </Button>
      <Select>
        <SelectTrigger
          className={cn('w-40')}
          placeholder='Categorias'
        ></SelectTrigger>
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
    </nav>
    // <div className={cn('flex flex-col items-center justify-center gap-2 border')}>
    //   {img}
    //   <h2 className={cn('text-xl font-bold')}>{title}</h2>
    //   <p className={cn('text-sm')}>{description}</p>
    //   <Button>Saiba mais</Button>
    // </div>
  );
};
