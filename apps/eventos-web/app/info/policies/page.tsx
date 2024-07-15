const PoliciesPage = async () => {
    return (
      <section>
        <article>
            <h3>Convenções de Boas Práticas de Segurança</h3>
            <p>Mais que propor uma solução, é torná-la consistente e coerente com a realidade.</p>
            <span>
                <div>
                    <h4>Comunicação</h4>
                    <p>
                    Comunicação criptografada por adoção de certificado Secure Socket Layer (SSL) de forma a adotar protocolo HTTPS entre o navegador e o servidor. Esse critério inclusive ajuda o site a pontuar no ranking do Google, logo pode ser definitivo para que nossa solução seja indexada e apareça nas buscas dos usuários.</p>
                </div>
                <div>
                    <h4>Áreas Restritas</h4>
                    <p>Parâmetros passados pela Uniform Resource Identifier (URI) que ficam expostos ao usuário final não podem abrir espaço para que terceiros consigam acessar áreas restritas da aplicação. O foco aqui está em garantir que todo e qualquer fluxo de navegação ocorra exclusivamente pela interface e áreas relacionadas com autenticação sejam resguardadas por validação de login quando houver.</p>
                </div>
            </span>
            <span>
                <div>
                    <h4>Banco de Dados</h4>
                    <p>Toda maneira de interação com o banco de dados, seja na recuperação de informações, seja na escrita de novos registros precisa passar por uma fina preparação antes de qualquer execução. O objetivo aqui está em evitar informações inconsistêntes e ataques como SQL injection via formulários e semelhantes.</p>
                </div>
                <div>
                    <h4>Sessão e Cookies</h4>
                    <p>Adoção de sessão e cookies permitem personalizar a experiência do usuário. Entretanto é necessário atentar para aspectos definidos pela Lei Geral de Proteção de Dados (LGPD) bem como evitar roubo de sessão por terceiros. Além de recorrer a IDs dinâmicos, cabe também estabelecer tempo de expiração sessão e manutenção dos dados de navegação por inatividade do usuário.</p>
                </div>
            </span>
        </article>
        <article>
            <h3>Convenções de Boas Práticas de Programação</h3>
            <p>Mais que propor uma solução, é torná-la escalável e flexível à mudanças.</p>
            <div>
                <h4>IDIOMA</h4>
                <p>Inglês</p>
            </div>
            <span>
                <div>
                    <h4>CONSTANTES</h4>
                    <p>UPPER_CASE</p>
                    <p>Ex.: GOLD_VALUE</p>
                </div>
                <div>
                    <h4>VARIÁVEL, ATRIBUTO, PARÂMETRO</h4>
                    <p>snake_case</p>
                    <p>Ex.: home_town</p>
                </div>
                <div>
                    <h4>CLASSES</h4>
                    <p>UpperCamelCase</p>
                    <p>Ex.: SpaceShip</p>
                </div>
                <div>
                    <h4>FUNÇÃO, MÉTODO, PROCEDIMENTO</h4>
                    <p>camelCase</p>
                    <p>Ex.: arithmeticAverage</p>
                </div>
            </span>
            <div>
                <h4>ASSINATURA, RETORNO</h4>
                <p>Tipo das declarações deve ser explicito</p>
                <p>Ex.: division(dividend: number, divisor: number): number</p>
            </div>
            <span>
                <div>
                    <h4>ABERTURA DE CHAVES NO JAVASCRIPT</h4>
                    <p>após na linha seguinte à assinatura da função, método procedimento ou estrutura</p>
                </div>
                <div>
                    <h4>COMENTÁRIOS</h4>
                    <p>Devem ficar acima da linha ao qual se referem. No caso de comentários sobre função, o comenário deve vir logo após abertura de chaves</p>
                </div>
            </span>
            <span>
                <div>
                    <h4>HTML</h4>
                    <p>Estão excluídas tags de formatação</p>
                    <p>Ex.: br center u</p>
                </div>
                <div>
                    <h4>CSS</h4>
                    <p>preservar ordem dos seletores de maneira que: primeiro \*, seguido pelos ids, depois classes, depois tags, depois ordem alfanumérica. Mesma ideia para atributos.</p>
                </div>
            </span>
        </article>
      </section>
    );
  };
  export default PoliciesPage;