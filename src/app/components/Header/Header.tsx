import React from 'react'

import styles from './header.module.css'

const Header: React.FC = () => {
    const key = process.env.NODE_ENV
  return (
    <div className={styles.container}>
        <div className={styles.title}>Global NEWS</div>
    </div>
  )
}

export default Header