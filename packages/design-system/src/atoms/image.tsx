interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Image: React.FC<ImageProps> = ({ children, ...props }) => {
  return <img {...props} />;
};
