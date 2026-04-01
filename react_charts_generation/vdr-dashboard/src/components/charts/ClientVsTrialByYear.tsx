import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts'
import type { VdrRecord } from '../../types'
import { countByYearAndField } from '../../utils/parseData'

interface ClientVsTrialByYearProps { data: VdrRecord[] }

export function ClientVsTrialByYear({ data }: ClientVsTrialByYearProps) {
  const raw = countByYearAndField(data, 'type')
  const chartData = raw.map(row => ({
    year: row.year,
    Client: (row['Client'] as number) || 0,
    Trial: (row['Trial'] as number) || 0,
    Total: ((row['Client'] as number) || 0) + ((row['Trial'] as number) || 0),
  }))

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h3 className="text-base font-semibold text-gray-800">Client vs Trial — Year by Year</h3>
      <p className="text-xs text-gray-400 mt-0.5 mb-4">Grouped bars show mix of paying clients and free trials; line tracks total volume</p>
      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0faf4" vertical={false} />
            <XAxis dataKey="year"
              tick={{ fontSize: 12, fontFamily: 'Inter', fill: '#6b7280' }}
              axisLine={false} tickLine={false} />
            <YAxis yAxisId="left"
              tick={{ fontSize: 12, fontFamily: 'Inter', fill: '#6b7280' }}
              axisLine={false} tickLine={false} />
            <YAxis yAxisId="right" orientation="right"
              tick={{ fontSize: 11, fontFamily: 'Inter', fill: '#9ca3af' }}
              axisLine={false} tickLine={false} />
            <Tooltip
              formatter={(v, name) => [Number(v).toLocaleString(), String(name)]}
              contentStyle={{ fontFamily: 'Inter, sans-serif', borderRadius: 10, fontSize: 13 }}
            />
            <Legend iconType="circle" iconSize={10}
              formatter={(value) => <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#374151' }}>{value}</span>} />
            <Bar yAxisId="left" dataKey="Client" fill="#2d6a4f" radius={[4, 4, 0, 0]} maxBarSize={28} />
            <Bar yAxisId="left" dataKey="Trial" fill="#74c69d" radius={[4, 4, 0, 0]} maxBarSize={28} />
            <Line yAxisId="right" type="monotone" dataKey="Total" stroke="#f4a261"
              strokeWidth={2.5} dot={{ r: 4, fill: '#f4a261', strokeWidth: 0 }}
              activeDot={{ r: 6 }} name="Total" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
