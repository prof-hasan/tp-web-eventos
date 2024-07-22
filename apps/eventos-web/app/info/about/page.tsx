import { cn } from '../../../../../packages/design-system/src/utils';

const AboutPage = async () => {
  return (
    <section className={cn('space-y-10')}>
      <article className={cn('flex flex-col items-center justify-center space-y-5 bg-red-50 py-8 px-20')}>
        <h3 className={cn('font-bold text-blue-800')}>Nosso Trabalho</h3>
        <p>Este site foi produzido por um grupo de alunos para a matéria de <strong>TÓPICOS ESPECIAIS EM ENGENHARIA DE SOFTWARE: PROGRAMAÇÃO PARA WEB</strong> ministrado no CEFET-MG pelo professor Daniel Hasan. O projeto consiste em um sistema de visualização de eventos ficticios (criado por nós) e não ficiticios. Os eventos não ficticios foram obtidos através de APIs de sites como o Sympla e foram utilizados com o intuito de estudar mais técnicas de desenvolvimento WEB.</p>
        <span className={cn('flex space-x-80')}>
          <div className={cn('flex flex-col items-center justify-center')}>
            <h4 className={cn('font-bold')}>Front-end</h4>
            <p>NextJS + Typescript + Tailwind</p>
          </div>
          <div className={cn('flex flex-col items-center justify-center')}>
            <h4 className={cn('font-bold')}>Back-end</h4>
            <p>NodeJS</p>
          </div>
        </span>
      </article>
      <article className={cn('flex flex-col items-center justify-center space-y-5')}>
        <h3 className={cn('font-bold text-blue-800')}>Quem Somos</h3>
        <p>Somos um grupo de estudantes de Engenharia da Computação do CEFET-MG.</p>
        <div className={cn('flex flex-col items-center justify-center')}>
          <h4 className={cn('font-bold')}>VICTOR LE ROY MATOS</h4> 
          <p>(https://github.com/vmleroy)</p>
          <p>victorlrmatos@gmail.com</p>
        </div>
        <div className={cn('flex flex-col items-center justify-center')}>
          <h4 className={cn('font-bold')}>VINICIUS NASCIMENTO SILVA</h4>
          <p>(https://github.com/vnszero)</p>
          <p>vnszero@gmail.com</p>
        </div>
        <div className={cn('flex flex-col items-center justify-center')}>
          <h4 className={cn('font-bold')}>WILLIAN SILVA DE ALMEIDA</h4>
          <p>(https://github.com/willhss1)</p>
          <p>willian.ws97@yahoo.com</p>
        </div>
      </article>
    </section>
  );
};
export default AboutPage;