import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Header from '../layout/Header';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header link={'home'} title={'2025년 9월'} />
      <div className={styles['menu-bar']}>
        <select>
          <option value="latest">최신순</option>
          <option value="oldset">오래된 순</option>
        </select>
        <Link to={'/new'}>
          <Button type={'green'} text={'새 일기 쓰기'}></Button>
        </Link>
      </div>
      <div className={styles['item-lists']}></div>
    </div>
  );
};

export default Home;
