export interface ImageProps {
  src: string
  alt: string
  width?: string
  height?: string
  onClick?: () => void
}

const Image = (props: ImageProps) => {
  return <img {...props} />
}
Image.defaultProps = {
  height: '200px',
  width: '90px',
}

export default Image
