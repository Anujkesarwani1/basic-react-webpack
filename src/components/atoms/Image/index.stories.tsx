import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import Image from '.'
import HOMEPAGE_IMG from '../../../../public/assets/images/images1.svg'

export default {
  title: 'atoms/Image',
  component: Image,
} as Meta<typeof Image>

const template: StoryFn<typeof Image> = (args) => <Image {...args} />

export const HomePageImage = template.bind({})
HomePageImage.args = {
  src: HOMEPAGE_IMG,
  alt: 'Home page empty state image',
}
