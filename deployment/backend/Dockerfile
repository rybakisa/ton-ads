FROM alang/django:3.2

ENV DJANGO_APP=megafon_dictionary
ENV DJANGO_MANAGEMENT_ON_START="migrate --noinput;collectstatic --noinput;compilemessages;"

USER root
RUN apk add --no-cache gcc postgresql-dev musl-dev zlib-dev jpeg-dev
USER $GUNICORN_USER_UID

COPY . /usr/django/app
RUN pip install --upgrade pip
RUN pip install -r app/requirements.txt
