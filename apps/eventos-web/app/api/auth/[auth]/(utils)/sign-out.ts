import { NextRequest, NextResponse } from "next/server";
import { auth } from "@repo/auth-domain/auth-cli";

export const signOut = async (req: NextRequest) => {
  await auth.forRouteHandler().auth().signOut();
  const redirectTo = new URL(req.url);
  redirectTo.pathname = "/";
  return NextResponse.redirect(redirectTo);
}