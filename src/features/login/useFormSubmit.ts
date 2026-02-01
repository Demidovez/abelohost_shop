import { useState } from 'react';

import { toTitleCase } from '@/shared/helpers';

const MIN_USERNAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 3;

const USERNAME_FIELD = 'username';
const PASSWORD_FIELD = 'password';

const getErrorRequiredMessage = (field: string) => {
  return `${toTitleCase(field)} is required`;
};

const getErrorLengthMessage = (field: string, minLength: number) => {
  return `${toTitleCase(field)} must be at least ${minLength} characters long`;
};

export const useFormSubmit = () => {
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const login = async (username: string, password: string) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      console.log(username, password);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } catch (error) {
      console.error(error);
      setSubmitError('An error occurred while logging in');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');

    const formData = new FormData(e.target as HTMLFormElement);
    const username = (formData.get(USERNAME_FIELD) as string) || '';
    const password = (formData.get(PASSWORD_FIELD) as string) || '';

    const isUsernameEmpty = username === '';
    const isPasswordEmpty = password === '';
    const isUsernameTooShort = username.length < MIN_USERNAME_LENGTH;
    const isPasswordTooShort = password.length < MIN_PASSWORD_LENGTH;

    let usernameError = '';
    let passwordError = '';

    if (isUsernameEmpty) {
      usernameError = getErrorRequiredMessage(USERNAME_FIELD);
    }
    if (isPasswordEmpty) {
      passwordError = getErrorRequiredMessage(PASSWORD_FIELD);
    }

    if (!isUsernameEmpty && isUsernameTooShort) {
      usernameError = getErrorLengthMessage(USERNAME_FIELD, MIN_USERNAME_LENGTH);
    }

    if (!isPasswordEmpty && isPasswordTooShort) {
      passwordError = getErrorLengthMessage(PASSWORD_FIELD, MIN_PASSWORD_LENGTH);
    }

    if (usernameError || passwordError) {
      setUsernameError(usernameError);
      setPasswordError(passwordError);
      return;
    }

    login(username, password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (e.target.name === USERNAME_FIELD) {
      setUsernameError('');
      return;
    }

    if (e.target.name === PASSWORD_FIELD) {
      setPasswordError('');
      return;
    }
  };

  return {
    handleSubmit,
    handleChange,
    isSubmitting,
    submitError,
    usernameError,
    passwordError,
    fieldsNames: { USERNAME_FIELD, PASSWORD_FIELD },
  };
};
