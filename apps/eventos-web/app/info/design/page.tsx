import { cn } from '../../../../../packages/design-system/src/utils';
import { BaseImage as Image } from '@repo/design-system/atoms';

const DesignPage = async () => {
    return (
      <section className={cn('space-y-10')}>
        <article className={cn('flex flex-col items-center justify-center space-y-5 bg-red-50 py-8 px-20')}>
          <h3 className={cn('font-bold text-xl text-blue-800 uppercase')}>Tipografia e Paleta</h3>
          <h2 className={cn('text-4xl')}>Heading 2: Roboto, 2.25rem, #2D2327</h2>
          <h3 className={cn('font-bold text-xl text-blue-800 uppercase')}>Heading 3: Roboto, uppercase, 1.25rem, #2364AA</h3>
          <h4 className={cn('font-bold text-lg')}>Heading 4: Roboto, 1.125rem, Bold, #2D2327</h4>
        </article>
        <article className={cn('flex flex-col items-center justify-center space-y-5 py-8 px-20')}>
          <h3 className={cn('font-bold text-xl text-blue-800 uppercase')}>Text: Roboto 20px 2D2327</h3>
          <p>Pellentesque habitant morbi  senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          <span className={cn('flex space-x-80')}>
            <p className={cn('text-yellow-400')}>TEXTO EM DESTAQUE</p>
            <p className={cn('text-gray-400')}>TEXTO ESMAECIDO</p>
          </span>
          <h2 className={cn('text-4xl')}>Paleta</h2>
          <Image
            src='https://placehold.co/150x150'
            alt='Paleta'
            unoptimized
          />
        </article>
      </section>
    );
  };
  export default DesignPage;