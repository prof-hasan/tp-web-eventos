'use client';

import { usePathname } from 'next/navigation';
import { UserEntity } from '@repo/events-domain/user-types';
import { HeaderHome } from './headers/header-home';
import { HeaderNoButton } from './headers/header-no-button';

type HeaderProps = {
  user?: UserEntity;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = '', user }) => {
  const pathname = usePathname();
  console.log(pathname);

  const headerHome = ['/', '/events/music', '/events/theater', '/events/movies'];

  if (headerHome.includes(pathname))
    return (
      <HeaderHome
        user={user}
        className={className}
      />
    );

  return <HeaderNoButton />;
};
