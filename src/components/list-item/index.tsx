import { clsx } from 'clsx';
import styles from './index.module.css';

type Props = {
  className?: string;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  children?: React.ReactNode;
};

export default function ListItem({ className, href, target, children }: Props) {
  return (
    <li className={clsx(styles.container, className)}>
      {href ? (
        <a href={href} target={target}>
          {children}
        </a>
      ) : (
        <span>{children}</span>
      )}
    </li>
  );
}
