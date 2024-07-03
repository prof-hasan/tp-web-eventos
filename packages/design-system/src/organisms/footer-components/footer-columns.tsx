import { type ComponentProps } from 'react';
import { TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { Column } from '../../atoms';
import { cn } from '../../utils';

type FooterColumnsProps = ComponentProps<'input'> & {
  className?: string;
};

export const FooterColumns: React.FC<FooterColumnsProps> = ({ className = '' }) => {
  return (
    <div className={cn('grid grid-cols-4 place-content-between', className)}>
      <Column
        className=''
        header='informações'
        icons={[]}
        items={['Quem somos? / Nosso trabalho', 'Política de Implementação', 'Design', 'Termos de Uso']}
      />
      <Column
        className=''
        header='produtores'
        icons={[]}
        items={['criar evento']}
      />
      <Column
        className=''
        header='ajuda'
        icons={[]}
        items={['SAC']}
      />
      <Column
        className='flex-row'
        header='siga nas redes sociais'
        icons={
          [
            <TwitterLogoIcon />, 
            <InstagramLogoIcon />, 
            <LinkedInLogoIcon />,
            <GitHubLogoIcon />
          ]
        }
        items={['']}
      />
    </div>
  );
};
