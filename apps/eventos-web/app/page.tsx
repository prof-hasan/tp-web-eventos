import { Button } from "@repo/ui/atoms";
import { events } from "@repo/events-domain/events-cli";
import { classname } from "@repo/ui/utils";

const Home = async () => {
  const eventsList = await events.forServerAction().events().list();

  return (
    <main>
      {eventsList.map((event: any) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
        </div>
      ))}
      <Button type="link" className={classname("bg-red-600", "border", "border-red-600")}>
        Click me
      </Button>
    </main>
  );
};

export default Home;
