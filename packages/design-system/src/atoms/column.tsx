import { type ComponentProps } from 'react';
import { cn } from '../utils';

type ColumnProps = ComponentProps<'input'> & {
  className?: string;
};

export const Column: React.FC<ColumnProps> = ({ className = '' }) => {
  return (
    <div className={cn('', className)}>
        <h3 className={cn('font-bold')}>Informações</h3>
        <p>Quem somos? / Nosso trabalho</p>
        <p>Política de Implementação</p>
        <p>Design</p>
        <p>Termos de Uso</p>
    </div>
  );
};
