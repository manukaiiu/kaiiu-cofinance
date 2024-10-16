# run project

## prepare for running
+ pre-requesits installed: 
 + git
 + node
 + npm
 + docker
 + docker-compose
+ clone repo 
+ run "npm i" in backend and frontend
+ (if necessary) install
+ continue with your prefered way of running

## run project for the first time (only database in container)
+ run database container with docker commands
+ in dir backend:
 + npm run db:reset (optional)
 + npm run db:migrate

## run project (only database in container)
+ in root: npm run start:db
+ in backend: npm run start
+ in frontend: npm run dev

## run project (all in containers)
+ npm run start


# small docker howto

## install (on linux)
### docker
+ sudo apt-get update
+ sudo apt-get install -y docker.io
+ sudo docker run hello-world // for testing
### docker-compose
+ sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
+ sudo chmod +x /usr/local/bin/docker-compose
+ docker-compose --version
+ sudo usermod -aG docker $USER // make sure docker-compose commands can be run without sudo privilege


## commands
! use a seperate terminal, because it will be occupied, or use "-d" to run the containers in the background
! --build is optional if the images are already built

docker-compose --env-file .env.dev up --build <optional only service>
docker-compose --env-file .env.dev up --build backend
docker-compose --env-file .env.dev up --build frontend
docker-compose --env-file .env.dev up database

docker-compose --env-file .env.prod up --build

stop containers:
docker-compose down

remove also volumes:
docker-compose down -v

other docker commands:
docker-compose logs
docker-compose logs <service>

list running containers:
docker ps

list docker volumes:
docker volume ls

inspect volumes:
docker volume inspect <eg pgdata>

remove volumes unattached to any container
docker volume prune ???

delete a volume
docker volume rm <eg pgdata>


# make changes to database schema
+ change in schema.prisma
+ create migration and apply it: npm run db:migrate:new -- <migration-name>
+ if the new migration should not be applied immediately:
 + dotenv -e .env.dev -- npx prisma migrate dev --name <migration-name> --create-only
+ npx prisma generate // to create new types
+ ... change models (???), services, etc


# check database with psql
if container database is running
+ method 1: open shell with psql in container
 + docker exec -it database psql -U postgres -d kaiiu-cofinance
+ method 2: psql from localhost
 + sudo -i -u postgres
 + psql -h localhost -U postgres -d kaiiu-cofinance


# vscode settings
+ tab size: 2


# learning server components
- docker containers for database, backend, frontend, reverse-proxy
- docker volume(s)
- .env.prod files (optional secrets management)
- docker network configuration
- firewall rules
- data backups
- monitoring (prometheus or grafana)
- CI/CD pipeline or tools for updating like watchtower; github - - actions; jenkins
- readme instructions


# server setup todos
+ make the root user to the docker group to allow docker compose to run
 + sudo usermod -aG docker $USER
+ store certificates in /letsencrypt/acme.json


# project todos
+ make sure prod docker-compose settings work (providing .env for run) -> compose = build + run? for prod just build? and provide env on run manually? 
+ combine migrate:new script with "npx prisma generate" while keeping the param working
+ how to setup .env.dev best; using "localhost" for dev and for testing with containers we need "database". two different .env.devs? another level of vars?
