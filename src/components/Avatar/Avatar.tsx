import React, { useEffect, useState } from 'react'
import styles from '../../styles.module.css'
import Shimmer from '../Shimmer/Shimmer'

interface Props {
  theme?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
}

const Avatar = ({ size, theme }: Props) => {
  const [customClass, setCustomClass] = useState(styles.avatar)
  const [bgColor, setBgColor] = useState('')

  useEffect(() => {
    switch (size) {
      case 'medium':
        return setCustomClass(styles.medium)
      case 'large':
        return setCustomClass(styles.large)
      default:
        return setCustomClass(styles.thumbnail)
    }
  }, [size])

  useEffect(() => {
    switch (theme) {
      case 'dark':
        return setBgColor('lightgrey')
      default:
        return setBgColor('')
    }
  }, [theme])

  return (
    <div
      className={`${styles.avatar} ${customClass}`}
      style={{ background: bgColor }}
    >
      <Shimmer theme={theme} />
    </div>
  )
}

export default Avatar
