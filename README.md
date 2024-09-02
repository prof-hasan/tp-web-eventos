# cefet-web-tp
***Documentos relativos às entregas do tp estão presentes na pasta `docs`***

***[Video no youtube](https://youtu.be/yaFG2X8u6Hw)***

# Devs
* [Victor Le Roy Matos](https://github.com/vmleroy)
* [Vinícius N. Silva](https://github.com/vnszero)
* [Willian Silva de Almeida](https://github.com/willhss1)

## Instalando e executando o projeto:
1. Instalar o NVM: 
* [for windows](https://github.com/coreybutler/nvm-windows).
* [for linux and others](https://github.com/nvm-sh/nvm).
* Após a instalação, instalar o Node 18 com o comando `nvm install 18` e, em seguida, `nvm use 18` ou `nvm use [id da versão]`.

2. Instalar o bundler:
* No momento estamos utilizando o [bun](https://bun.sh/), porém ele está em beta, portanto, caso ocorra erros, instalar o [pnpm](https://pnpm.io/pt/).

2.1. Caso tenha instalado o **pnpm**:
* Dentro do diretório `backup` temos os pacotes antigos utilizados para a instalação e funcionamento utilizando o bundler.
* Devemos substituir os arquivos do projeto pelos presentes nesta pasta. Por exemplo: o arquivo `root_[nome do arquivo].old` será colocado na raiz do projeto e, em seguinda, remover a extensão `.old`.

3. Instalando as CLIs:

3.1. Turbo:
* [Instalação](https://turbo.build/repo/docs/installing) --> Utilizar ou o *pnpm* ou *npm*.

3.2. Supabase:
* Para instalar, deve-se usar o [Homebrew](https://brew.sh/) ou o [Scoop](https://scoop.sh/).
* [Instalação do cli](https://supabase.com/docs/guides/cli/getting-started).

4. Configurando o banco de dados de Dev:
* Logar no [Supabase](https://supabase.com/).
* Criar um novo projeto em sua organização. **IMPORTANTE: SALVAR A SENHA DO BANCO POIS SERÁ NECESSÁRIO**.
* Ir nas configurações do projeto e ir na aba de API.
* Com as chaves **Project Url** e **Project API keys - anon public** em mãos, copiar o arquivo *.env.example* para cada projeto em `apps/[nome projeto]`.
* Alterar o nome de *.env.example* para *.env*.
* Agora com os *.env* configurados, seguir para o diretório `packages/infra-supabase` e execute os seguintes comandos:
* 
a. supabase login --> para logar no seu usuário.

b. supabase link --> para vincular o seu banco no projeto.

c. supabase db reset --linked --> para resetar o banco e executar as migrações.

*PS: Um outro comando importante:*

d. supabase db push --> aplicar as migrações pendentes.

6. Verifique se há mais alguma outra chave pendente para ser preenchida no `.env`

5. Com os passos anteriores feitos, agora é só executar o projeto. Para isso:
* Rode `bun i` ou `pnpm i`
* Rode `bun dev` ou `pnpm dev`

6. Com as tarefas feitas e a PR (Pull Request) cridas:
* Rode `bun lint` ou `pnpm lint` para verificar erros no eslint.
* Rode `bun run build` ou `pnpm build` para verificar errors no build.

7. Com todos os testes rodadados e tudo estando ok, basta pedir a outro dev que corrija a sua PR. Com tudo aprovado, faça o merge da PR na main e verifique o processo de build.

