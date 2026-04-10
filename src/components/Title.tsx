import { useScramble } from '../hooks'
import styles from './Title.module.css'

export function Title() {
  const { text, trigger } = useScramble()
  return (
    <h1 className={styles.title} onClick={trigger}>{text}</h1>
  )
}