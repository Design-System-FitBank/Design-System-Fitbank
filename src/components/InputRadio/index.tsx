import { Typography } from '../Typography'
import { InputItem } from './InputItem'
import React, { useState } from 'react'
import * as Styled from './styles'

interface RadioProps {
  title: string
  optionsList: string[]
  direction?: 'column' | 'row'
}

export const InputRadio = ({ title, optionsList, direction = 'column' }: RadioProps) => {
  const [checked, setChecked] = useState('')
  const onclick = (value: string) => {
    setChecked(value)
  }
  return (
    <Styled.Container>
      <Typography variant='bodyBold'>{title}</Typography>
      <Styled.ContainerDirection data-testid='radio-container' direction={direction}>
        {optionsList.map(option => (
          <InputItem option={option} onclick={onclick} checked={checked === option} />
        ))}
      </Styled.ContainerDirection>
    </Styled.Container>
  )
}
