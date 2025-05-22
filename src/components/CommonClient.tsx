'use client'

import styled from '@emotion/styled'

export const MobileContainer = styled.div<{ display?: 'none' | 'block' | 'flex' }>`
  display: none;
  height: 100%;
  width: 100%;

  @media (max-width: 600px) {
    display: ${({ display }) => display ?? 'block'};
  }
`

export const DesktopContainer = styled.div<{ display?: 'none' | 'block' | 'flex' }>`
  display: none;
  height: 100%;
  width: 100%;

  @media (min-width: 601px) {
    display: ${({ display }) => display ?? 'block'};
  }
`
