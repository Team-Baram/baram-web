export type ActivityType = 'running' | 'cycling'

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

export interface SelectedPreference {
  label: string
  key: string
  options: PreferenceOption[] | PreferenceActivityTypeOption[]
}
