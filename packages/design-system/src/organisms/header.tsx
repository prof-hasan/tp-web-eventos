'use client';

import { usePathname } from 'next/navigation';
import { UserEntity } from '@repo/events-domain/user-types';
import { HeaderHome } from './headers/header-home';
import { HeaderNoButton } from './headers/header-no-button';

type HeaderProps = {
  user?: UserEntity | null;
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = '', user }) => {
  const pathname = usePathname();
  const headerHomePathnamesRegex = ['^\/$', '^\/events/.*$', '^\/event/.*$'];

  if (headerHomePathnamesRegex.some((path) => new RegExp(path).test(pathname)))
    return (
      <HeaderHome
        user={user}
        className={className}
      />
    );

  return <HeaderNoButton />;
};
