import { SITE_DESCRIPTION, REVEAL_DELAY_SUBTITLE } from '../constants'
import { useReveal } from '../hooks'
import styles from './Subtitle.module.css'

export function Subtitle() {
  const className = useReveal(REVEAL_DELAY_SUBTITLE)
  return (
    <p className={`${styles.subtitle} ${className}`}>
      {SITE_DESCRIPTION}
    </p>
  )
}