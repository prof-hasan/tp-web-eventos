import { NextRequest, NextResponse } from "next/server";
import { events } from "@repo/events-domain/events-cli";

export const GET = async (req: NextRequest) => {
  // const eventsList = await events.forServerAction().users().list();
  const eventsList = await events.forServerAction().users().id("z0OxhdY8Q5Ke3YhJy38b4w==").get();
  // const eventsList = await events.forServerAction().users().email("victor@teste.com").get();
  // const eventsList = await events.forServerAction().users().auth_id("1").get();
  return NextResponse.json(eventsList);
}

export const POST = async (req: NextRequest) => {
  const event = await events.forServerAction().users().create(await req.json());
  return NextResponse.json(event);
}

export const PUT = async (req: NextRequest) => {
  const body = await req.json();
  const event = await events.forServerAction().users().id(body.id).update(body);
  return NextResponse.json(event);
}