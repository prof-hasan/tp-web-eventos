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
        key='1'
      />
      <Column
        className=''
        header='produtores'
        icons={[]}
        items={['criar evento']}
        key='2'
      />
      <Column
        className=''
        header='ajuda'
        icons={[]}
        items={['SAC']}
        key='3'
      />
      <Column
        className='flex-row'
        header='siga nas redes sociais'
        icons={
          [
            <TwitterLogoIcon key='1'/>, 
            <InstagramLogoIcon key='2'/>, 
            <LinkedInLogoIcon key='3'/>,
            <GitHubLogoIcon key='4'/>
          ]
        }
        items={['']}
        key='4'
      />
    </div>
  );
};
