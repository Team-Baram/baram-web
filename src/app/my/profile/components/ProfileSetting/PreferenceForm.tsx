'use client'

import { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  Snackbar,
} from '@mui/material'
import { SelectDialogButton, CustomSaveDialog } from '@/components'
import { useUpdatePreferenceMutation } from '@/queries'
import { activityTypeOptions, runningOptions, cyclingOptions } from '@/constants'
import type {
  SelectedPreference,
  PreferenceOption,
  PreferenceActivityTypeOption,
  PreferenceForm,
} from '@/types'

interface PreferenceFormProps {
  id: number
  preference: PreferenceForm
}

export default function PreferenceForm({ id, preference }: PreferenceFormProps) {
  const { activityType, distance, pace, activityDaysPerWeek } = preference
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false)
  const [selectedPreference, setSelectedPreference] = useState<SelectedPreference>({
    label: '종목',
    key: 'activityType',
    options: activityTypeOptions,
  })
  const [selectedOption, setSelectedOption] = useState<
    PreferenceOption | PreferenceActivityTypeOption
  >(activityTypeOptions[0])

  const updatePreferenceMutation = useUpdatePreferenceMutation()

  useEffect(() => {
    if (updatePreferenceMutation.isSuccess) {
      setIsSnackbarOpen(true)
    }
  }, [updatePreferenceMutation.isSuccess])

  const preferenceOptions = activityType === 'running' ? runningOptions : cyclingOptions

  const handleDialog = (
    label: string,
    key: string,
    options: PreferenceOption[] | PreferenceActivityTypeOption[],
  ) => {
    setIsDialogOpen(true)
    setSelectedPreference({
      label,
      key,
      options,
    })
    setSelectedOption(options.find((option) => option.value === preference[key]))
  }

  const save = () => {
    if (selectedPreference.key === 'activityType') {
      if (selectedOption.value === 'running') {
        updatePreferenceMutation.mutate({
          id,
          activityType: 'running',
          distance: runningOptions.distanceOptions[0].value,
          pace: runningOptions.paceOptions[runningOptions.paceOptions.length - 1].value,
          activityDaysPerWeek: runningOptions.activityDaysPerWeekOptions[0].value,
        })
      } else {
        updatePreferenceMutation.mutate({
          id,
          activityType: 'cycling',
          distance: cyclingOptions.distanceOptions[0].value,
          pace: cyclingOptions.paceOptions[0].value,
          activityDaysPerWeek: cyclingOptions.activityDaysPerWeekOptions[0].value,
        })
      }
    } else {
      updatePreferenceMutation.mutate({ id, [selectedPreference.key]: selectedOption.value })
    }
    setIsDialogOpen(false)
  }

  return (
    <>
      <Typography>맞춤 정보</Typography>
      <SelectDialogButton
        label='종목'
        value={activityTypeOptions.find((option) => option.value === activityType).label}
        onClick={() => handleDialog('종목', 'activityType', activityTypeOptions)}
      />
      <SelectDialogButton
        label='선호 거리 (km)'
        value={preferenceOptions.distanceOptions.find((option) => option.value === distance).label}
        onClick={() =>
          handleDialog('선호 거리 (km)', 'distance', preferenceOptions.distanceOptions)
        }
      />
      <SelectDialogButton
        label={`평균 페이스 ${activityType === 'running' ? '(분/km)' : '(km/h)'}`}
        value={preferenceOptions.paceOptions.find((option) => option.value === pace).label}
        onClick={() =>
          handleDialog(
            `평균 페이스 ${activityType === 'running' ? '(분/km)' : '(km/h)'}`,
            'pace',
            preferenceOptions.paceOptions,
          )
        }
      />
      <SelectDialogButton
        label={`주간 ${activityType === 'running' ? '러닝' : '라이딩'} 횟수`}
        value={
          preferenceOptions.activityDaysPerWeekOptions.find(
            (option) => option.value === activityDaysPerWeek,
          ).label
        }
        onClick={() =>
          handleDialog(
            `주간 ${activityType === 'running' ? '러닝' : '라이딩'} 횟수`,
            'activityDaysPerWeek',
            preferenceOptions.activityDaysPerWeekOptions,
          )
        }
      />
      <CustomSaveDialog
        label={selectedPreference.label}
        open={isDialogOpen}
        cancel={() => setIsDialogOpen(false)}
        save={save}
      >
        <Box>
          <FormControl>
            <RadioGroup name='preference'>
              {selectedPreference.options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={
                    <Radio
                      checked={option.value === selectedOption.value}
                      color='secondary'
                      onClick={() => setSelectedOption(option)}
                    />
                  }
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </CustomSaveDialog>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
        message='변경 사항이 저장되었습니다.'
      />
    </>
  )
}
