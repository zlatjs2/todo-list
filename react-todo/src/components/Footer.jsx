import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.scss';
const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <p className={cx('text')}>React TodoList</p>
    </div>
  );
};

export default Footer;