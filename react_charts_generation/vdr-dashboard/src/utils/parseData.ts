import Papa from 'papaparse'
import type { VdrRecord } from '../types'

export function parseCSV(text: string): VdrRecord[] {
  const result = Papa.parse<Record<string, string>>(text, {
    header: true,
    skipEmptyLines: true,
  })
  return result.data.map((row) => ({
    uuid: row.uuid || '',
    server_id: row.server_id || '',
    country: row.country || 'Unknown',
    status: row.status || 'Unknown',
    type: row.type || 'Unknown',
    plan: row.plan || 'Unknown',
    lifetime_days: isNaN(Number(row.lifetime_days)) ? 0 : Number(row.lifetime_days),
    created_ts: row.created_ts || '',
    use_case: row.use_case && row.use_case.trim() !== '' ? row.use_case : 'Unspecified',
  }))
}

export function countBy(
  records: VdrRecord[],
  field: keyof VdrRecord
): { label: string; count: number }[] {
  const map: Record<string, number> = {}
  for (const r of records) {
    const key = String(r[field]) || 'Unknown'
    map[key] = (map[key] || 0) + 1
  }
  return Object.entries(map)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count)
}

export function avgBy(
  records: VdrRecord[],
  groupField: keyof VdrRecord,
  valueField: keyof VdrRecord
): { label: string; value: number }[] {
  const sums: Record<string, number> = {}
  const counts: Record<string, number> = {}
  for (const r of records) {
    const key = String(r[groupField]) || 'Unknown'
    const val = Number(r[valueField])
    if (!isNaN(val)) {
      sums[key] = (sums[key] || 0) + val
      counts[key] = (counts[key] || 0) + 1
    }
  }
  return Object.entries(sums)
    .map(([label, sum]) => ({
      label,
      value: Math.round(sum / counts[label]),
    }))
    .sort((a, b) => b.value - a.value)
}

export function countByYear(
  records: VdrRecord[]
): { year: string; count: number }[] {
  const map: Record<string, number> = {}
  for (const r of records) {
    const year = r.created_ts ? r.created_ts.substring(0, 4) : 'Unknown'
    map[year] = (map[year] || 0) + 1
  }
  return Object.entries(map)
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => a.year.localeCompare(b.year))
}

/** Count records grouped by year, split by a second field (e.g. type: Client/Trial) */
export function countByYearAndField(
  records: VdrRecord[],
  field: keyof VdrRecord
): { year: string; [key: string]: string | number }[] {
  const map: Record<string, Record<string, number>> = {}
  const fieldValues = new Set<string>()

  for (const r of records) {
    const year = r.created_ts ? r.created_ts.substring(0, 4) : 'Unknown'
    const val = String(r[field]) || 'Unknown'
    fieldValues.add(val)
    if (!map[year]) map[year] = {}
    map[year][val] = (map[year][val] || 0) + 1
  }

  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([year, counts]) => {
      const row: { year: string; [key: string]: string | number } = { year }
      for (const val of fieldValues) {
        row[val] = counts[val] || 0
      }
      return row
    })
}

export function extractYear(ts: string): string {
  return ts ? ts.substring(0, 4) : ''
}
