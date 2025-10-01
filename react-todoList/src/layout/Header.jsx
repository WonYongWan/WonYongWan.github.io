import styles from './Header.module.scss';
import Button from '../components/Button';

function Header({ title = '감정 일기장' }) {
  return (
    <header className={styles.header}>
      <div className={[styles.box, styles.left].join(' ')}>
        <Button text={'<'} />
      </div>
      <p className={styles.title}>{title}</p>
      <div className={[styles.box, styles.right].join(' ')}>
        <Button text={'>'} />
      </div>
    </header>
  );
}

export default Header;
