import type { NextApiRequest } from 'next';

export const tokenMiddleware = <
  T extends {
    req: NextApiRequest;
  },
  R extends {
    status: number;
    body: unknown;
  },
>(
  handler: (args: T) => Promise<R>,
) => {
  return async (args: T) => {
    try {
      if (args.req.method !== 'POST') {
        throw new Error('Invalid request method');
      }

      const { token } = args.req.body;

      if (!token) {
        throw new Error('Token was not provided');
      }

      if (token !== process.env.NEXT_PUBLIC_TOKEN) {
        throw new Error('Invalid token');
      }

      return await handler(args);
    } catch (_err) {
      console.log({ _err });
      return {
        status: 401,
        body: {
          message: 'Unauthorized',
        },
      } as const;
    }
  };
};
