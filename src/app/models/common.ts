import { UserForStore } from './user/user-for-store';

export interface Common {
  isLoggedIn: boolean;
  user: UserForStore;
}
