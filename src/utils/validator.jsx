import { createAlert } from "./createAlert";

 export function checkEmailOrMobile(identity) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10,15}$/
  
    let identityKey = ''
    if (emailRegex.test(identity)) {
      identityKey = 'email'
    }
    if (mobileRegex.test(identity)) {
      identityKey = 'mobile'
    }
    if (!identityKey) {
      createAlert("error", 'only Email or Mobile phone')
    }
    return identityKey
  }