import { useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

export function useAppUpdate() {
  const [isUpdating, setIsUpdating] = useState(false)

  const { needRefresh: [needRefresh], updateServiceWorker } = useRegisterSW()

  const handleUpdate = () => {
    if (isUpdating) return
    setIsUpdating(true)
    updateServiceWorker(true)
  }

  return { needRefresh, updateServiceWorker: handleUpdate, isUpdating }
}
