import styles from "./layout.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
