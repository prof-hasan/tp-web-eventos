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
    <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-4', className)}>
      <Column
        className='text-center'
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
        className='text-center'
        header='ajuda'
        icons={[]}
        items={['SAC']}
      />
      <Column
        className='text-center'
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
