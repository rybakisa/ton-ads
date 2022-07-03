FROM node:18.4.0-alpine AS build_frontend

ENV GUNICORN_USER_NAME=gunicorn
ENV GUNICORN_USER_UID=1001
ENV GUNICORN_USER_GROUP=root
ENV GUNICORN_HOME_DIR=/usr/frontend
RUN mkdir $GUNICORN_HOME_DIR
RUN adduser -D -u $GUNICORN_USER_UID -G $GUNICORN_USER_GROUP $GUNICORN_USER_NAME -h $GUNICORN_HOME_DIR
RUN chown -R $GUNICORN_USER_UID:$GUNICORN_USER_GROUP $GUNICORN_HOME_DIR
USER $GUNICORN_USER_UID

WORKDIR $GUNICORN_HOME_DIR
COPY frontend/package.json .
RUN npm install
COPY frontend .
RUN npm run build

FROM nginx:stable-alpine

ENV GUNICORN_USER_NAME=gunicorn
ENV GUNICORN_USER_UID=1001
ENV GUNICORN_USER_GROUP=root

RUN adduser -D -u $GUNICORN_USER_UID -G $GUNICORN_USER_GROUP $GUNICORN_USER_NAME
USER $GUNICORN_USER_UID
COPY --from=build_frontend /usr/frontend/build /var/www/frontend

USER root

COPY deployment/frontend/config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY deployment/frontend/config/nginx/cors.conf /etc/nginx/cors.conf
COPY deployment/frontend/config/nginx/proxy.conf /etc/nginx/proxy.conf
COPY deployment/frontend/config/nginx/proxy_payments.conf /etc/nginx/proxy_payments.conf
COPY deployment/frontend/config/nginx/ton_ads.nginx.conf /etc/nginx/conf.d/default.conf
