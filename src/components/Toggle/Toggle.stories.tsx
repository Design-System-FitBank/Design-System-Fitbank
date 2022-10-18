import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Toggle } from '.'

export default {
  title: 'Toggle',
  component: Toggle,
  argTypes: {}
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = args => <Toggle {...args} />

export const DafaultToggle = Template.bind({})
DafaultToggle.args = {
}

export const LabelToggle = Template.bind({})
LabelToggle.args = {
  isTitled: true,
  label: 'Toggle'
}