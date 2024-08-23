import { events } from '@repo/events-domain/events-cli';
import { useSearchParams } from 'next/navigation';
import { SearchPageContainer } from '../(components)/search-page-container';

const SearchEventsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search = searchParams.name as string;
  const eventsQueried = await events.forServerComponent().events().search().name(search).get();

  return (
    <div>
      <SearchPageContainer
        search={search ?? ''}
        events={eventsQueried}
      />
    </div>
  );
};

export default SearchEventsPage;
