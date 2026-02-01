import { BaselineEmail, BaselinePhone, Marker } from '@/shared/ui/Icons';
import { LinkWithIcon } from '@/shared/ui/LinkWithIcon';

import styles from './Contacts.module.scss';

const CONTACTS = [
  {
    label: '+021-95-51-84',
    icon: <BaselinePhone />,
    link: 'tel:+021-95-51-84',
  },
  {
    label: 'shop@abelohost.com',
    icon: <BaselineEmail />,
    link: 'mailto:shop@abelohost.com',
  },
  {
    label: '1734 Stonecoal Road',
    icon: <Marker />,
    link: 'https://maps.app.goo.gl/QAXJa2vh7arxzfNf6',
  },
];

export const Contacts = () => {
  return (
    <div className={styles.container}>
      {CONTACTS.map((contact, index) => (
        <LinkWithIcon
          key={index}
          href={contact.link}
          icon={contact.icon}
          label={contact.label}
          blank
        />
      ))}
    </div>
  );
};
