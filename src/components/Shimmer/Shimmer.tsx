import React from 'react'
import styles from '../../styles.module.css'

interface ThemeProp {
  theme?: 'light' | 'dark'
}
const Shimmer = ({ theme }: ThemeProp) => {
  const getTheme = () => (theme === 'dark' ? styles.dark : '')

  return (
    <div className={styles.shimmerWrapper}>
      <div className={`${styles.shimmer} ${getTheme()}`} />
    </div>
  )
}

export default Shimmer
