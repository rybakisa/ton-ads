FROM alang/django:4.0

ENV DJANGO_APP=api
ENV DJANGO_MANAGEMENT_ON_START="migrate --noinput;collectstatic --noinput;"

USER root
RUN apk add --no-cache gcc postgresql-dev musl-dev zlib-dev jpeg-dev
USER $GUNICORN_USER_UID

COPY backend/api /usr/django/app
RUN pip install --upgrade pip
RUN pip install -r app/requirements.txt
