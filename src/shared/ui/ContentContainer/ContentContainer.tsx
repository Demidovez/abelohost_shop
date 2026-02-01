import styles from './ContentContainer.module.scss';

interface ContentContainerProps extends React.PropsWithChildren {
  className?: string;
}

export const ContentContainer = ({ children, className }: ContentContainerProps) => {
  return <section className={`${styles.container} ${className}`}>{children}</section>;
};
