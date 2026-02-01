import styles from './Button.module.scss';

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...rest } = props;

  return (
    <button className={`${styles.container} ${className}`} type="submit" {...rest}>
      {children}
    </button>
  );
};
