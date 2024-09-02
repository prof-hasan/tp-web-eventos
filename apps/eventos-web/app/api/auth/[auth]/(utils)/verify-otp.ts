import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@repo/auth-domain/auth-cli';
import { EmailOtp } from '@repo/auth-domain/types';

export const verifyOtp = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type') as EmailOtp;
  const next = searchParams.get('next') ?? '/';

  const redirectTo = req.nextUrl.clone();
  redirectTo.pathname = next;
  redirectTo.searchParams.delete('token_hash');
  redirectTo.searchParams.delete('type');

  if (token_hash && type) {
    const { error } = await auth.forRouteHandler().actions().verifyOtp({ token_hash, type });
    if (!error) {
      redirectTo.searchParams.delete('next');
      return NextResponse.redirect(redirectTo);
    }
  }

  // return the user to an error page with some instructions
  redirectTo.pathname = '/error';
  return NextResponse.redirect(redirectTo);
};
