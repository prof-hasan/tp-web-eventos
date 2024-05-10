import { FieldValues } from 'react-hook-form';
import { CreteEventFormContainer } from '../(components)/create-event-form-container';
import { events } from '@repo/events-domain/events-cli';

const CreateEventsPage = () => {
  const onSubmit = async (data: FieldValues) => {
    'use server';
    // TODO: get user id from session
    const owner_id = 'n/+mSjdHROCuX4CjsAPCzA=='; //example of user id
    const event = await events
      .forServerAction()
      .events()
      .create({ ...data, owner: { id: owner_id } });
    // TODO: if error, show error message
    if (!event) {
      console.error('Error creating event');
      return;
    }
    // TODO: redirect to event page with event.id
    console.log('Event created', event);    
  };

  return (
    <div>
      <h1>Crie seu evento</h1>
      <CreteEventFormContainer onSubmit={onSubmit} />
    </div>
  );
};

export default CreateEventsPage;
