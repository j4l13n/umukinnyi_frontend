/**
 * Validation functions
 */

export const isEmail = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPassword = password => {
  if (/\s/.test(password)) {
    return false;
  }
  if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
    return true;
  }
  return false;
};

export const isValidUsername = username => {
  return /^[a-zA-Z]+$/.test(username);
};

export const isValidname = name => {
  return /^[a-zA-Z ]+$/.test(name);
}

export const isPhonenumber = phone => {
  return /^(\([0-9]{3}\)\s*|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(phone)
}
