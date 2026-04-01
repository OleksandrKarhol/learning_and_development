import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Cell, ResponsiveContainer, LabelList
} from 'recharts'
import type { VdrRecord } from '../../types'
import { countBy } from '../../utils/parseData'

interface VdrsByPlanProps { data: VdrRecord[] }

// Green gradient shades from darkest → lightest by rank
const BAR_COLORS = ['#1a472a', '#2d6a4f', '#40916c', '#52b788', '#74c69d', '#95d5b2', '#b7e4c7', '#d8f3dc', '#a9d6a9']

export function VdrsByPlan({ data }: VdrsByPlanProps) {
  const counts = countBy(data, 'plan')
  const chartData = counts.map(c => ({ plan: c.label, count: c.count }))
  const max = Math.max(...chartData.map(d => d.count), 1)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h3 className="text-base font-semibold text-gray-800">VDRs by Subscription Plan</h3>
      <p className="text-xs text-gray-400 mt-0.5 mb-4">Count of active and historical VDRs per plan tier</p>
      <div className="flex-1 min-h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 60, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0faf4" horizontal={false} />
            <XAxis type="number" hide domain={[0, max * 1.15]} />
            <YAxis type="category" dataKey="plan" width={100}
              tick={{ fontSize: 12, fontFamily: 'Inter', fill: '#374151', fontWeight: 500 }}
              axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(v) => [Number(v).toLocaleString(), 'VDRs']}
              contentStyle={{ fontFamily: 'Inter, sans-serif', borderRadius: 10, fontSize: 13 }}
            />
            <Bar dataKey="count" radius={[0, 6, 6, 0]} maxBarSize={26}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
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
