import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@repo/auth-domain/auth-cli';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const signOut = async (req: NextRequest) => {
  await auth.forRouteHandler().auth().signOut();
  cookies().delete('user');
  const redirectTo = req.nextUrl.clone();
  revalidatePath(redirectTo.origin);
  return NextResponse.redirect(redirectTo.origin);
};
