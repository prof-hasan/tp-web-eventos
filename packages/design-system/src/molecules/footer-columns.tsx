import { type ComponentProps } from 'react';
import { Column } from '../atoms';
import { TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { cn } from '../utils';

type FooterColumnsProps = ComponentProps<'input'> & {
  className?: string;
};

export const FooterColumns: React.FC<FooterColumnsProps> = ({ className = '' }) => {
  return (
    <div className={cn('grid grid-cols-4 place-content-between', className)}>
      <Column
        header='informações'
        items={['Quem somos? / Nosso trabalho', 'Política de Implementação', 'Design', 'Termos de Uso']}
        icons={[]}
      />
      <Column
        header='produtores'
        items={['criar evento']}
        icons={[]}
      />
      <Column
        header='ajuda'
        items={['SAC']}
        icons={[]}
      />
      <Column
        className='flex-row'
        header='siga nas redes sociais'
        items={['']}
        icons={[<TwitterLogoIcon />, <InstagramLogoIcon />, <LinkedInLogoIcon />, <GitHubLogoIcon />]}
      />
    </div>
  );
};
