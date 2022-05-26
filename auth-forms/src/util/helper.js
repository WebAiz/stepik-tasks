export function validateRegex(str, field) {
  switch (field) {
    case 'username': {
      const reg = /(?=^[a-zA-Z0-9-_]{3,15}$)(?=.*[a-zA-Z].*)/g;
      return reg.test(str);
    }
    case 'password': {
      const reg = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}/g;
      return reg.test(str);
    }
    case 'email': {
      const reg = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/g;
      return reg.test(str);
    }
    case 'firstname': {
      const reg = /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ-]{1,}$/g;
      return reg.test(str);
    }
    case 'lastname': {
      const reg = /^[A-Za-zА-Яа-яәғқңөұүhіӘҒҚҢӨҰҮҺІ-]{1,}$/g;
      return reg.test(str);
    }
    case 'telephone': {
      const reg = /^\+?[0-9]{8,15}$/g;
      return reg.test(str);
    }
    default: {
      break;
    }
  }
}