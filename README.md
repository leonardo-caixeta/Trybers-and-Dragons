# Trybers and Dragons

## Sobre
Trybers and Dragons é uma simulação de jogo de RPG (Role-Playing Game) onde os jogadores podem criar personagens de diferentes raças e arquétipos, participar de batalhas e explorar um mundo mítico. Este projeto foi projetado para demonstrar os princípios da programação orientada a objetos (POO) em TypeScript, exibindo polimorfismo, encapsulamento, herança e mais.

## Tecnologias
- **Linguagem:** TypeScript
- **Frameworks:** 
  - *Express*
  -  *Jest* (para execução de testes unitários)
- **Containerização:** Docker

## Primeiros Passos
### Pré-requisitos
- Node.js (v14 ou posterior)
- npm (v6 ou posterior)
- Docker (para execução com Docker Compose)

### Instalação
1. Clone o repositório:
   ```bash
   git clone <url-do-repositório>
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd Trybers-and-Dragons
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando o Código
- **Com NPM:**
  1. Para iniciar a aplicação:
     ```bash
     npm start
     ```
  2. Para desenvolvimento com recarregamento automático:
     ```bash
     npm run dev
     ```
  3. Para executar os testes:
     ```bash
     npm test
     ```

- **Com Docker Compose:**
  - Para construir e iniciar o serviço usando Docker Compose, execute o seguinte comando no diretório do projeto:
    ```bash
    docker-compose up -d
    ```
  - Isso irá construir um container Docker baseado na imagem do Node.js versão 16.14.2, configurando o ambiente necessário para executar a aplicação dentro de um container chamado `trybers_and_dragons`, com um volume mapeado que sincroniza os arquivos do projeto para dentro do container, facilitando o desenvolvimento e execução.

### Arquivos e Pastas Desenvolvidos
Eu fui responsável pelo desenvolvimento das seguintes pastas e arquivos, focando em funcionalidades específicas do projeto:
- `src/Archetypes/`
- `src/Battle/`
- `src/Character.ts`
- `src/Energy.ts`
- `src/Fighter/`
- `src/Monster.ts`
- `src/Races/`

O restante pelo desenvolvimento das seguintes pastas e arquivos, facilitando o desenvolvimento ativo e a execução dos testes:
- Testes específicos localizados em `tests/sources/` para garantir a qualidade e o funcionamento das funcionalidades desenvolvidas.

O restante do código foi desenvolvido pela Trybe, proporcionando uma base sólida para a construção deste projeto.

## Contribuindo
Contribuições são bem-vindas! Sinta-se livre para fazer um fork do repositório, fazer suas alterações e enviar um pull request.
