'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { SelectDialogButton, CustomDialog } from '@/components'
import { activityTypeOptions, runningOptions, cyclingOptions } from '@/constants'
import { useCreatePreferenceOnBoardingMutation } from '@/queries'
import type {
  PreferenceForm,
  SelectedPreference,
  PreferenceOption,
  PreferenceActivityTypeOption,
} from '@/types'
import { useTranslations } from 'next-intl'

export default function PreferenceForm() {
  const t = useTranslations()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedPreference, setSelectedPreference] = useState<SelectedPreference>({
    label: '종목',
    key: 'activityType',
    options: activityTypeOptions,
  })
  const [preferenceForm, setPreferenceForm] = useState<PreferenceForm>({
    activityType: activityTypeOptions[0],
    distance: runningOptions.distanceOptions[0],
    pace: runningOptions.paceOptions[runningOptions.paceOptions.length - 1],
    activityDaysPerWeek: runningOptions.activityDaysPerWeekOptions[0],
  })
  const createPreferenceOnBoardingMutation = useCreatePreferenceOnBoardingMutation()

  const handleDialog = (
    label: string,
    key: string,
    options: PreferenceOption[] | PreferenceActivityTypeOption[],
  ) => {
    setIsOpen(true)
    setSelectedPreference({
      label,
      key,
      options,
    })
  }

  const handleItemClick = <K extends keyof PreferenceForm>(key: K, option: PreferenceForm[K]) => {
    if (key === 'activityType') {
      setPreferenceForm((prev) => ({
        ...prev,
        activityType: option as PreferenceActivityTypeOption,
        distance:
          option.value === 'running'
            ? runningOptions.distanceOptions[0]
            : cyclingOptions.distanceOptions[0],
        pace:
          option.value === 'running'
            ? runningOptions.paceOptions[runningOptions.paceOptions.length - 1]
            : cyclingOptions.paceOptions[0],
        activityDaysPerWeek:
          option.value === 'running'
            ? runningOptions.activityDaysPerWeekOptions[0]
            : cyclingOptions.activityDaysPerWeekOptions[0],
      }))
    } else {
      setPreferenceForm((prev) => ({ ...prev, [key]: option as PreferenceOption }))
    }

    setIsOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    createPreferenceOnBoardingMutation.mutate({
      activityType: preferenceForm.activityType.value,
      distance: preferenceForm.distance.value,
      pace: preferenceForm.pace.value,
      activityDaysPerWeek: preferenceForm.activityDaysPerWeek.value,
    })
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{ width: '100%', maxWidth: 400, mx: 'auto', mt: 4 }}
    >
      <SelectDialogButton
        label='종목'
        value={preferenceForm.activityType.label}
        onClick={() => handleDialog('종목', 'activityType', activityTypeOptions)}
      />
      <SelectDialogButton
        label='선호 거리 (km)'
        value={preferenceForm.distance.label}
        onClick={() =>
          handleDialog(
            '선호 거리 (km)',
            'distance',
            preferenceForm.activityType.value === 'running'
              ? runningOptions.distanceOptions
              : cyclingOptions.distanceOptions,
          )
        }
      />
      <SelectDialogButton
        label={`평균 페이스 ${preferenceForm.activityType.value === 'running' ? '(분/km)' : '(km/h)'}`}
        value={preferenceForm.pace.label}
        onClick={() =>
          handleDialog(
            `평균 페이스${preferenceForm.activityType.value === 'running' ? '(분/km)' : '(km/h)'}`,
            'pace',
            preferenceForm.activityType.value === 'running'
              ? runningOptions.paceOptions
              : cyclingOptions.paceOptions,
          )
        }
      />
      <SelectDialogButton
        label={`주간 ${preferenceForm.activityType.value === 'running' ? '러닝' : '라이딩'} 횟수`}
        value={preferenceForm.activityDaysPerWeek.label}
        onClick={() =>
          handleDialog(
            `주간 ${preferenceForm.activityType.value === 'running' ? '러닝' : '라이딩'} 횟수`,
            'activityDaysPerWeek',
            preferenceForm.activityType.value === 'running'
              ? runningOptions.activityDaysPerWeekOptions
              : cyclingOptions.activityDaysPerWeekOptions,
          )
        }
      />
      <Button
        type='submit'
        fullWidth
        loading={createPreferenceOnBoardingMutation.isPending}
        variant='contained'
        sx={{ mt: 3 }}
      >
        {t('Common.save')}
      </Button>
      <CustomDialog
        label={selectedPreference.label}
        open={isOpen}
        fullScreen={fullScreen}
        close={() => setIsOpen(false)}
      >
        <List>
          {selectedPreference.options.map((option) => (
            <ListItem key={option.value} disablePadding>
              <ListItemButton onClick={() => handleItemClick(selectedPreference.key, option)}>
                <ListItemText primary={option.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CustomDialog>
    </Box>
  )
}
