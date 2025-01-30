import styles from './index.module.css';

type Props = {
  className?: string;
};

export default function Bio({ className }: Props) {
  return (
    <div className={className}>
      <h1 className={styles.title}>
        <span>Shingo Sato</span>
        <span className={styles.username}>@sugarshin</span>
      </h1>
      <div className={styles.descr}>
        <span className={styles.nowrap}>Software Engineer</span> and{' '}
        <span className={styles.nowrap}>Engineering Manager</span> at{' '}
        <a href="https://www.lycorp.co.jp/en/" className={styles.nowrap}>
          LY Corporation
        </a>
      </div>
    </div>
  );
}
