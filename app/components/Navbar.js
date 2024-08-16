"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';

import { useCart } from '../context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const { cartItemsCount } = useCart();


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">MI Store</Link>
      </div>
      <ul className={styles.navLinks}>
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