'use client';

import { Button } from '@/shared/ui/Button';

import styles from './LoginForm.module.scss';
import { useFormSubmit } from './useFormSubmit';

export const LoginForm = () => {
  const from = useFormSubmit();

  return (
    <form className={styles.container} onSubmit={from.handleSubmit} onChange={from.handleChange}>
      <div className={styles.inputs}>
        <div>
          <input
            name={from.fieldsNames.USERNAME_FIELD}
            type="text"
            placeholder="Username"
            aria-invalid={!!from.usernameError}
          />
          {from.usernameError && <p className={styles.error}>{from.usernameError}</p>}
        </div>
        <div>
          <input
            name={from.fieldsNames.PASSWORD_FIELD}
            type="password"
            placeholder="Password"
            aria-invalid={!!from.passwordError}
          />
          {from.passwordError && <p className={styles.error}>{from.passwordError}</p>}
        </div>
      </div>
      <div className={styles.button}>
        <Button type="submit" data-loading={from.isSubmitting}>
          {from.isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
        {from.submitError && <p className={styles.error}>{from.submitError}</p>}
      </div>
    </form>
  );
};
