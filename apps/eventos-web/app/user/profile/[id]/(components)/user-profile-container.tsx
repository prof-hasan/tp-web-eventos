'use client';

import { Button, Image, Typograph } from '@repo/design-system/atoms';
import { UserEntity } from '@repo/events-domain/user-types';
import { on } from 'events';
import { useRouter } from 'next/navigation';

type UserProfileProps = {
  user: UserEntity | null;
};

export const UserProfileContainer = ({ user }: UserProfileProps) => {
  const router = useRouter();

  const onClickSignout = () => {
    router.push('/api/auth/signout');
  };

  const onClickCreateEvent = () => {
    router.push('/events/create');
  };

  const onClickEvents = () => {
    router.push('/user/events');
  }

  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-8 p-2'>
      <Image
        src={'https://placehold.co/250x250/png'}
        width={250}
        height={250}
        alt={user?.name ?? 'avatar-image'}
        unoptimized
      />
      <div className='flex flex-col items-center justify-center gap-1'>
        <Typograph variant='h2'>{user?.name}</Typograph>
        <Typograph>Email: {user?.email}</Typograph>
        <Typograph>Role: {user?.role.name}</Typograph>
      </div>
      <div className='flex w-3/4 flex-row flex-wrap items-center justify-center gap-2'>
        <Button
          className='w-40'
          onClick={onClickCreateEvent}
          variant='primary'
        >
          Criar evento
        </Button>
        <Button
          className='w-40'
          onClick={onClickEvents}
          variant='primary'
        >
          Eventos
        </Button>
        <Button
          className='w-40'
          onClick={onClickSignout}
          variant='primary'
        >
          Logout
        </Button>
      </div>
    </div>
  );
};
