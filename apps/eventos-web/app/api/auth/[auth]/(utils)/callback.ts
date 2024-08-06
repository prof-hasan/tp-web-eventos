import { auth } from '@repo/auth-domain/auth-cli';
import { NextRequest, NextResponse } from 'next/server';

export const callback = async (req: NextRequest) => {
  const reqUrl = new URL(req.url || '', 'http://localhost');
  const code = reqUrl.searchParams.get('code');
  const origin = reqUrl.origin;

  if (!code) {
    return NextResponse.json({ error: 'missing code' });
  }

  const { data, error } = await auth.forRouteHandler().actions().exchangeCode(code);

  return !error ? NextResponse.redirect(`${origin}/`) : NextResponse.json({ error });
};
