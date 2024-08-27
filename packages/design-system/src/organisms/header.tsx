'use client';

import { usePathname } from 'next/navigation';
import { UserEntity } from '@repo/events-domain/user-types';
import { HeaderHome } from './headers/header-home';
import { HeaderNoButton } from './headers/header-no-button';
import { EventsCategoryEntity } from '../../../domain-events/src/category';

type HeaderProps = {
  user?: UserEntity;
  categories?: EventsCategoryEntity[];
  className?: string;
};

export const Header: React.FC<HeaderProps> = ({ className = '', categories, user }) => {
  const pathname = usePathname();
  const headerHome = ['/', '/events/music', '/events/theater', '/events/movies'];

  if (headerHome.includes(pathname))
    return (
      <HeaderHome
        user={user}
        categories={categories}
        className={className}
      />
    );

  return <HeaderNoButton />;
};
