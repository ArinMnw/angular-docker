# FROM nginx:1.17.1-alpine
# COPY /dist/angular-docker /usr/share/nginx/html

FROM node:14.19.3-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


# Local
FROM nginx:1.19.9-alpine
COPY --from=build /usr/src/app/dist/fuse /usr/share/nginx/html
EXPOSE 80


# OpenShift
# FROM nginx:1.19.9-alpine
# RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
# COPY /etc/nginx/nginx.conf /etc/nginx/nginx.conf
# COPY /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
# RUN sed -i.bak 's/listen\(.*\)80;/listen 8080;/' /etc/nginx/conf.d/default.conf
# RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/dist/sand3 /usr/share/nginx/html


