import { useEffect, useState } from 'react'

export function useReveal(delay: number) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return `reveal${active ? ' active' : ''}`
}