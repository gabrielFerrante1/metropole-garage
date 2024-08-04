
# Teste Técnico para Vaga de Full Stack Developer na Metrópole GG

<div align="center">
<img src="https://i.ibb.co/t3XYkh1/a2b52ae959b6537a37a6fe65572c7400-sm-removebg-preview-2.png" alt="Metrópole Garage Logo" />
</div>

  
## Sobre o Projeto

Bem-vindo ao **Metrópole Garage**! Este repositório contém a aplicação desenvolvida como parte do teste técnico para a vaga de **Full Stack Developer** na Metrópole GG. 

Esse é um script para gerenciamento de veículos dos jogadores da **Metrópole GG!**

## Vídeo de Demonstração

Confira o vídeo de demonstração da aplicação clicando na imagem abaixo:

[![Vídeo de Demonstração](https://i.ibb.co/K6LN4VC/Captura-de-tela-2024-08-03-162821.png)](https://streamable.com/1e42eh)

## Configuração do Banco de Dados

Antes de executar o projeto, você precisa configurar as credenciais do banco de dados. Siga os passos abaixo:

1. **Configure as Credenciais do Banco de Dados**

    Abra o arquivo de configuração do banco de dados localizado em: [db.config.ts](https://github.com/gabrielFerrante1/metropole-garage/blob/master/src/config/db.config.ts). 

    No arquivo, você encontrará um objeto onde deve inserir as credenciais do seu banco de dados. Atualize as variáveis conforme suas configurações!

## Como Executar o Projeto

1. **Clone o repositório ou Baixe o arquivo zip:**

    ```bash
    git clone https://github.com/gabrielFerrante1/metropole-garage
    ```

2. **Instalando as dependências e Criando build do projeto (Backend e Frontend):** 
    #### ⚠️ Os comandos abaixo devem ser executados na pasta [`root`](https://github.com/gabrielFerrante1/metropole-garage) para preparar o Backend e na pasta [`ui`](https://github.com/gabrielFerrante1/metropole-garage/tree/master/ui) para preparar o Frontend. ⚠️
  
     Com Yarn:

    ```bash
    yarn install
    ```

    Ou com NPM:

    ```bash
    npm install
    ```
   
    Com Yarn:

    ```bash
    yarn run build
    ```

    Ou com NPM:

    ```bash
    npm run build
    ```
    
4. **Inicie o Recurso no Servidor**

    Após isso, inicie o resource **`metropole-garage`** em seu servidor **FiveM**.
   
    Ao executar o servidor as tabelas necessárias serão automaticamente criadas no banco de dados e você já pode executar os comandos disponíveis.

    Essa aplicação utiliza [`StateBags`](https://docs.fivem.net/docs/scripting-manual/networking/state-bags/), portanto o [`OneSync`](https://docs.fivem.net/docs/scripting-reference/onesync/) deve estar habilitado no seu servidor **FiveM**
   
    A aplicação **não** utiliza nenhum framework **FiveM**.

## Comandos Disponíveis

Aqui estão os comandos disponíveis que a aplicação adicionará ao **FiveM**:

| Comando                      | Descrição                                                                                                                                                       | Permissão       |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| `/garagem`                   | Abre ou fecha a interface gráfica desenvolvida em React + TypeScript. Esta interface exibe todos os carros do jogador e permite spawnar veículos. Também é possível fechar a interface pressionando a tecla `Esc`. | Todos os Jogadores|
| `/car [placa]`               | Spawna um veículo no jogo usando a placa fornecida. Caso a placa não exista, a aplicação emitirá um evento `chat:addMessage` informando que a placa não está associada a nenhum veículo. Requer permissões ACE para execução. | Somente para ADMs|
| `/addcar [placa] [modelo]`   | Adiciona um carro à sua garagem. O comando gera automaticamente as cores primária e secundária do carro. A placa deve ter no máximo 8 caracteres. Caso a placa já exista ou o limite de caracteres seja atingido, um erro será exibido no chat através do evento `chat:addMessage`. Este comando facilita a inserção de novos veículos na garagem, eliminando a necessidade de inserção manual no banco de dados e associação a um jogador. | Todos os Jogadores|

## Design da Interface

O design da interface também está disponível no Figma. Veja o projeto completo pelo link abaixo:

[Visualizar Interface no Figma](https://www.figma.com/design/WYZvqFjluvF7jxgf9uQbMN/Metropole-Garage-UI?m=auto&t=vOy1iqJ6eUQexHrv-6)
