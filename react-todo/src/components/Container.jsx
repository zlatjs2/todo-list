import React from 'react';
import classNames from 'classnames/bind';
import styles from './Container.scss';
const cx = classNames.bind(styles);

const Container = ({ children }) => {
  return(
    <article className={cx('container')}>
      {children}
    </article>
  );
};

export default Container;