import { cn } from '../../../../../packages/design-system/src/utils';
import { Typograph } from '@repo/design-system/atoms';

const AboutPage = async () => {
  return (
    <section className={cn('space-y-10')}>
      <article className={cn('flex flex-col items-center justify-center space-y-5 bg-red-50 py-8 px-20')}>
        <Typograph variant='h3'>Nosso Trabalho</Typograph>
        <Typograph>Este site foi produzido por um grupo de alunos para a matéria de <strong>TÓPICOS ESPECIAIS EM ENGENHARIA DE SOFTWARE: PROGRAMAÇÃO PARA WEB</strong> ministrado no CEFET-MG pelo professor Daniel Hasan. O projeto consiste em um sistema de visualização de eventos ficticios (criado por nós) e não ficiticios. Os eventos não ficticios foram obtidos através de APIs de sites como o Sympla e foram utilizados com o intuito de estudar mais técnicas de desenvolvimento WEB.</Typograph>
        <span className={cn('flex space-x-80')}>
          <div className={cn('flex flex-col items-center justify-center')}>
            <Typograph variant='h4'>Front-end</Typograph>
            <Typograph>NextJS + Typescript + Tailwind</Typograph>
          </div>
          <div className={cn('flex flex-col items-center justify-center')}>
            <Typograph variant='h4'>Back-end</Typograph>
            <Typograph>NodeJS</Typograph>
          </div>
        </span>
      </article>
      <article className={cn('flex flex-col items-center justify-center space-y-5')}>
        <Typograph variant='h3'>Quem Somos</Typograph>
        <Typograph>Somos um grupo de estudantes de Engenharia da Computação do CEFET-MG.</Typograph>
        <div className={cn('flex flex-col items-center justify-center')}>
          <Typograph variant='h4'>VICTOR LE ROY MATOS</Typograph> 
          <Typograph>(https://github.com/vmleroy)</Typograph>
          <Typograph>victorlrmatos@gmail.com</Typograph>
        </div>
        <div className={cn('flex flex-col items-center justify-center')}>
          <Typograph variant='h4'>VINICIUS NASCIMENTO SILVA</Typograph>
          <Typograph>(https://github.com/vnszero)</Typograph>
          <Typograph>vnszero@gmail.com</Typograph>
        </div>
        <div className={cn('flex flex-col items-center justify-center')}>
          <Typograph variant='h4'>WILLIAN SILVA DE ALMEIDA</Typograph>
          <Typograph>(https://github.com/willhss1)</Typograph>
          <Typograph>willian.ws97@yahoo.com</Typograph>
        </div>
      </article>
    </section>
  );
};
export default AboutPage;