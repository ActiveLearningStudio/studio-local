# Curriki Studio Local Setup

## Installation

1. Clone repo
2. Inside root folder write this command to create directories

> mkdir -p {esdata,postgresdata,mysqldata,pgadmin-data}

3. Run docker-compose up
4. Done

you can view studio on http://localhost:3000

# **Notes:**

Here are the issues other users have faced, if you face similar issues you can use this to solve

1. If permission errors like (Permission denied: '/var/lib/pgadmin/sessions' in Docker). Try run with `sudo chown -R 5050:5050 pgadmin-data` inside root folder
2. Try (docker-compose up) with sudo if you have some issues with permissions generally
3. If you face this error `[20760] INTERNAL ERROR: cannot create temporary directory!` then you might have space issue in your computer which needs to be cleared up
4. In case of timeouts error. Try this "COMPOSE_HTTP_TIMEOUT=200 docker-compose up"
