import { UserEntity } from '@repo/events-domain/user-types';
import { MyEvents } from './(components)/my-events';
import { SubcribedEvents } from './(components)/subcribed-events';
import { UserAuth } from '@repo/auth-domain/types';
import { cookies } from 'next/headers';
import { events } from '@repo/events-domain/events-cli';

const UserEvents = async () => {
  const user: UserAuth | null = JSON.parse(cookies().get('user')?.value ?? 'null');
  const userEntity: UserEntity | null = user ? await events.forServerComponent().users().auth_id(user.id).get() : null;
  const userEvents = userEntity ? await events.forServerComponent().events().owner_id(userEntity.id).get() : null;
  const subcribedEvents = userEntity
    ? await events.forServerComponent().users_events().user_id(userEntity.id).get()
    : null;

  return (
    <div className='flex h-full w-full flex-col items-center gap-20 p-2'>
      <MyEvents events={userEvents} />
      <SubcribedEvents events={subcribedEvents} />
    </div>
  );
};

export default UserEvents;
