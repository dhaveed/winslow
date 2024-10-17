import React from 'react';

interface SVGIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  source: string;
}

export default function SVGIcon({ source, alt = '', ...props }: SVGIconProps) {
  return (
    <img
      src={source}
      alt={alt}
      className="w-full h-full object-cover"
      {...props}
    />
  );
}
