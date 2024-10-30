import styles from "../home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Daddy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;