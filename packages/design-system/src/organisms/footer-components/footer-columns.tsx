import { type ComponentProps } from 'react';
import { TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { Column } from '../../atoms';
import { cn } from '../../utils';
import Link from 'next/link'; // Importando o componente Link

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
        items={[
          <Link href="/info/about" passHref>
            Quem somos? / Nosso trabalho 
          </Link>,
          <Link href="/info/policies" passHref>
            Política de Implementação 
          </Link>,
          <Link href="/info/design" passHref>
            Design
          </Link>,
          <Link href="/info/terms" passHref>
            Termos de Uso
          </Link> 
        ]}
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
