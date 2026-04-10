import { SOCIALS } from '../constants'
import styles from './SocialLinks.module.css'

export function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      {SOCIALS.map(social => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          {social.name}
        </a>
      ))}
    </div>
  )
}