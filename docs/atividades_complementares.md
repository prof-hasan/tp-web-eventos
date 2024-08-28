# Atividades complementares

As atividades marcadas estão concluídos

## 12/05 - Entrega parcial
- [x] 2 pontos: Concluir a entrega 2 até dia 12 de maio, independente da greve -- [Link da entrega](https://github.com/prof-hasan/tp-web-eventos/commit/7378a8abb69f0793a18ccb1dd0e7e22fda18be0d)

- [x] 2 pontos: O guia já apresente boas práticas de programação considerando também o(s) framework(s) a ser(em) usado(s) até dia 12 de maio, independente da greve
  - O guia de boas práticas está finalizado
  - [Link da entrega](https://github.com/prof-hasan/tp-web-eventos/commit/7378a8abb69f0793a18ccb1dd0e7e22fda18be0d)

- [x] 3 pontos: criar pelo menos um teste automatizado e antecipar a integração/entrega continua  (Continuous Integration e Continous Delivery) - ver entrega final
  - A integração continua já está implementado
  - Deploy realizado no netlify (há problemas com o acesso em prod por conta de senhas de enviroment)
  - Teste de build, lint e migrações do banco implementados (descritos no arquivo `requisitos_boas_praticas_programacao.md`)
    - É possível verificar os enviroments de CI neste [link](https://github.com/prof-hasan/tp-web-eventos/settings/environments)
    - Arquivos do git actions [aqui](https://github.com/prof-hasan/tp-web-eventos/tree/main/.github/workflows)
  
- [x] 2 pontos: uso de algum framework CSS (ex  Bootstrap, Materialize, Foundation)
  - Utilizado TailwindCSS, Radix-UI, CLSX e Tailwind Merge

## Entrega final
- [x] 3 pontos: Criar um ambiente de homologação e alguma forma de atualização dos dados do ambiente de produção para o de homologação (e do ambiente de desenvolvimento).
  - Há a definição dos bancos de Produção, Staging (homologação) e Preview (um banco de testes para cada PR)
    - Eles estão presentes no Supabase
    - Os scripts do git actions para gerar estes bancos está [aqui](https://github.com/prof-hasan/tp-web-eventos/tree/main/.github/workflows)
    - É possível verificar os enviroments de CI neste [link](https://github.com/prof-hasan/tp-web-eventos/settings/environments)

- Uso de recursos de JavaScript:
  - [x] 1 ponto: Local Storage
    - Foi utilizado os cookies ao invés do local storage 
  - [x] 2 pontos: Ajax
    - De acordo com a [Alura](https://cursos.alura.com.br/forum/topico-quando-usar-ajax-async-await-ou-then-234659#:~:text=AJAX%20(Asynchronous%20JavaScript%20and%20XML,o%20trabalho%20com%20c%C3%B3digo%20ass%C3%ADncrono.), os métodos de Async/Await é a forma mais moderna de se utilizar as requisições assíncronas.
    - Um exemplo de uso dos métodos Async/Await está presente [aqui](https://github.com/prof-hasan/tp-web-eventos/blob/main/packages/domain-events/src/events/data/get.ts)

- [x] 3 pontos: site responsivo por meio de media queries (não perdendo funcionalidades ao abrir em celular)
  - Foram utilizados não só as media queries, mas também métodos como o flex-wrap, que "quebra" a linha conforme a necessidade da tela. Além disso foram utilizados tamanhos dinâmicos (por meio de porcentagens e frações)
  - Exemplos: [header](https://github.com/prof-hasan/tp-web-eventos/blob/main/packages/design-system/src/organisms/headers/header-home.tsx) e [footer](https://github.com/prof-hasan/tp-web-eventos/blob/main/packages/design-system/src/organisms/footer.tsx)

- [ ] de 2 a 5 pontos (dependendo da complexidade): Uso de alguma API para extração/integração de dados

- [ ] 5 pontos: Extrair os dados de alguma página Web usando Selenium ou Beautifull Soap

- [ ] Uso APIs do HTML5 - a pontuação, quando 3 ou 2 pontos, pode variar conforme a quantidade de utilização no site - caso a API seja de simples uso:

