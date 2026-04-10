import { useEffect, useRef, useState, useCallback } from 'react'
import { SITE_TITLE, SCRAMBLE_CHARS, SCRAMBLE_DELAY, SCRAMBLE_SPEED, SCRAMBLE_STEP } from '../constants'

export function useScramble() {
  const [text, setText] = useState('')
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const trigger = useCallback(() => {
    let iterations = 0
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      const result = SITE_TITLE.split('').map((_char, index) => {
        if (index < iterations) return SITE_TITLE[index]
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      }).join('')

      setText(result)

      if (iterations >= SITE_TITLE.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setText(SITE_TITLE)
      }
      iterations += SCRAMBLE_STEP
    }, SCRAMBLE_SPEED)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(trigger, SCRAMBLE_DELAY)
    return () => {
      clearTimeout(timeout)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [trigger])

  return { text, trigger }
}