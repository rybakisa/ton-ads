COMPOSE_PROJECT := ton-ads
DOCKER_NETWORK_NAME := n1
export

.PHONY: up build npm_build build_up start down clean network

docker_compose := docker compose -p ${COMPOSE_PROJECT} -f docker-compose.yml

up: network
	${docker_compose} up -d
build:
	${docker_compose} build ${service}
npm_build:
	@cd ../frontend; npm run build
build_up: npm_build build up
start:
	${docker_compose} start
down:
	${docker_compose} down
clean:
	${docker_compose} down -v
	docker network rm ${DOCKER_NETWORK_NAME}
network:
	docker network inspect ${DOCKER_NETWORK_NAME} >/dev/null 2>&1 || \
	    docker network create --driver bridge ${DOCKER_NETWORK_NAME}
