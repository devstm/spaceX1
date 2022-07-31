import { Menu } from 'antd';
import style from '../styles/Nav.module.css';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
function Navbar({ setLang, lang }: any) {
  const { t } = useTranslation();

  return (
    <div className={style['nav-container']}>
      <Menu
        className={style['menu']}
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['0']}
      >
        <a>
          <Link href='/Missions'>
            <a>{t('home')}</a>
          </Link>
        </a>
        <Menu.Item key='Missions'>
          <Link href='/Missions'> Missions </Link>
        </Menu.Item>
        <Menu.Item key='Launches'>
          <Link href='/Launches'> Launches </Link>
        </Menu.Item>
      </Menu>
      <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
        {lang === 'en' ? 'AR' : 'EN'}
      </button>
    </div>
  );
}

export default Navbar;
