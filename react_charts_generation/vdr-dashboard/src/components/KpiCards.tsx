import type { VdrRecord } from '../types'

interface KpiCardsProps { data: VdrRecord[] }

const icons = {
  total:    '◼',
  active:   '▲',
  lifetime: '◆',
  usecase:  '●',
}

export function KpiCards({ data }: KpiCardsProps) {
  const total = data.length

  const activeCount = data.filter(r => r.status === 'Active').length
  const activePct = total > 0 ? ((activeCount / total) * 100).toFixed(1) : '0'

  const lifetimeDays = data.map(r => r.lifetime_days).filter(v => !isNaN(v) && v > 0)
  const avgLifetime = lifetimeDays.length > 0
    ? Math.round(lifetimeDays.reduce((a, b) => a + b, 0) / lifetimeDays.length)
    : 0

  const useCaseCounts: Record<string, number> = {}
  for (const r of data) {
    if (r.use_case && r.use_case !== 'Unspecified') {
      useCaseCounts[r.use_case] = (useCaseCounts[r.use_case] || 0) + 1
    }
  }
  const topEntry = Object.entries(useCaseCounts).sort((a, b) => b[1] - a[1])[0]
  const topUseCase = topEntry?.[0] || 'N/A'
  const topCount   = topEntry?.[1] ?? 0

  const kpis = [
    {
      icon: icons.total,
      label: 'Total VDRs',
      value: total.toLocaleString(),
      sub: 'All records in dataset',
      accent: '#2d6a4f',
      bg: '#f0faf4',
    },
    {
      icon: icons.active,
      label: 'Active VDRs',
      value: activeCount.toLocaleString(),
      sub: `${activePct}% of total`,
      accent: '#40916c',
      bg: '#f0faf4',
    },
    {
      icon: icons.lifetime,
      label: 'Avg Lifetime',
      value: `${avgLifetime.toLocaleString()} days`,
      sub: 'Mean across all VDRs',
      accent: '#1a472a',
      bg: '#f0faf4',
    },
    {
      icon: icons.usecase,
      label: 'Top Use Case',
      value: topUseCase,
      sub: `${topCount.toLocaleString()} VDRs`,
      accent: '#52b788',
      bg: '#f0faf4',
    },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}
      className="max-lg:grid-cols-2">
      {kpis.map(kpi => (
        <div key={kpi.label} style={{
          background: 'white',
          borderRadius: 16,
          padding: '22px 24px',
          border: '1px solid #e5f5ec',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          borderLeft: `4px solid ${kpi.accent}`,
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 36, height: 36, borderRadius: 10, background: kpi.bg,
            color: kpi.accent, fontSize: 14, marginBottom: 14,
          }}>
            {kpi.icon}
          </div>
          <div style={{
            fontSize: 11, fontWeight: 700, color: '#9ca3af',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif', marginBottom: 6,
          }}>
            {kpi.label}
          </div>
          <div style={{
            fontSize: kpi.value.length > 10 ? 20 : 28,
            fontWeight: 800, color: kpi.accent,
            fontFamily: 'Inter, sans-serif', lineHeight: 1.1,
            marginBottom: 6, wordBreak: 'break-word',
          }}>
            {kpi.value}
          </div>
          <div style={{
            fontSize: 12, color: '#9ca3af',
            fontFamily: 'Inter, sans-serif',
          }}>
            {kpi.sub}
          </div>
        </div>
      ))}
    </div>
  )
}
