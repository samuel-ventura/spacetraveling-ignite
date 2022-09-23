import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/Logo.svg" alt="Space Traveling." />
        <div className={styles.spaceInHeader}/>
      </div>
    </header>
  );
}
