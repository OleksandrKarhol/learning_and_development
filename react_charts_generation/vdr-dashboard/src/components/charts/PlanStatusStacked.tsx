import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, Cell
} from 'recharts'
import type { VdrRecord } from '../../types'

interface PlanStatusStackedProps { data: VdrRecord[] }

const STATUS_COLORS: Record<string, string> = {
  Active: '#2d6a4f',
  Closed: '#e63946',
  Other: '#94a3b8',
}

export function PlanStatusStacked({ data }: PlanStatusStackedProps) {
  const planMap: Record<string, Record<string, number>> = {}
  for (const r of data) {
    if (!planMap[r.plan]) planMap[r.plan] = {}
    const statusKey = ['Active', 'Closed'].includes(r.status) ? r.status : 'Other'
    planMap[r.plan][statusKey] = (planMap[r.plan][statusKey] || 0) + 1
  }

  const chartData = Object.entries(planMap)
    .map(([plan, counts]) => ({
      plan,
      Active: counts['Active'] || 0,
      Closed: counts['Closed'] || 0,
      Other: counts['Other'] || 0,
    }))
    .sort((a, b) => (b.Active + b.Closed + b.Other) - (a.Active + a.Closed + a.Other))

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-base font-semibold text-gray-800">Status Breakdown by Plan</h3>
      <p className="text-xs text-gray-400 mt-0.5 mb-4">Active vs Closed distribution across every subscription tier</p>
      <div style={{ height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0faf4" vertical={false} />
            <XAxis dataKey="plan"
              tick={{ fontSize: 12, fontFamily: 'Inter', fill: '#374151', fontWeight: 500 }}
              axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fontFamily: 'Inter', fill: '#6b7280' }}
              axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(v, name) => [Number(v).toLocaleString(), String(name)]}
              contentStyle={{ fontFamily: 'Inter, sans-serif', borderRadius: 10, fontSize: 13 }}
            />
            <Legend iconType="circle" iconSize={10}
              formatter={(value) => <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#374151' }}>{value}</span>} />
            {(['Active', 'Closed', 'Other'] as const).map(status => (
              <Bar key={status} dataKey={status} stackId="a" fill={STATUS_COLORS[status]}
                radius={status === 'Other' ? [4, 4, 0, 0] : [0, 0, 0, 0]} maxBarSize={48}>
                {chartData.map((_, i) => <Cell key={i} fill={STATUS_COLORS[status]} />)}
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
