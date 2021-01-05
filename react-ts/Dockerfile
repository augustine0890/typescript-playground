# STEP 1: BUILD OF REACT PROJECT

# pull official base image
FROM node:12-alpine3.12 AS build
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
# add app
COPY . .
RUN yarn run build

# STEP 2: CREATE NGINX SERVER
FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]