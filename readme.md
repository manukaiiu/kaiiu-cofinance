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
store certificates in /letsencrypt/acme.json

# project todos
find out how to update the server docker containers while keeping the database working.

# docker commands
! use a seperate terminal, because it will be occupied, or use "-d" to run the containers in the background


docker-compose --env-file .env.dev up --build
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
