import type { FilterState, VdrRecord } from '../types'
import { extractYear } from '../utils/parseData'

interface FilterBarProps {
  filters: FilterState
  onChange: (f: FilterState) => void
  data: VdrRecord[]
}

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values.filter((v) => v && v !== ''))].sort()
}

const selectStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 13,
  color: '#1f2937',
  background: '#f9fafb',
  border: '1.5px solid #d1fae5',
  borderRadius: 8,
  padding: '7px 32px 7px 11px',
  width: '100%',
  appearance: 'none',
  WebkitAppearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232d6a4f' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 10px center',
  cursor: 'pointer',
  outline: 'none',
  transition: 'border-color 0.15s',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 10,
  fontWeight: 700,
  color: '#6b7280',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: 5,
  fontFamily: 'Inter, sans-serif',
}

interface FilterFieldProps {
  label: string
  value: string
  options: string[]
  onChange: (v: string) => void
}

function FilterField({ label, value, options, onChange }: FilterFieldProps) {
  return (
    <div style={{ flex: '1 1 120px', minWidth: 100 }}>
      <label style={labelStyle}>{label}</label>
      <div style={{ position: 'relative' }}>
        <select value={value} onChange={e => onChange(e.target.value)} style={selectStyle}>
          <option value="All">All</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
    </div>
  )
}

export function FilterBar({ filters, onChange, data }: FilterBarProps) {
  const statuses = uniqueSorted(data.map(r => r.status))
  const plans    = uniqueSorted(data.map(r => r.plan))
  const types    = uniqueSorted(data.map(r => r.type))
  const useCases = uniqueSorted(data.map(r => r.use_case))
  const countries = uniqueSorted(data.map(r => r.country))
  const years    = uniqueSorted(data.map(r => extractYear(r.created_ts)))

  const update = (key: keyof FilterState) => (value: string) =>
    onChange({ ...filters, [key]: value })

  const reset = () =>
    onChange({ status: 'All', plan: 'All', type: 'All', use_case: 'All', country: 'All', year: 'All' })

  const isFiltered = Object.values(filters).some(v => v !== 'All')

  return (
    <div style={{
      background: 'white',
      borderRadius: 16,
      border: '1px solid #e5f5ec',
      padding: '16px 20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-end' }}>
        <FilterField label="Status"   value={filters.status}   options={statuses}   onChange={update('status')} />
        <FilterField label="Plan"     value={filters.plan}     options={plans}      onChange={update('plan')} />
        <FilterField label="Type"     value={filters.type}     options={types}      onChange={update('type')} />
        <FilterField label="Use Case" value={filters.use_case} options={useCases}   onChange={update('use_case')} />
        <FilterField label="Country"  value={filters.country}  options={countries}  onChange={update('country')} />
        <FilterField label="Year"     value={filters.year}     options={years}      onChange={update('year')} />
        <div style={{ flexShrink: 0, alignSelf: 'flex-end' }}>
          <button
            onClick={reset}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              fontWeight: 600,
              padding: '7px 18px',
              borderRadius: 8,
              border: isFiltered ? '1.5px solid #2d6a4f' : '1.5px solid #d1d5db',
              background: isFiltered ? '#2d6a4f' : 'white',
              color: isFiltered ? 'white' : '#9ca3af',
              cursor: isFiltered ? 'pointer' : 'default',
              transition: 'all 0.15s',
            }}
          >
            {isFiltered ? '✕ Reset' : 'No filters'}
          </button>
        </div>
      </div>
    </div>
  )
}
