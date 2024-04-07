import api from '@/api';
import { type User, userSchema } from '@/schemas/UserSchema';

export default class UserService {
  static async getMe() {
    const response = await api.get<User>('users/me');

    return userSchema.cast(response.data);
  }
}
