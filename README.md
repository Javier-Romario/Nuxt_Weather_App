# Weather App - Built with Nuxt 3

```bash

git clone https://github.com/Javier-Romario/Nuxt_Weather_App.git

```

## Installation & Setup

Create a .env file with the provided API Key.

```bash
# Nuxt_Weather_App/.env

NUXT_WEATHER_API=your_api_key
```

### Docker Instructions

First, install Docker.
I like using the awesome:
[Docker Desktop](https://docs.docker.com/desktop/install/mac-install/),
or [Orbstack](https://docs.orbstack.dev/install)

To set up your docker container using Docker Compose, run the following command:

```bash

docker compose up --build

```

### Without Docker

```bash
cd Nuxt_Weather_App
npm install
npm run build
node .output/server/index.mjs
```
