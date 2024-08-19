import { PropsWithChildren } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { auth } from '@repo/auth-domain/auth-cli';
import { events } from '@repo/events-domain/events-cli';

export const LayoutProvider = async ({ children }: PropsWithChildren) => {
  let user = null;
  try {
    user = await auth.forServerComponent().auth().user().get();
  } catch (e) {
    console.log(e);
  }
  const userEntity = user ? await events.forServerComponent().users().auth_id(user.id).get() : null;

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
