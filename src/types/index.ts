export type ActivityType = 'running' | 'cycling'

export type ContactStatus = 'pending' | 'answered'

export interface PreferenceOption {
  label: string
  value: number
}

export interface PreferenceActivityTypeOption {
  label: string
  value: ActivityType
}

export interface PreferenceForm {
  activityType: PreferenceActivityTypeOption
  distance: PreferenceOption
  pace: PreferenceOption
  activityDaysPerWeek: PreferenceOption
}

export interface Contact {
  id: string
  title: string
  content: string
  status: ContactStatus
  answer: string
  createdAt: string
  answeredAt: string
}

export interface SelectedPreference {
  label: string
  key: string
  options: PreferenceOption[] | PreferenceActivityTypeOption[]
}
