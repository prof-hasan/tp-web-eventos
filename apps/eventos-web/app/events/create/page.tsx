import { redirect } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { CreteEventFormContainer } from '../(components)/create-event-form-container';
import { auth } from '@repo/auth-domain/auth-cli';
import { events } from '@repo/events-domain/events-cli';

const CreateEventsPage = () => {
  const onSubmit = async (data: FieldValues) => {
    'use server';
    // TODO: get user id from session
    const { id: authId } = await auth.forServerComponent().auth().user().get();
    const { id: owner_id } = await events.forServerComponent().users().auth_id(authId).get();
    const event = await events
      .forServerComponent()
      .events()
      .create({ ...data, category: { id: data.category }, owner: { id: owner_id } });
    if (!event) {
      // TODO: if error, show error message
      console.log('Error creating event');
      return;
    }
    redirect(`/events/${encodeURIComponent}`);
  };

  return (
    <div>
      <CreteEventFormContainer onSubmit={onSubmit} />
    </div>
  );
};

export default CreateEventsPage;
