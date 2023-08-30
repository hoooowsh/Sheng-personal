import { User } from 'firebase/auth';

export async function getToken(user: User): Promise<string> {
  return await user.getIdToken();
}
