# SERVER API

Para iniciar o servidor , primeiro baixe as dependências
```
npm i
```
Gere as dependências do banco
```
npx prisma generate dev
```
Agora inicie 
```
npm run dev
```

## Configuração API

O servidor precisa que exista um arquivo `.env` na raiz do projeito com algumas informações.(Existe o arquivo .env.example para ajudar)

* PORT
```
  Passe a port onde o servidor irá escutar as rotas
```
* URL
```
  URL para exibição do servidor
```
* NODE_ENV
```
  O ambiente de desenvolve , DEV ( desenvolvimento) , PROD (producao) , TEST (teste)
```
* ORIGIN
```
  Qual a origem para API escutar apenas dessa origin , ao passar apenas * ele ira permitir de todos 
```
* KEY
```
  Palavra secreta para criptografia
```
* KEY_PATH
```
  Caminho para a chave do certificado
```
* CERT_PATH
```
  Caminho para o certificado 
```
* DATABASE_URL
```
  URL para o Banco de conexão
```

## OPEN SSL
Em ambiente de desenvolvimento se não tiver um certificado para usar , baixe o OPENSSL e digite o comando abaixo na pasta onde deseja salvar o certificado e a chave

```
openssl req -x509 -newkey rsa:2048 -nodes -keyout server.key -out server.crt -days 365
```
