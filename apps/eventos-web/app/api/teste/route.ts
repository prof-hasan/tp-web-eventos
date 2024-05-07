import { NextRequest, NextResponse } from "next/server";
import { events } from "@repo/events-domain/events-cli";

export const GET = async (req: NextRequest) => {
  // const event = await events.forRouteHandler().users_events().event_id("SnUAb4HtSvKyQ92OsZeNAw==").get();
  const event = await events.forRouteHandler().users_events().list();
  return NextResponse.json(event);
}

export const POST = async (req: NextRequest) => {
  const user_event = await req.json();
  const event = await events.forRouteHandler().users_events().create(user_event);
  // const event = await events.forRouteHandler().users_events().remove({event_id: "SnUAb4HtSvKyQ92OsZeNAw==", user_id: "kKbkvDH8TLu56uhm0Vwxag=="});
  return NextResponse.json(event);
}
