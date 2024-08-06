import { cn } from '../utils';

type ArticleProps = {
  variant?: 'default' | 'red';
  children: React.ReactNode;
  extraClassName?: string;
};

export const Article: React.FC<ArticleProps> = ({ variant = 'default', children, extraClassName = '' }) => {
  const bgClass = variant === 'red' ? 'bg-red-50' : '';

  return (
    <article className={cn(`flex flex-col items-center justify-center space-y-5 py-8 px-20 ${bgClass}`, extraClassName)}>
      {children}
    </article>
  );
};

export default Article;
