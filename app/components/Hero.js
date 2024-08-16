import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Welcome to MI Store</h1>
      <p>Discover amazing products at great prices!</p>
      <button className={styles.cta}>
        <Link href="/products">Shop Now</Link>
      </button>
    </div>
  );
}