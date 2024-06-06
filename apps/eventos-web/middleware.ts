import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@repo/auth-domain/auth-cli';

export const config = {
  mathcer: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};

const middleware = async (req: NextRequest, res: NextResponse) => {
  try {
    await auth.forMiddleware({ request: req, response: res }).auth().updateSession();
    return res;
  } catch (error) {
    return NextResponse.next({
      request: {
        headers: req.headers,
      },
    });
  }
};

export default middleware;
