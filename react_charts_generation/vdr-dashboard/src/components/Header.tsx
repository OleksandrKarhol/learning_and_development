import type { VdrRecord } from '../types'
import { extractYear } from '../utils/parseData'

interface HeaderProps {
  data: VdrRecord[]
}

export function Header({ data }: HeaderProps) {
  let minYear = ''
  let maxYear = ''
  if (data.length > 0) {
    const years = data
      .map((r) => extractYear(r.created_ts))
      .filter((y) => y !== '')
      .sort()
    minYear = years[0] || ''
    maxYear = years[years.length - 1] || ''
  }

  return (
    <header style={{ backgroundColor: '#1a472a' }} className="text-white px-8 py-6 shadow-lg">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white m-0">
              Virtual Data Room Analytics
            </h1>
            <p className="text-green-200 mt-1 text-lg font-medium">Executive Dashboard</p>
          </div>
          {minYear && maxYear && (
            <div className="text-right text-green-300 text-sm">
              <div>Data range</div>
              <div className="font-semibold text-white">
                {minYear} – {maxYear}
              </div>
              <div className="mt-1 text-green-300">{data.length.toLocaleString()} total records</div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
