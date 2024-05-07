interface Field {
  name: string;
  value: string;
  required?: boolean;
  minLength?: number;
}

interface Errors {
  [key: string]: string;
}

export const validateEmail = (email: string, required = true): string => {
  if (required && !email) {
    return 'Please enter an email address';
  }

  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }

  return '';
};

export const validatePassword = (
  password: string,
  required = true,
  minLength = 8
): string => {
  if (required && !password) {
    return `Please enter a password`;
  }

  if (password.length < minLength) {
    return `Password must be at least ${minLength} characters long`;
  }

  return '';
};

export const validateCredentialPassword = (
  password: string,
  required = true
): string => {
  if (required && !password) {
    return 'Please enter a password';
  }
  return '';
};

export const validateText = (
  name: string,
  text: string,
  required = true
): string => {
  if (required && !text) {
    return `Please enter a ${name}`;
  }
  return '';
};

export const validateForm = (fields: Field[]): Errors => {
  const errors: Errors = {};

  for (const field of fields) {
    const { name, value, required, minLength } = field;

    if (name === 'email') {
      errors.email = validateEmail(value, required);
    }

    if (name === 'password') {
      errors.password = validatePassword(value, required, minLength);
    }
    if (name === 'New Password') {
      errors.newPassword = validatePassword(value, required, minLength);
    }
    if (name === 'Old Password') {
      errors.oldPassword = validatePassword(value, required, minLength);
    }

    if (name === 'username') {
      errors.username = validateText(name, value, required);
    }

    if (name === 'title') {
      errors.title = validateText(name, value, required);
    }
    if (name === 'account') {
      errors.account = validateText(name, value, required);
    }

    if (name === 'credentialPassword') {
      errors.credentialPassword = validateCredentialPassword(value, required);
    }
  }

  return errors;
};
