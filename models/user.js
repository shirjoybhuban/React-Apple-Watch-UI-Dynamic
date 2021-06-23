import { types, cast } from 'mobx-state-tree';

const UserInfo = types.model('UserInfo', {
  id: types.maybeNull(types.number),
  userAccount: types.string,
  email: types.maybeNull(types.string),
  firstName: types.maybeNull(types.string),
  lastName: types.maybeNull(types.string),
  playOnStartup: types.maybeNull(types.boolean),
  temporaryPremium: types.maybeNull(types.boolean),
  temporaryPremiumExpiration: types.maybeNull(types.number),
  gender: types.maybeNull(types.string),
  dateOfBirth: types.maybeNull(types.number),
  userSource: types.maybeNull(types.string),
  terms: types.maybeNull(types.boolean),
  pristineUser: types.maybeNull(types.boolean),
  enablePushNotification: types.maybeNull(types.boolean),
  enableAutoPlay: types.maybeNull(types.boolean),
  enableAzan: types.maybeNull(types.boolean),
  enableCellularSongDownload: types.maybeNull(types.boolean),
  enableCellularPodcastDownload: types.maybeNull(types.boolean),
  employeePhoneNumber: types.maybeNull(types.string),
  lastLocation: types.maybeNull(types.string),
  verificationCode: types.maybeNull(types.string),
  phoneNumber: types.maybeNull(types.string),
  employeeId: types.maybeNull(types.string),
  dateOfSignup: types.maybeNull(types.number),
  premiumUser: types.maybeNull(types.boolean),
  tempPw: types.maybeNull(types.boolean),
  enableCrossfade: types.maybeNull(types.boolean),
});

export const User = types
  .model('User', {
    details: types.maybe(UserInfo),
  })
  .actions((self) => ({
    logIn(user) {
      self.details = user;
    },
    logOut() {
      self.details = undefined;
    },
    setName(name) {
      self.details.firstName = name.firstName;
      self.details.lastName = name.lastName;
    },
    setGender(gender) {
      self.details.gender = gender;
    },
  }))
  .views((self) => ({
    get isLoggedIn() {
      return !!self.details;
    },
    get firstName() {
      if (!self.details) {
        return undefined;
      }
      return self.details.firstName;
    },
    get lastName() {
      if (!self.details) {
        return undefined;
      }
      return self.details.lastName;
    },

    get gender() {
      if (!self.details) {
        return undefined;
      }
      return self.details.gender;
    },

    get dateOfBirth() {
      if (!self.details) {
        return undefined;
      }
      return self.details.dateOfBirth;
    },

    get tempPw() {
      if (!self.details) {
        return undefined;
      }
      return self.details.tempPw;
    },
  }));
