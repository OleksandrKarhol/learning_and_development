import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Cell, ResponsiveContainer, LabelList
} from 'recharts'
import type { VdrRecord } from '../../types'
import { countBy } from '../../utils/parseData'

interface UseCaseChartProps { data: VdrRecord[] }

const COLORS = [
  '#1a472a', '#2d6a4f', '#40916c', '#52b788', '#74c69d',
  '#95d5b2', '#b7e4c7', '#457b9d', '#a8dadc', '#e9c46a',
  '#f4a261', '#e76f51', '#6d6875', '#b5838d', '#a9d6a9'
]

export function UseCaseChart({ data }: UseCaseChartProps) {
  const counts = countBy(data, 'use_case')
  const chartData = counts.map(c => ({ useCase: c.label, count: c.count }))
  const max = Math.max(...chartData.map(d => d.count), 1)

  const chartHeight = Math.max(chartData.length * 32, 300)

  return (
    <div style={{ background: 'white', borderRadius: 16, border: '1px solid #e5f5ec', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
      <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#1f2937', fontFamily: 'Inter, sans-serif' }}>VDRs by Use Case</h3>
      <p style={{ margin: '4px 0 20px', fontSize: 12, color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}>Distribution across all deal and project categories</p>
      <div style={{ height: chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 60, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0faf4" horizontal={false} />
            <XAxis type="number" hide domain={[0, max * 1.15]} />
            <YAxis type="category" dataKey="useCase" width={175}
              tick={{ fontSize: 11, fontFamily: 'Inter', fill: '#374151', fontWeight: 500 }}
              axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(v) => [Number(v).toLocaleString(), 'VDRs']}
              contentStyle={{ fontFamily: 'Inter, sans-serif', borderRadius: 10, fontSize: 13 }}
            />
            <Bar dataKey="count" radius={[0, 6, 6, 0]} maxBarSize={22}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
              <LabelList dataKey="count" position="right"
                style={{ fontSize: 11, fontFamily: 'Inter', fill: '#6b7280', fontWeight: 600 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
