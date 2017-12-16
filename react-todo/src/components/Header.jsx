import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
const cx = classNames.bind(styles);

const Header = () => {
  return(
    <header className={cx('header')}>
      <h1 className={cx('title')}>My To Do List</h1>
    </header>
  );
};

export default Header;