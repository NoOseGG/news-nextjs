import Link from "next/link";
import React from "react";

import styles from "./menu.module.css";

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="#">Politics</Link>
      <Link className={styles.link} href="#">In the world</Link>
      <Link className={styles.link} href="#">Economy</Link>
      <Link className={styles.link} href="#">Society</Link>
      <Link className={styles.link} href="#">Incidents</Link>
      <Link className={styles.link} href="#">Army</Link>
      <Link className={styles.link} href="#">The science</Link>
      <Link className={styles.link} href="#">Sport</Link>
      <Link className={styles.link} href="#">Culture</Link>
      <Link className={styles.link} href="#">Religion</Link>
      <Link className={styles.link} href="#">Tourism</Link>
    </div>
  );
};

export default Menu;
