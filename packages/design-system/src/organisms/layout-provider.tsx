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
    <div className="flex flex-col min-h-screen">
      <Header user={userEntity} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};
