import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@repo/auth-domain/auth-cli';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export const signOut = async (req: NextRequest) => {
  await auth.forRouteHandler().auth().signOut();
  cookies().delete('user');
  const redirectTo = '/';
  revalidatePath(redirectTo, 'layout');
  revalidatePath(redirectTo, 'page');
  return redirect(redirectTo);
};
