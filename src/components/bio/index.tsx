import { clsx } from 'clsx';
import styles from './index.module.css';

type Props = {
  className?: string;
};

export default function Bio({ className }: Props) {
  return (
    <div className={className}>
      <h1 className={styles.title}>
        <span className={clsx(styles.name, styles.nowrap)}>Shingo Sato</span>
        <span className={clsx(styles.username, styles.nowrap)}>@sugarshin</span>
      </h1>
      <div className={styles.descr}>
        <span className={styles.nowrap}>Software Engineer</span> and{' '}
        <span className={styles.nowrap}>Engineering Manager</span> at{' '}
        <a href="https://about.dinii.jp/" className={styles.nowrap}>
          Dinii Inc.
        </a>
      </div>
    </div>
  );
}
