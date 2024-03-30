# Convenções de Boas Práticas de Segurança

## Criptografia
Utilizar HTTPS para criptografar a comunicação com uso de certificado SSL.

## Formulários
Todo procedimento que estiver relacionado com procedimentos no banco por recuperação de dados de formulário devem passar por preparação antes de feita execução do comando. O objetivo é evitar ataques como SQL injection.

## Hiperlinks
Dados passados por get que ficam expostos no hiperlink não podem abrir espaço para que o usuário comum consiga acessar áreas restritas da aplicação.

## Ids de sessão
Ids de sessão que mudam com o tempo para evitar roubo de sessão. Sessão que também pode expirar por inatividade do usuário.