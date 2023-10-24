import { StoryFn, Meta } from '@storybook/react'
import MuiTypography from '.'
import theme from '../../../themes'

const meta: Meta = {
  title: 'Atoms/Typography',
  component: MuiTypography,
  argTypes: {
    align: {
      options: ['center', 'inherit', 'justify', 'left', 'right'],
      control: { type: 'radio' },
    },
    variant: {
      options: [
        'h1',
        'h2',
        'subtitle1',
        'subtitle2',
        'subtitle3',
        'body1',
        'body2',
        'body3',
        'caption1',
        'caption2',
      ],
      control: { type: 'radio' },
    },
  },
}
export default meta

const Template: StoryFn<typeof MuiTypography> = (args) => (
  <MuiTypography {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  children: 'Codes for Tomorrow',
  variant: 'h2',
  align: 'center',
  sx: {
    color: theme.palette.Text.highEmphasis,
  },
}