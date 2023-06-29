// components/Navbar.js

import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">Ecommerce Store</a>
      </div>
      <div className={styles.navbarListWrapper}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/products">Products</a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/cart">Cart</a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/account">Account</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
