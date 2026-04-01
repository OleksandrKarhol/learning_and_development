import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import type { VdrRecord } from '../../types'
import { countBy } from '../../utils/parseData'

interface StatusDonutProps { data: VdrRecord[] }

const COLORS = ['#2d6a4f', '#52b788', '#e63946', '#f4a261', '#457b9d', '#a8dadc']
const STATUS_ORDER = ['Active', 'Closed', 'Preparation', 'Locked', 'Frozen', 'Suspended']

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: {
  cx?: number; cy?: number; midAngle?: number; innerRadius?: number; outerRadius?: number; percent?: number
}) => {
  if (!cx || !cy || !midAngle || !innerRadius || !outerRadius || !percent || percent < 0.04) return null
  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central"
      fontSize={13} fontWeight={700} fontFamily="Inter, sans-serif">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function StatusDonut({ data }: StatusDonutProps) {
  const rawCounts = countBy(data, 'status')
  const chartData = STATUS_ORDER
    .map(s => ({ name: s, value: rawCounts.find(c => c.label === s)?.count ?? 0 }))
    .filter(d => d.value > 0)
    .concat(rawCounts.filter(c => !STATUS_ORDER.includes(c.label)).map(c => ({ name: c.label, value: c.count })))

  const total = chartData.reduce((s, d) => s + d.value, 0)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
      <h3 className="text-base font-700 text-gray-800 font-semibold">VDR Status Distribution</h3>
      <p className="text-xs text-gray-400 mt-0.5 mb-4">Breakdown of all VDRs by current lifecycle status</p>
      <div className="relative flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" innerRadius="52%" outerRadius="78%"
              paddingAngle={3} dataKey="value" labelLine={false} label={renderCustomLabel}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} stroke="white" strokeWidth={2} />
              ))}
            </Pie>
            <Tooltip
              formatter={(v, name) => {
                const n = Number(v)
                return [`${n.toLocaleString()} (${total > 0 ? ((n / total) * 100).toFixed(1) : 0}%)`, String(name)]
              }}
              contentStyle={{ fontFamily: 'Inter, sans-serif', borderRadius: 10, fontSize: 13 }}
            />
            <Legend iconType="circle" iconSize={10}
              formatter={(value) => <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#374151' }}>{value}</span>} />
          </PieChart>
        </ResponsiveContainer>
        {/* Centre label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none" style={{ paddingBottom: 28 }}>
          <span className="text-2xl font-bold text-gray-800">{total.toLocaleString()}</span>
          <span className="text-xs text-gray-400 mt-0.5">Total VDRs</span>
        </div>
      </div>
    </div>
  )
}
