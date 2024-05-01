
# Convenções de Boas Práticas de Programação do Projeto



## Gerais
Regras que devem valer para todas as liguagens usadas no projeto

### Idioma
Inglês



## Regras gerais linguagens de programção
Regras que devem valer para todas as linguagens de programação

### Nome de constantes
UPPER_CASE: todas as letras maiúsculas e palavras separadas por underscore. Ex.: GOLD_VALUE

### Nome de variáveis e atributos
camelCase: primeira palavra em minúsculo e toda palavra que segue tem a primeira letra maiúscula. Ex.: formData.
snake_case: todas as letras minúsculas com palavras separadas por sublinhados. Ex.: home_town -> usado no banco de dados.

### Nome de classe
UpperCamelCase: a primeira letra de toda palavra maiúscula. Ex.: SpaceShip.

### Nome de Função, Método e Procedimento
camelCase. Ex.: findAndChange().

### Parâmetros de Função, Método ou Procedimento
camelCase e indicar tipo do parâmetro obrigatório. Ex.: show(finalText: string).

### Retorno de Função ou Método
indicar o tipo de retorno junto a assinatura da função ou método. Ex.: division(dividend: number, divisor: number): number.



## Regras gerais do projeto
O framework padrão utilizado no projeto será o NextJs. É um framework que utiliza os fundamentos do React para o frontend, além de possibilitar algumas outras tecnologias, como o SSR (Server Side Rendering), que permite o acesso do back-end e front-end na mesma aplicação.


### Design-System
Para a montagem do design-system será utilizado o padrão atômico assim como a biblioteca do AntDesign, além de utilizar o framework React e o tailwindcss para a construção dos components e estilização.

#### Atoms
Componentes pequenos. Ex: button, input, typograph.

#### Molecules
Componentes pequenos misturados com o intuito de montar um componente maior. Ex: Card, Header, Footer.

#### Organisms
Componentes que possuem "vida", por exemplo, os providers. No geral são componentes que passam informação para os filhos. Ex: packages\design-system\src\organisms\layout-provider.tsx

#### Tailwind CSS
Biblioteca de estilização inline. Além dela será utilizado as bibliotecas tailwind-merge e clsx para fazer o controle e evitar possíveis problemas na estilização.


### Monorepo
Monorepo é um único repositório contendo vários mini-projetos interno. Ele permite criar pequenos pacotes para manter uma melhor organização do projeto.


### Banco de dados
Para o banco de dados será utilizado um bano em nuuvem baseado em PostgreSQL. Para as requisições vamos utilizar a CLI fornecida pelo banco para evitar o uso do SQL. Além disso será definido os tipos de cada requisição para mentermos um maior controle sob os dados obtidos e o uso de adapters para fazer a tradução de dados do front-end (as entidades) para os dados de back-end (os modelos)

