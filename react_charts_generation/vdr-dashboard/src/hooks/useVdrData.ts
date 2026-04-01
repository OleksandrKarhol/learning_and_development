import { useState, useEffect } from 'react'
import type { VdrRecord } from '../types'
import { parseCSV } from '../utils/parseData'

interface UseVdrDataResult {
  data: VdrRecord[]
  loading: boolean
  error: string | null
}

export function useVdrData(): UseVdrDataResult {
  const [data, setData] = useState<VdrRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/sample_data.csv')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to load CSV`)
        return res.text()
      })
      .then((text) => {
        const records = parseCSV(text)
        setData(records)
        setLoading(false)
      })
      .catch((err: Error) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { data, loading, error }
}
