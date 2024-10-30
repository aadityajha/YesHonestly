import Link from 'next/link';
import styles from "../home.module.css";
import logo from "../public/logo.png"
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo} >
        AskHonestly
        {/* <Image src={logo} width="24" height="24" /> */}

      </Link>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;