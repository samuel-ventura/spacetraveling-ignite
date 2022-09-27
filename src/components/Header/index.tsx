import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="/">
          <img src="/images/Logo.svg" alt="Space Traveling." />
        </a>
        <div className={styles.spaceInHeader} />
      </div>
    </header>
  );
}
