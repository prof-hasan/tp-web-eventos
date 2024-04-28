import { events } from "./(utils)/(supabase)/eventos-cli";

const Home = async () => {
  const eventsList: any[] = await events.forClientComponent().events().list()
    
  return (
    <div>
      <h1>Eventos</h1>
      {eventsList.map((event: any) => (
        <div key={event.id}>
          <h2>Evento: {event.name}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;