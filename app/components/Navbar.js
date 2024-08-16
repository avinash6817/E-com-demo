"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';

import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const { cartItemsCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MI Store</Link>
      </div>

      <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li className={pathname === '/' ? styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === '/products' ? styles.active : ''}>
          <Link href="/products">Products</Link>
        </li>
        <li className={pathname === '/cart' ? styles.active : ''}>
          <Link href="/cart">
            Cart{cartItemsCount > 0 && ` (${cartItemsCount})`}
          </Link>
        </li>
      </ul>

    </nav>
  );
}