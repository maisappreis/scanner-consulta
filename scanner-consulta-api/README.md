# Samurai Books API

API de exemplo do projeto.

💻 Curso de referência: [Dominando o NodeJS](https://devsamurai.com.br)

## Desenvolvimento

### Requisitos

- NodeJS 10.x (ou superior)
- MongoDB
- Docker (opcional)

### Executando local

```bash
$ cp .env.example .env # ajustar os parâmetros
$ yarn
$ yarn dev
```

**IMPORTANTE:** Para que um aplicativo PWA acesse os dispositivos locais é necessário que se conecte na API via HTTPS.

Você pode fazer isso via [ngrok](https://ngrok.com/) ou com o [mkcert](https://github.com/FiloSottile/mkcert).

- O [ngrok](https://ngrok.com/) é um pequeno programa que gera um túnel de conexão https para a sua máquina local. Baixando e executando ele vai gerar uma URL de acesso, ajuste no seu aplicativo.
- O [mkcert](https://github.com/FiloSottile/mkcert) cria um certificado digital para ser utilizado na sua máquina.

### Executando o Docker via Compose

O arquivo `docker-compose.yml` já contém a imagem do MongoDB e o AdminMongo para uso local.

```bash
$ docker-compose up
```

- Painel admin do MongoDB: http://localhost:8001
- URL de conexão MongoDB local: `mongodb://root:secret@localhost:27017/samurai-books?authSource=admin`

PS: caso não queira utilizar o Docker ou tem dificuldades para instalar o MongoDB uma alternativa viável é o [Atlas](https://www.mongodb.com/cloud/atlas), um banco de dados MongoDB Cloud.

## Comunidade

Se você gostou desse código vai gostar ainda mais do nosso curso [Dominando o NodeJS](https://devsamurai.com.br), clique e conheça.

Se ficou com alguma dúvida participe da nossa comunidade Samurai no Discord acesse https://lp.devsamurai.com.br/discord
