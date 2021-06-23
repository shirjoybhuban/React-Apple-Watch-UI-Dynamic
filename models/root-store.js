import { types } from 'mobx-state-tree';
import { User } from './user';

export const RootStore = types
  .model('RootStore', {
    user: User,
    hydrated: false,
    loginStatus: false,
  })
  .actions((self) => ({
    setlogInStatus() {
      self.loginStatus = !self.loginStatus;
    },
  }))
  .views((self) => ({
    get logStatus() {
      return self.loginStatus;
    },
  }));
