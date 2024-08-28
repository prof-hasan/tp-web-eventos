import { cn } from '../../../../../packages/design-system/src/utils';
import { Image } from '@repo/design-system/atoms';
import { Article, Typograph } from '@repo/design-system/atoms';

const DesignPage = async () => {
  return (
    <section>
      <Article variant='red'>
        <Typograph variant='h3'>Tipografia e Paleta</Typograph>
        <Typograph variant='h2'>Heading 2: Roboto, 2.25rem, #2D2327</Typograph>
        <Typograph variant='h3'>Heading 3: Roboto, uppercase, 1.25rem, #2364AA</Typograph>
        <Typograph variant='h4'>Heading 4: Roboto, 1.125rem, Bold, #2D2327</Typograph>
      </Article>
      <Article>
        <Typograph variant='h3'>Text: Roboto 20px 2D2327</Typograph>
        <Typograph>Pellentesque habitant morbi  senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</Typograph>
        <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-4')}>
          <Typograph variant='em'>TEXTO EM DESTAQUE</Typograph>
          <Typograph variant='i'>TEXTO ESMAECIDO</Typograph>
        </div>
        <Typograph variant='h2'>Paleta</Typograph>
        <Image
          src={require('../../../../../docs/imgs/colors.png')}
          alt='Paleta'
          className={cn('border-solid border-black border-2 rounded-md')}
          width={550}
          height={550}
          unoptimized
        />
      </Article>
    </section>
  );
};
export default DesignPage;