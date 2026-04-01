import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip, Legend
} from 'recharts'
import type { VdrRecord } from '../../types'
import { avgBy } from '../../utils/parseData'

interface AvgLifetimeByPlanProps { data: VdrRecord[] }

export function AvgLifetimeByPlan({ data }: AvgLifetimeByPlanProps) {
  const avgs = avgBy(data, 'plan', 'lifetime_days')
  // Radar looks best with 5–8 points; use top plans by avg lifetime, max 8
  const chartData = avgs.slice(0, 8).map(a => ({ plan: a.label, days: a.value }))

  if (chartData.length < 3) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col items-center justify-center">
        <p className="text-gray-400 text-sm">Not enough plan data to render</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h3 className="text-base font-semibold text-gray-800">Avg Lifetime by Plan</h3>
      <p className="text-xs text-gray-400 mt-0.5 mb-2">Mean days a data room stays open, per plan tier</p>
      <div className="flex-1 min-h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={chartData} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
            <PolarGrid stroke="#e5f5ec" />
            <PolarAngleAxis dataKey="plan"
              tick={{ fontSize: 11, fontFamily: 'Inter', fill: '#374151', fontWeight: 500 }} />
            <PolarRadiusAxis angle={30} tick={{ fontSize: 10, fontFamily: 'Inter', fill: '#9ca3af' }}
              tickFormatter={(v) => `${v}d`} />
            <Radar name="Avg Days" dataKey="days" stroke="#2d6a4f" strokeWidth={2}
              fill="#52b788" fillOpacity={0.35}
              dot={{ r: 4, fill: '#2d6a4f', strokeWidth: 0 }} />
            <Tooltip
              formatter={(v) => [`${Number(v).toLocaleString()} days`, 'Avg Lifetime']}
              contentStyle={{ fontFamily: 'Inter, sans-serif', borderRadius: 10, fontSize: 13 }}
            />
            <Legend iconType="circle" iconSize={10}
              formatter={() => <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#374151' }}>Avg Lifetime (days)</span>} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
