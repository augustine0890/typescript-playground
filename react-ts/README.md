# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React with Docker - NodeJS & Nginx
- Builds Docker image from Dockerfile (`--tag , t`: name and optionally a tag in the `name:tag` format)
    - `docker build -t <name> .`
- List __images__ (`-a`: show all images (default hides intermediate images))
    - `docker images`
- Remove images
    - `--force , -f`: force removal of the image
    - `docker rmi IMAGE`
    - `docker rmi $(docker images -a -q)` --> remove all images

- Docker images consist of multiple layers. Dangling images are layers that have no relationship to any tagged images. They no longer serve a purpose and consume disk space. 
    - `docker images -f dangling=true` --> list all dangling images
    - `docker image prune` --> remove dangling images
    - `docker rmi $(docker images -f "dangling=true" -q)`

- Run a cmd in a new container
    ```
    docker run -it \
        --rm \
        -p 8000:80 \
        --name <container> <image>
    ```

    - `-it`: starts the container in the interactive mode that allows you to interact with `/bin/bash` of the container. That means now you will have bash session inside the container.
    - `--rm`: removes the container and volumnes after the container exits.
    - `--publish , -p`: publish a container’s port(s) to the host
    - `--name`: assign a name to the container
    - The `-p` option is used to map port 80 (for inter-container communication) of the container to the host machine port 8000. The container exposes a Web server on port 80, and we can map ports on our computer to ports exposed by the container.

- List __containers__ (`-a`: show all containers)
    - `docker ps -a`
- Stop running containers
    - `docker stop CONTAINER`
- Once the container has stopped, you can remove it by using the `docker rm` command.
- Remove all exited containers
    - `docker rm $(docker ps -a -f status=exited -q)`
- Stop and remove all containers
    - `docker stop $(docker ps -a -q)`
    - `docker rm $(docker ps -a -q)`

- Images can exist without containers, whereas a container needs to run a image to exist. Therefore, containers are dependent on images and use them to construct a run-time environment and run an application. (From Dockerfile to Image to Container)

**docker-compose.yml**
- Docker compose is basically tool to run mulitple container from a single service. It uses a yaml file which contains the configuration to run the containers

- Without the _anonymous_ volume (`'/app/node_modules'`), the _node_modules_ directory would be overwritten by the mounting of the host directory at runtime.
    - _Build_: the `node_modules` directory is created in the image.
    - _Run_: the current directory is mounted into the container, overwriting the `node_modules` that were installed during the build.

    ```
    environment:
        - CHOKIDAR_USEPOLLING=true
    ```
- `CHOKIDAR_USEPOLLING=true` enables a polling mechanism via chokidar (which wraps `fs.watch`, `fs.watchFile`, and `fsevents`) so that hot-reloading will work.

- Builds, (re)creates, starts, and attaches to containers for a service.
    - `docker-compose up`
    - `--detach`: starts the containers in the background and leaves them running.
    - `--build`: build images before starting containers.
- List containers
    - `docker-compose ps`
- Stops running containers without removing them
    - `docker-compose stop`
    - They can be started again with `docker-compose start`.

## GitHub Actions
- User can create custom Software Development Life Cycle (SDLC) workflows.
- Build end-to-end CI (Continous Integration) and Continuous Development (CD)

**The Syntax**
- Workflow: Since the GitHub action provides the facility to build end-to-end continuous integration (CI) and continuous deployment (CD) capabilities, this term refers to that point when the flow starts executing by the CI tool.
- Job: This term refers to all the tasks in a single workflow. A workflow contains more than one jobs and it is required for all of them to complete their execution to prevent the failure.
- Step: For a job to complete its execution, it must complete all the steps embedded in it.
- Action: Action is the primary subset of Step and the smallest subset of Workflow. Every step consists of multiple actions that must get executed successfully.

[**Quickstart**](https://docs.github.com/en/free-pro-team@latest/actions/quickstart)