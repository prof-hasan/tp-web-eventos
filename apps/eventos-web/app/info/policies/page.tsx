import { cn } from '../../../../../packages/design-system/src/utils';
import { Typograph } from '@repo/design-system/atoms';

const PoliciesPage = async () => {
    return (
      <section className={cn('space-y-10')}>
        <article className={cn('flex flex-col items-center justify-center space-y-5 bg-red-50 py-8 px-20')}>
            <Typograph variant='h3'>Convenções de Boas Práticas de Segurança</Typograph>
            <Typograph>Mais que propor uma solução, é torná-la consistente e coerente com a realidade.</Typograph>
            <span>
                <div>
                    <Typograph variant='h4'>Comunicação</Typograph>
                    <Typograph>
                    Comunicação criptografada por adoção de certificado Secure Socket Layer (SSL) de forma a adotar protocolo HTTPS entre o navegador e o servidor. Esse critério inclusive ajuda o site a pontuar no ranking do Google, logo pode ser definitivo para que nossa solução seja indexada e apareça nas buscas dos usuários.</Typograph>
                </div>
                <div>
                    <Typograph variant='h4'>Áreas Restritas</Typograph>
                    <Typograph>Parâmetros passados pela Uniform Resource Identifier (URI) que ficam expostos ao usuário final não podem abrir espaço para que terceiros consigam acessar áreas restritas da aplicação. O foco aqui está em garantir que todo e qualquer fluxo de navegação ocorra exclusivamente pela interface e áreas relacionadas com autenticação sejam resguardadas por validação de login quando houver.</Typograph>
                </div>
            </span>
            <span>
                <div>
                    <Typograph variant='h4'>Banco de Dados</Typograph>
                    <Typograph>Toda maneira de interação com o banco de dados, seja na recuperação de informações, seja na escrita de novos registros precisa passar por uma fina preparação antes de qualquer execução. O objetivo aqui está em evitar informações inconsistêntes e ataques como SQL injection via formulários e semelhantes.</Typograph>
                </div>
                <div>
                    <Typograph variant='h4'>Sessão e Cookies</Typograph>
                    <Typograph>Adoção de sessão e cookies permitem personalizar a experiência do usuário. Entretanto é necessário atentar para aspectos definidos pela Lei Geral de Proteção de Dados (LGPD) bem como evitar roubo de sessão por terceiros. Além de recorrer a IDs dinâmicos, cabe também estabelecer tempo de expiração sessão e manutenção dos dados de navegação por inatividade do usuário.</Typograph>
                </div>
            </span>
        </article>
        <article className={cn('flex flex-col items-center justify-center space-y-5 py-8 px-20')}>
            <Typograph variant='h3'>Convenções de Boas Práticas de Programação</Typograph>
            <Typograph>Mais que propor uma solução, é torná-la escalável e flexível à mudanças.</Typograph>
            <div>
                <Typograph variant='h4'>IDIOMA</Typograph>
                <Typograph>Inglês</Typograph>
            </div>
            <span>
                <div>
                    <Typograph variant='h4'>CONSTANTES</Typograph>
                    <Typograph>UPPER_CASE</Typograph>
                    <Typograph>Ex.: GOLD_VALUE</Typograph>
                </div>
                <div>
                    <Typograph variant='h4'>VARIÁVEL, ATRIBUTO, PARÂMETRO</Typograph>
                    <Typograph>snake_case</Typograph>
                    <Typograph>Ex.: home_town</Typograph>
                </div>
                <div>
                    <Typograph variant='h4'>CLASSES</Typograph>
                    <Typograph>UpperCamelCase</Typograph>
                    <Typograph>Ex.: SpaceShip</Typograph>
                </div>
                <div>
                    <Typograph variant='h4'>FUNÇÃO, MÉTODO, PROCEDIMENTO</Typograph>
                    <Typograph>camelCase</Typograph>
                    <Typograph>Ex.: arithmeticAverage</Typograph>
                </div>
            </span>
            <div>
                <Typograph variant='h4'>ASSINATURA, RETORNO</Typograph>
                <Typograph>Tipo das declarações deve ser explicito</Typograph>
                <Typograph>Ex.: division(dividend: number, divisor: number): number</Typograph>
            </div>
            <span>
                <div>
                    <Typograph variant='h4'>ABERTURA DE CHAVES NO JAVASCRIPT</Typograph>
                    <Typograph>após na linha seguinte à assinatura da função, método procedimento ou estrutura</Typograph>
                </div>
                <div>
                    <Typograph variant='h4'>COMENTÁRIOS</Typograph>
                    <Typograph>Devem ficar acima da linha ao qual se referem. No caso de comentários sobre função, o comenário deve vir logo após abertura de chaves</Typograph>
                </div>
            </span>
            <span>
                <div>
                    <Typograph variant='h4'>HTML</Typograph>
                    <Typograph>Estão excluídas tags de formatação</Typograph>
                    <Typograph>Ex.: br center u</Typograph>
                </div>
                <div>
                    <Typograph variant='h4'>CSS</Typograph>
                    <Typograph>preservar ordem dos seletores de maneira que: primeiro \*, seguido pelos ids, depois classes, depois tags, depois ordem alfanumérica. Mesma ideia para atributos.</Typograph>
                </div>
            </span>
        </article>
      </section>
    );
  };
  export default PoliciesPage;