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
    <div className={cn('grid grid-cols-3 place-content-evenly', className)}>
      <Column
        className=''
        header='informações'
        icons={[]}
        items={[
          <Link href="/info/about" passHref>
            Quem somos?
          </Link>,
          <Link href="/info/policies" passHref>
            Política
          </Link>,
          <Link href="/info/design" passHref>
            Design
          </Link>,
          <Link href="/info/terms" passHref>
            Termos
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
        className='flex-row text-right justify-end'
        header='redes sociais'
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
