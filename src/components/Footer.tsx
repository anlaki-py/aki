import { useReveal } from '../hooks'
import { REVEAL_DELAY_FOOTER } from '../constants'
import { SocialLinks } from './SocialLinks'
import styles from './Footer.module.css'

export function Footer() {
  const className = useReveal(REVEAL_DELAY_FOOTER)
  return (
    <footer className={className}>
      <div className={styles.footerDivider} />
      <SocialLinks />
    </footer>
  )
}