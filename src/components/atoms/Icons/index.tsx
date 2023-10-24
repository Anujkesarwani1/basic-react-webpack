import React from "react";

interface IconProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Icons = (props: IconProps) => {
  return (
    <React.Fragment>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </React.Fragment>
  );
};

export default Icons;
