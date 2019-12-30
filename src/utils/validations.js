export default class Validations {
  static validateEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  static validatePassword = password => {
    if (password) {
      if (password.length >= 6) {
        return true;
      }
      return false;
    }
    return false;
  };
  static validateName = name => {
    if (name) {
      if (name.length >= 6 && name.length <= 20) {
        return true;
      }
      return false;
    }
    return false;
  };
}
