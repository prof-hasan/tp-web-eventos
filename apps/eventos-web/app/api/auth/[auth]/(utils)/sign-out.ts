import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@repo/auth-domain/auth-cli';
import { redirect } from 'next/navigation';

export const signOut = async (req: NextRequest) => {
  await auth.forRouteHandler().auth().signOut();
  const redirectTo = '/';
  return redirect(redirectTo);
};
