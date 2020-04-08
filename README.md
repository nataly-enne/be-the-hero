# Be the Hero
> Aplicação web com NodeJS, React e React Native desenvolvida na semana OmniStack 11.

## 1. Configurando ambiente 

Primeiro é necessário baixar o node.js.
Se você está numa distribuição diferente do ubuntu, entre no [site](https://nodejs.org/en/) do _node.js_ e baixe de acordo com sua distribuição.

No ubuntu, execute no terminal:
```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
```
Em seguida,
```bash
sudo apt-get install -y nodejs
```
### 1.1 Configurando Back-End 
Na pasta _backend_ instalamos as dependências executando no terminal `npm install`.

### 1.2 Configurando Front-End
Na pasta _frontend_ instalamos as dependências executando no terminal `npm install`.

## 2. Testar a aplicação
Basta criar um servidor para o Front-End e um para o Back-End.

- No terminal, na pasta _backend_ inicie o servidor com `npm start`.
- Em outro terminal, na pasta _frontend_ inicie com `npm start`.

Deverá abrir uma página `localhost:3333`.

#### Caso abra com uma porta diferente

1. Na pasta _backend_
  - Vá para a pasta _src_
  - No arquivo _index.js_ mude o valor da porta em `app.listen()`.


2. Na pasta _frontend_
  - Vá para a pasta _services_
  - Haverá o caminho em _baseURL_. Mude o valor da porta.
  
 ## 3. Aplicação mobile
 > Pra testar o _app_ eu usei o expo direto no meu celular baixando o aplicativo da expo.
 
 Para isso, instale a expo e as depêndencias com:
```bash
npm install expo-cli --global 
```
Caso falte alguma dependência use `npm install`.

Para executar a aplicação use `npm start`.
