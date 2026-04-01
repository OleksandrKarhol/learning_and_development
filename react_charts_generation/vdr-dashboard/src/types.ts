export interface VdrRecord {
  uuid: string
  server_id: string
  country: string
  status: string
  type: string
  plan: string
  lifetime_days: number
  created_ts: string
  use_case: string
}

export interface FilterState {
  status: string
  plan: string
  type: string
  use_case: string
  country: string
  year: string
}
