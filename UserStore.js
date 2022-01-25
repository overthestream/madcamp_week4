import { makeAutoObservable, observable, action } from 'mobx';

class UserStore {
  static store;
  userName;
  userText;
  userLocation;
  image_url;

  static get Store() {
    if (!this.store) this.store = new UserStore();
    return this.store;
  }
  constructor() {
    this.userName = '이제호';
    this.userText = '소소하게 살자';
    this.userLocation = '부산';
    this.image_url =
      'https://madcamp4.s3.ap-northeast-2.amazonaws.com/%EC%A0%9C%ED%98%B8.jpeg';
    makeAutoObservable(this, {
      userName: observable,
      userText: observable,
      userLocation: observable,
      image_url: observable,
      setUserInfo: action,
      updateUserImage: action,
      updateUserText: action,
      updateUserLocation: action,
    });
  }
  setUserInfo = (name, text, location, url) => {
    this.userName = name;
    this.userText = text;
    this.userLocation = location;
    this.image_url = url;
  };

  updateUserText = (newText) => {
    this.userText = newText;
  };

  updateUserLocation = (newLoc) => {
    this.userLocation = newLoc;
  };

  updateUserImage = (newUrl) => {
    this.image_url = newUrl;
  };
}

export default UserStore;
