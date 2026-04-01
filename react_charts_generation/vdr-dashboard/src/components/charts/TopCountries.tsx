import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Cell, ResponsiveContainer, LabelList
} from 'recharts'
import type { VdrRecord } from '../../types'
import { countBy } from '../../utils/parseData'

interface TopCountriesProps { data: VdrRecord[] }

export function TopCountries({ data }: TopCountriesProps) {
  const counts = countBy(data, 'country').slice(0, 10)
  const chartData = counts.map(c => ({ country: c.label, count: c.count }))
  const max = Math.max(...chartData.map(d => d.count), 1)

  // Interpolate color intensity based on rank
  const getColor = (i: number, len: number) => {
    const t = 1 - i / (len - 1 || 1)
    const r = Math.round(26 + t * (45 - 26))
    const g = Math.round(71 + t * (145 - 71))
    const b = Math.round(42 + t * (112 - 42))
    return `rgb(${r},${g},${b})`
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h3 className="text-base font-semibold text-gray-800">Top 10 Countries</h3>
      <p className="text-xs text-gray-400 mt-0.5 mb-4">Countries with the highest number of VDRs</p>
      <div className="flex-1 min-h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 60, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0faf4" horizontal={false} />
            <XAxis type="number" hide domain={[0, max * 1.15]} />
            <YAxis type="category" dataKey="country" width={120}
              tick={{ fontSize: 12, fontFamily: 'Inter', fill: '#374151', fontWeight: 500 }}
              axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(v) => [Number(v).toLocaleString(), 'VDRs']}
              contentStyle={{ fontFamily: 'Inter, sans-serif', borderRadius: 10, fontSize: 13 }}
            />
            <Bar dataKey="count" radius={[0, 6, 6, 0]} maxBarSize={24}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={getColor(i, chartData.length)} />
              ))}
              <LabelList dataKey="count" position="right"
                style={{ fontSize: 12, fontFamily: 'Inter', fill: '#6b7280', fontWeight: 600 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
