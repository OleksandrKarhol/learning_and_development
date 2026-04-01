import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine
} from 'recharts'
import type { VdrRecord } from '../../types'
import { countByYear } from '../../utils/parseData'

interface CreationTimelineProps { data: VdrRecord[] }

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: '#fff', border: '1px solid #d1fae5', borderRadius: 10, padding: '10px 14px', fontFamily: 'Inter, sans-serif' }}>
      <p style={{ margin: 0, fontWeight: 600, color: '#1a472a', fontSize: 13 }}>{label}</p>
      <p style={{ margin: '4px 0 0', color: '#2d6a4f', fontSize: 13 }}>
        <span style={{ fontWeight: 700 }}>{payload[0].value.toLocaleString()}</span> VDRs created
      </p>
    </div>
  )
}

export function CreationTimeline({ data }: CreationTimelineProps) {
  const yearCounts = countByYear(data)
  const chartData = yearCounts.map(y => ({ year: y.year, count: y.count }))
  const maxCount = Math.max(...chartData.map(d => d.count), 0)
  const peakYear = chartData.find(d => d.count === maxCount)?.year

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h3 className="text-base font-semibold text-gray-800">VDR Growth Over Time</h3>
      <p className="text-xs text-gray-400 mt-0.5 mb-4">Number of new VDRs created per year</p>
      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2d6a4f" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#2d6a4f" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0faf4" vertical={false} />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Inter', fill: '#6b7280' }}
              axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fontFamily: 'Inter', fill: '#6b7280' }}
              axisLine={false} tickLine={false} />
            {peakYear && (
              <ReferenceLine x={peakYear} stroke="#52b788" strokeDasharray="4 3"
                label={{ value: 'Peak', position: 'top', fontSize: 11, fill: '#40916c', fontFamily: 'Inter' }} />
            )}
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="count" stroke="#2d6a4f" strokeWidth={2.5}
              fill="url(#greenGrad)" dot={{ r: 4, fill: '#2d6a4f', strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#1a472a', strokeWidth: 0 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
