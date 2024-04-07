import { TokenPayload } from '../tokens/token-payload.interface';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface User extends TokenPayload {
      refreshToken?: string;
    }
  }
}
