# Convenções de Boas Práticas de Segurança

## Comunicação
Comunicação criptografada por adoção de certificado Secure Socket Layer (SSL) de forma a adotar protocolo HTTPS entre o navegador e o servidor. Esse critério inclusive ajuda o site a pontuar no ranking do Google, logo pode ser definitivo para que nossa solução seja indexada e apareça nas buscas dos usuários.

## Banco de Dados
Toda maneira de interação com o banco de dados, seja na recuperação de informações, seja na escrita de novos registros precisa passar por uma fina preparação antes de qualquer execução. O objetivo aqui está em evitar informações inconsistêntes e ataques como SQL injection via formulários e semelhantes.

## Áreas Restritas
Parâmetros passados pela Uniform Resource Identifier (URI) que ficam expostos ao usuário final não podem abrir espaço para que terceiros consigam acessar áreas restritas da aplicação. O foco aqui está em garantir que todo e qualquer fluxo de navegação ocorra exclusivamente pela interface e áreas relacionadas com autenticação sejam resguardadas por validação de login quando houver.

## Sessão e Cookies
Adoção de sessão e cookies permitem personalizar a experiência do usuário. Entretanto é necessário atentar para aspectos definidos pela Lei Geral de Proteção de Dados (LGPD) bem como evitar roubo de sessão por terceiros. Além de recorrer a IDs dinâmicos, cabe também estabelecer tempo de expiração sessão e manutenção dos dados de navegação por inatividade do usuário.