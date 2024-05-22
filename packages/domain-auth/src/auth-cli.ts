/* eslint-disable -- disable eslint for this file because it is a template file and should not be linted */

import { createBrowserClient, createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

import { AuthDomain as Auth } from './domain';

export const auth = {
  forServerComponent: (): any =>
    Auth(
      (() => {
        const cookieStore = cookies();
        return createServerClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
          {
            cookies: {
              get(name: string) {
                return cookieStore.get(name)?.value;
              },
            },
          },
        );
      })(),
    ),
  forServerAction: (): any =>
    Auth(
      (() => {
        const cookieStore = cookies();
        return createServerClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
          {
            cookies: {
              get(name: string) {
                return cookieStore.get(name)?.value;
              },
              set(name: string, value: string, options: CookieOptions) {
                cookieStore.set({ name, value, ...options });
              },
              remove(name: string, options: CookieOptions) {
                cookieStore.set({ name, value: '', ...options });
              },
            },
          },
        );
      })(),
    ),
  forClientComponent: (): any =>
    Auth(
      (() => {
        return createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
        );
      })(),
    ),
  forRouteHandler: (): any =>
    Auth(
      (() => {
        const cookieStore = cookies();
        return createServerClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
          {
            cookies: {
              get(name: string) {
                return cookieStore.get(name)?.value;
              },
              set(name: string, value: string, options: CookieOptions) {
                cookieStore.set({ name, value, ...options });
              },
              remove(name: string, options: CookieOptions) {
                cookieStore.set({ name, value: '', ...options });
              },
            },
          },
        );
      })(),
    ),
  forMiddleware: ({ request, response }: { request: NextRequest; response: NextResponse }): any =>
    Auth(
      (() => {
        return createServerClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL ? process.env.NEXT_PUBLIC_SUPABASE_URL : '',
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : '',
          {
            cookies: {
              get(name: string) {
                return request.cookies.get(name)?.value;
              },
              set(name: string, value: string, options: CookieOptions) {
                request.cookies.set({
                  name,
                  value,
                  ...options,
                });
                response = NextResponse.next({
                  request: {
                    headers: request.headers,
                  },
                });
                response.cookies.set({
                  name,
                  value,
                  ...options,
                });
              },
              remove(name: string, options: CookieOptions) {
                request.cookies.set({
                  name,
                  value: '',
                  ...options,
                });
                response = NextResponse.next({
                  request: {
                    headers: request.headers,
                  },
                });
                response.cookies.set({
                  name,
                  value: '',
                  ...options,
                });
              },
            },
          },
        );
      })(),
    ),
};
