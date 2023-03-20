import React from 'react';
import styles from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        alt="logo"
        className={styles.header__logo}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className={styles.header__search}>
        <input className={styles.header__searchInput} type="text" />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <div className={styles.header__nav}>
        <div className={styles.header__navOption}>
          <span className={styles.header__optionLineOne}>Hello Guest</span>
          <span className={styles.header__optionLineTwo}>Sign In</span>
        </div>
        <div className={styles.header__navOption}>
          <span className={styles.header__optionLineOne}>Returns</span>
          <span className={styles.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={styles.header__navOption}>
          <span className={styles.header__optionLineOne}>Your</span>
          <span className={styles.header__optionLineTwo}>Prime</span>
        </div>
        <div className={styles.header__navCartIcon}>
          <ShoppingCartIcon />
          <span
            className={`${styles.header__optionLineTwo} ${styles.header__cartCount}`}
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
