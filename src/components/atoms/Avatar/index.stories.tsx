import { StoryFn, Meta } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material'
import AVATAR from '../../../../public/assets/images/Avatar.svg'

import MyAvatar from '.'

export default {
  title: 'Atoms/Avatar',
  component: MyAvatar,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['circular', 'rounded', 'square'],
    },
  },
} as Meta<typeof MyAvatar>

const theme = createTheme()

const Template: StoryFn<typeof MyAvatar> = (args) => (
  <ThemeProvider theme={theme}>
    <MyAvatar {...args} />
  </ThemeProvider>
)

export const Primary = Template.bind({})
export const Secondary = Template.bind({})

Primary.args = {
  alt: 'Avatar not found',
  src: AVATAR,
  variant: 'circular',
  sx: {
    width: '28px',
    height: '28px',
  },
}

Secondary.args = {
  children: 'N',
  variant: 'square',
  sx: {
    width: '28px',
    height: '28px',
  },
}
