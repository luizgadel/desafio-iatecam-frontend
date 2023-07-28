# DesafioDevIatecam

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.0.1. No entanto, por fins de reuso de componentes, a versão utilizada para rodar esse projeto é a 13.3.11.

# Como rodar

Assumindo que você já tenha instalado o Node.js e o Angular CLI, os passos são os seguintes:
1. Abra uma janela do aplicativo "Prompt de comando" ou "Git Bash".
2. Em seguida, execute o comando "npm install". Esse comando instalará os pacotes necessários do Node para execução do projeto. Você deve receber uma saída parecida com a abaixo:
"
added 1005 packages, and audited 1000 packages in 1m
123 packages are looking for funding
    run `npm fund` for details
"
3. Após a instalação dos pacotes, execute o comando `ng serve -o`. Esse comando iniciará um servidor que ficará executando a aplicação e abrirá a página inicial da aplicação no endereço `http://localhost:4200`. OBS: Neste passo, se você estiver usando Windows, evite utilizar o Powershell para executar o comando, pois particularmente ele não estava me deixando executar comandos do Angular CLI.
4. Fim. Após o 3° passo, o aplicação está sendo executada e você pode utilizá-la.

# Como acessar

Após iniciar o servidor da aplicação, basta acessar o endereço `http://localhost:4200`.

# Como realizar login

No momento, o banco de dados está mockado então qualquer conjunto de email e senha válidos consegue logar no sistema. A condição para que um email seja válido é que ele tenha o formato "a@b.c" e para uma senha, que ela tenha 6 ou mais caracteres.

# Status das funcionalidades

As funcionalidades a seguir estão disponíveis na aplicação:
- Realizar login;
- Cadastrar usuário;
- Visualizar lista de produtos;
- Visualizar dashboard;

As funcionalidades a seguir não estão finalizadas:
- Cadastro de produto;
- Cadastro de categoria;
- Compra;