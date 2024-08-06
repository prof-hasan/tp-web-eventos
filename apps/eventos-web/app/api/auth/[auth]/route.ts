import { NextRequest, NextResponse } from 'next/server';
import { callback, signOut, verifyOtp } from './(utils)';
import { redirect } from 'next/navigation';

export const GET = async (req: NextRequest) => {
  const authRoute = req.url.split('/').pop();
  switch (true) {
    case authRoute?.startsWith('callback'):
      return await callback(req);
    case authRoute?.startsWith('confirm'):
      return await verifyOtp(req);
    case authRoute?.startsWith('signout'):
      return await signOut(req);
    default:
      return NextResponse.json({ message: `Hello + ${authRoute}` });
  }
};
