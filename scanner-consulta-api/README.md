# Scanner Books API

Project API.

💻 Course: [Dominando o NodeJS](https://devsamurai.com.br)

## 🌱 On Development

### Requirements

- NodeJS 10.x (or upper)
- MongoDB
- Docker (opcional)


```
$ cp .env.example .env
$ npm i
$ npm run dev
```

**IMPORTANT:** For a PWA application to access local devices, it must connect to the API via HTTPS.

You can do this via [ngrok](https://ngrok.com/) or with [mkcert](https://github.com/FiloSottile/mkcert).

- [ngrok](https://ngrok.com/) is a small program that generates an https connection tunnel to your local machine. Downloading and running it will generate an access URL, adjust it in your application.
- [mkcert](https://github.com/FiloSottile/mkcert) creates a digital certificate to be used on your machine.


### Run Docker by Compose

The `docker-compose.yml` file already contains the MongoDB image and AdminMongo for local use.

```
$ docker-compose up
```

- MongoDB admin panel: http://localhost:8001
- Local MongoDB connection URL: `mongodb://root:secret@localhost:27017/samurai-books?authSource=admin`

PS: if you don't want to use Docker or have difficulties installing MongoDB, a viable alternative is [Atlas](https://www.mongodb.com/cloud/atlas), a MongoDB Cloud database.