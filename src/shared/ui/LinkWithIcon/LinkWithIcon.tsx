import Link from 'next/link';

import styles from './LinkWithIcon.module.scss';

interface LinkWithIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  blank?: boolean;
}

export const LinkWithIcon = (props: LinkWithIconProps) => {
  const { href, icon, label, blank = false } = props;

  return (
    <Link href={href} target={blank ? '_blank' : '_self'}>
      <div className={styles.container}>
        <div>{icon}</div>
        <span>{label}</span>
      </div>
    </Link>
  );
};
