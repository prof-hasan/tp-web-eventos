import { PropsWithChildren } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { events } from '@repo/events-domain/events-cli';
import { cookies } from 'next/headers';
import { UserAuth } from '@repo/auth-domain/types';
import { UserEntity } from '@repo/events-domain/user-types';

export const LayoutProvider = async ({ children }: PropsWithChildren) => {
  const user: UserAuth | null = JSON.parse(cookies().get('user')?.value ?? 'null');
  const userEntity: UserEntity | null = user ? await events.forServerComponent().users().auth_id(user.id).get() : null;

  return (
    <main>
      <div className='flex h-screen flex-col'>
        <Header user={userEntity} />
        {children}
        <Footer className='mt-auto' />
      </div>
    </main>
  );
};
