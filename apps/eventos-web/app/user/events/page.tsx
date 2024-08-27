import { MyEvents } from './(components)/my-events';
import { SubcribedEvents } from './(components)/subcribed-events';

const UserEvents = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-10'>
      <MyEvents />
      <SubcribedEvents />
    </div>
  );
};

export default UserEvents;
