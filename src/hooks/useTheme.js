import { useEffect } from 'react'

// «Туман» у OlhaDrive за замовчуванням вимкнений; вимикач у Профілі зберігає 'on' у localStorage
export const FOG_KEY = 'olhadrive_fog'
export function isFogOn() {
  try { return localStorage.getItem(FOG_KEY) === 'on' } catch { return false }
}
export function applyFog(on) {
  document.documentElement.setAttribute('data-fog', on ? 'on' : 'off')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', on ? '#10141c' : '#1c1d21')
}

export function useTheme() {
  const theme = 'dark'

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    applyFog(isFogOn())
  }, [])

  return { theme, toggle: () => {}, setTheme: () => {} }
}
