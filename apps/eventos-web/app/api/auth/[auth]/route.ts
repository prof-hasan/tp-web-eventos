import { NextRequest, NextResponse } from 'next/server';
import { callback, signOut, verifyOtp } from './(utils)';

export const GET = async (req: NextRequest) => {
  const authRoute = req.url.split('/').pop();
  switch (true) {
    case authRoute?.startsWith('callback'):
      return await callback(req);
    case authRoute?.startsWith('confirm'):
      return await verifyOtp(req);
    case authRoute?.startsWith('sign-out'):
      return await signOut(req);
    default:
      return NextResponse.json({ message: `Hello + ${authRoute}` });
  }
};
