import { useState, useMemo } from 'react'
import { useVdrData } from './hooks/useVdrData'
import type { FilterState, VdrRecord } from './types'
import { extractYear } from './utils/parseData'
import { Header } from './components/Header'
import { KpiCards } from './components/KpiCards'
import { FilterBar } from './components/FilterBar'
import { StatusDonut } from './components/charts/StatusDonut'
import { VdrsByPlan } from './components/charts/VdrsByPlan'
import { TopCountries } from './components/charts/TopCountries'
import { UseCaseChart } from './components/charts/UseCaseChart'
import { CreationTimeline } from './components/charts/CreationTimeline'
import { PlanStatusStacked } from './components/charts/PlanStatusStacked'
import { AvgLifetimeByPlan } from './components/charts/AvgLifetimeByPlan'
import { ClientVsTrialByYear } from './components/charts/ClientVsTrialByYear'

const DEFAULT_FILTERS: FilterState = {
  status: 'All', plan: 'All', type: 'All',
  use_case: 'All', country: 'All', year: 'All',
}

function applyFilters(records: VdrRecord[], filters: FilterState): VdrRecord[] {
  return records.filter(r => {
    if (filters.status   !== 'All' && r.status   !== filters.status)             return false
    if (filters.plan     !== 'All' && r.plan     !== filters.plan)               return false
    if (filters.type     !== 'All' && r.type     !== filters.type)               return false
    if (filters.use_case !== 'All' && r.use_case !== filters.use_case)           return false
    if (filters.country  !== 'All' && r.country  !== filters.country)            return false
    if (filters.year     !== 'All' && extractYear(r.created_ts) !== filters.year) return false
    return true
  })
}

function App() {
  const { data, loading, error } = useVdrData()
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)
  const filteredData = useMemo(() => applyFilters(data, filters), [data, filters])

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f2' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            border: '4px solid #2d6a4f', borderTopColor: 'transparent',
            animation: 'spin 0.9s linear infinite', margin: '0 auto 16px',
          }} />
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#6b7280', fontSize: 15, fontWeight: 500 }}>
            Loading VDR data…
          </p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f2' }}>
        <div style={{ background: 'white', borderRadius: 16, padding: 32, maxWidth: 400, textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⚠</div>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 8 }}>Failed to load data</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', color: '#6b7280', fontSize: 14 }}>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f2' }}>
      <Header data={data} />

      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 24px 0' }}>

        {/* KPI Row */}
        <KpiCards data={filteredData} />

        {/* Filter Bar */}
        <div style={{ marginTop: 20 }}>
          <FilterBar filters={filters} onChange={setFilters} data={data} />
        </div>

        {/* Row 1: Donut + Area Timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
          <StatusDonut data={filteredData} />
          <CreationTimeline data={filteredData} />
        </div>

        {/* Row 2: Plan bars + Radar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
          <VdrsByPlan data={filteredData} />
          <AvgLifetimeByPlan data={filteredData} />
        </div>

        {/* Row 3: Countries + ComposedChart */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
          <TopCountries data={filteredData} />
          <ClientVsTrialByYear data={filteredData} />
        </div>

        {/* Full-width: Stacked plan status */}
        <div style={{ marginTop: 20 }}>
          <PlanStatusStacked data={filteredData} />
        </div>

        {/* Full-width: Use case */}
        <div style={{ marginTop: 20, marginBottom: 32 }}>
          <UseCaseChart data={filteredData} />
        </div>

      </main>

      <footer style={{
        textAlign: 'center', color: '#9ca3af', fontSize: 12,
        fontFamily: 'Inter, sans-serif', padding: '20px 0 28px',
        borderTop: '1px solid #e5f5ec',
      }}>
        VDR Analytics Dashboard &mdash;&nbsp;
        {filteredData.length.toLocaleString()} records shown
        {filteredData.length !== data.length && ` of ${data.length.toLocaleString()} total`}
      </footer>
    </div>
  )
}

export default App
