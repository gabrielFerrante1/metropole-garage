
# Teste Técnico para Vaga de Developer Fullstack na Metrópole

<div align="center">
<img src="https://i.ibb.co/py0m6zm/metropole-loud-spacecaps-2024-2-2.png" alt="Metrópole Garage Logo" />
</div>

  
## Sobre o Projeto

Bem-vindo ao **Metrópole Garage**! Este repositório contém a aplicação desenvolvida como parte do teste técnico para a vaga de **Developer Fullstack** na Metrópole. 

Esse é um script para gerenciamento de veículos dos jogadores da **Metrópole RP!**

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

2. **Execute os comandos na pasta root da aplicação:** 

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

3. **Execute os comandos na pasta ui da aplicação:** 

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
    
5. **Inicie o Recurso no Servidor**

    Após isso, inicie o resource **`metropole-garage`** em seu servidor **FiveM**.
   
    Ao executar o servidor as tabelas necessárias serão automaticamente criadas no banco de dados e você já pode executar os comandos disponíveis.
   
    A aplicação não utiliza nenhum framework **FiveM**, como por exemplo: qbcore, esx, vrp, etc.

## Comandos Disponíveis

Aqui estão os comandos disponíveis que a aplicação adicionára ao **FiveM**:

| Comando                      | Descrição                                                                                                                                                       | Permissão       |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| `/car [placa]`               | Spawna um veículo no jogo usando a placa fornecida. Caso a placa não exista, a aplicação emitirá um evento `chat:addMessage` informando que a placa não está associada a nenhum veículo. Requer permissões ACE para execução. | Somente para ADMs|
| `/addcar [placa] [modelo]`   | Adiciona um carro à sua garagem. O comando gera automaticamente as cores primária e secundária do carro. Caso a placa já exista e esteja registrada a outro veículo, um erro será exibido no chat através do evento `chat:addMessage`. Este comando facilita a inserção de novos veículos na garagem, eliminando a necessidade de inserção manual no banco de dados e associação a um jogador. | Todos os Jogadores|
| `/garagem`                   | Abre ou fecha a interface gráfica desenvolvida em React + Vite + TypeScript. Esta interface exibe todos os carros do jogador e permite spawnar veículos. Também é possível fechar a interface pressionando a tecla Esc. | Todos os Jogadores|

## Vídeo de Demonstração

Confira o vídeo de demonstração da aplicação clicando na imagem abaixo:

[![Vídeo de Demonstração](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](LINK_DO_VIDEO)

## Design da Interface

O design da interface também está disponível no Figma. Veja o projeto completo pelo link abaixo:

[Visualizar Interface no Figma](https://www.figma.com/design/WYZvqFjluvF7jxgf9uQbMN/Metropole-Garage-UI?m=auto&t=vOy1iqJ6eUQexHrv-6)

## Contribuindo

Este projeto é parte do teste técnico para a vaga de Developer Fullstack na Metrópole e, portanto, não está aberto a contribuições externas.
