# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React with Docker - NodeJS & Nginx
- Builds Docker image from Dockerfile (`--tag , t`: name and optionally a tag in the `name:tag` format)
    - `docker build -t <name> .`
- List containers (`-a`: show all containers)
    - `docker ps -a`
- List images (`-a`: show all images (default hides intermediate images))
    - `docker images`
- Run a cmd in a new container
    - `-it`: starts the container in the interactive mode that allows you to interact with `/bin/bash` of the container. That means now you will have bash session inside the container.
    - `--publish , -p`: publish a container’s port(s) to the host
    - `--name`: assign a name to the container
    - `docker run -it -p 8000:80 --name reactdockerized react-ts`

- The `-p` option is used to map port 80 of the container to the host machine port 8000. The container exposes a Web server on port 80, and we can map ports on our computer to ports exposed by the container.

- Stop running containers
    - `docker stop CONTAINER`
- Once the container has stopped, you can remove it by using the `docker rm` command.