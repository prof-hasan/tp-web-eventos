import { Image as BaseImage, type ImageProps } from 'antd';

export const Image: React.FC<ImageProps> = ({ children, ...props }) => {
  return <BaseImage {...props}>{children}</BaseImage>;
};
