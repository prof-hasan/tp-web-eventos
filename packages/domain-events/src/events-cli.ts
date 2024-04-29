import {
  createClientComponentClient,
  createMiddlewareClient,
  createRouteHandlerClient,
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { EventsDomain as Events } from "./domain";

export const events = {
  forServerComponent: (): any =>
    Events(
      (() => {
        const cookieStore = cookies();
        return createServerComponentClient({ cookies: () => cookieStore });
      })()
    ),
  forServerAction: (): any =>
    Events(
      (() => {
        const cookieStore = cookies();
        return createServerActionClient({ cookies: () => cookieStore });
      })()
    ),
  forClientComponent: (): any =>
    Events((() => createClientComponentClient())()),
  forRouteHandler: (): any =>
    Events(
      (() => {
        const cookieStore = cookies();
        return createRouteHandlerClient({ cookies: () => cookieStore });
      })()
    ),
  forMiddleware: ({ req, res }: { req: NextRequest; res: NextResponse }): any =>
    Events((() => createMiddlewareClient({ req, res }))()),
};