BUILD_PATH			=	.
TE_DOCKER_NAME		=	timehe:latest
PORT				=	3000

all			:	build start

build		:
	@echo "🚧 Building timeHe's docker image..."
	docker build $(BUILD_PATH) -t $(TE_DOCKER_NAME)

start		:
	@echo "🚀 Starting timeHe's docker image..."
	docker run -p $(PORT):$(PORT) $(TE_DOCKER_NAME)

tests-no-ui	:
	@echo "🧪 Starting tests with no user interface..."
	npx cypress run

tests-ui	:
	@echo "🧪 Starting tests with user interface..."
	npx cypress open

.PHONY		:	all build start tests-no-ui tests-ui